function displayState(result, tableBody) {
  // clears out table before (avoids repeated append)
  tableBody.innerHTML = "";
  result.forEach((value) => {
    // Create a new table row

    const row = document.createElement("tr");

    // Create and populate table cells
    const tr = document.createElement("tr");
    const cell1 = document.createElement("td");
    cell1.textContent = value.LocationID;
    const cell2 = document.createElement("td");
    cell2.textContent = value.LocationName;
    const cellst = document.createElement("td");
    cellst.textContent = value.State;
    const cell3 = document.createElement("td");
    cell3.textContent = value.Address;
    const cell4 = document.createElement("td");
    const link = document.createElement("a");
    // checks for link
    if (value.Visit) {
      link.href = value.Visit;
      link.textContent = `${value.Visit}`;
      link.target = "_blank";
    } else {
      link.textContent = "N/A";
    }
    // add data to html
    cell4.appendChild(link);

    // Append cells to the row
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cellst);
    row.appendChild(cell3);
    row.appendChild(cell4);
    tr.appendChild(row);

    // Append the row to the table body
    tableBody.appendChild(row);
  });
}
export { displayState };
