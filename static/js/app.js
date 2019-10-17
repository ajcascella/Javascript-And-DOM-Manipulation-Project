// Assign the data from `data.js` to a descriptive variable
var sightings = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the button
var button  = d3.select("#filter-btn")

  button.on("click", function() {
   
  // Select input element  
  var inputElement = d3.select("#datetime");

  // Get the value of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(sightings);

  // Check if input value exists within the data
  var filteredData = sightings.filter(sighting => sighting.datetime === inputValue);

  // Display results
  console.log(filteredData);

  // Append object to table if input value exists in data
  filteredData.forEach((sightingReport) => {
    var row = tbody.append("tr");
    Object.entries(sightingReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});