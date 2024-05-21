function displayState(result, tableBody) {
  result.forEach((value) => {
    // Create a new table row

    const row = document.createElement("tr");

    // Create and populate table cells
    const cell1 = document.createElement("td");
    cell1.textContent = value.LocationID;
    const cell2 = document.createElement("td");
    cell2.textContent = value.LocationName;
    const cell3 = document.createElement("td");
    cell3.textContent = value.Address;
    const cell4 = document.createElement("td");
    const link = document.createElement("a");
    link.href = value.URL;
    link.textContent = "Link";
    cell4.appendChild(link);

    // Append cells to the row
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);

    // Append the row to the table body
    tableBody.appendChild(row);
  });
}
export { displayState };
