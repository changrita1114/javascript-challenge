// from data.js
let tableData = data;

// Append the filtered data in table
let tbody = d3.select("tbody");

function buildTable(data) {
  // Clear existing data
  tbody.html("");

  // Loop through each object in the data 
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((item) => {
      let cell = row.append("td");
      cell.text(item);
    });
  });
}

// Keep track of all filters
let filters = {};

function updateFilters() {

  // Save the element, value, and id of the filter that was changed
  let changedElement = d3.select(this).select("input");
  let elementValue = changedElement.property("value");
  let filterId = changedElement.attr("id");

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
  if (elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  }

  // call function to apply all filters and rebuild the table
  filterTable();
}

function filterTable() {

  // Set the filteredData to the tableData
  let filteredData = tableData;
  // Loop through all of the filters and keep any data that
  // matches the filter values
  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  });

  // Rebuild the table using the filtered data
  buildTable(filteredData);
}

// Attach an event to listen for change to each filter
d3.selectAll(".filter").on("change", updateFilters);

// Build the table when page loads
buildTable(tableData);
