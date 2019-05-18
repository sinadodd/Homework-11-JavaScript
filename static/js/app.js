var tbody = d3.select("tbody");

// from data.js
var tableData = data;

tableData.forEach(function (sightingReport) {
    // console.log(sightingReport);
    var row = tbody.append("tr");
    Object.entries(sightingReport).forEach(function ([key, value]) {
        // console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

var submit = d3.select("#filter-btn");

submit.on("click", function () {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node. Get the value of each.
    var inputDate = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");

    var filteredData = tableData;
    if (inputDate != "") {
        filteredData = filteredData.filter(sighting => sighting.datetime == inputDate);
    };
    if (inputCity != "") {
        filteredData = filteredData.filter(sighting => sighting.city == inputCity);
    };
    if (inputState != "") {
        filteredData = filteredData.filter(sighting => sighting.state == inputState);
    };
    if (inputCountry != "") {
        filteredData = filteredData.filter(sighting => sighting.country == inputCountry);
    };
    if (inputShape != "") {
        filteredData = filteredData.filter(sighting => sighting.shape == inputShape);
    };
    
    document.getElementById("form-id").reset();
    tbody.html("");

    filteredData.forEach(function (sightingReport) {
        var row = tbody.append("tr");
        Object.entries(sightingReport).forEach(function ([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});