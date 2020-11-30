// from data.js
let tableData = data;

// Select the button
let button = d3.select("#filter-btn");

// Select the form
let form = d3.select("#datetime");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  let inputElement = d3.select("#datetime");

  // Get the value property of the input element
  let inputValue = inputElement.property("value");
  // let inputValue_state = inputElement.property("value");

  let filteredData = data.filter(item => item.datetime === inputValue);
  let filteredData_ctiy = data.filter(item => item.city === inputValue);
  let filteredData_state = data.filter(item => item.state === inputValue);
  let filteredData_country = data.filter(item => item.country === inputValue);
  let filteredData_shape = data.filter(item => item.shape === inputValue);


  // Append the filtered data in table
  let tbody = d3.select("tbody");

  filteredData.forEach((item) => {
    let row = tbody.append("tr");
    Object.entries(item).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });

  filteredData_ctiy.forEach((item) => {
    let row = tbody.append("tr");
    Object.entries(item).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });

  filteredData_state.forEach((item) => {
    let row = tbody.append("tr");
    Object.entries(item).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });

  filteredData_country.forEach((item) => {
    let row = tbody.append("tr");
    Object.entries(item).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });

  filteredData_shape.forEach((item) => {
    let row = tbody.append("tr");
    Object.entries(item).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });

};
