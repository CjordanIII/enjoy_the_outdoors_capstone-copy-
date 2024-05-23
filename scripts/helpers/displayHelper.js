function displayState(result, tableBody) {
  // clears out table before (avoids repeated append)
  tableBody.innerHTML = "";
  console.log(result);
  result.forEach((value) => {
    // Create a new table row

    const row = document.createElement("tr");

    // Create and populate table cells
    const tr = document.createElement("tr");
    const cell1 = document.createElement("td");
    if (value.LocationID) {
      cell1.textContent = value.LocationID;
    } else {
      cell1.textContent = "N/A";
    }
    const cell2 = document.createElement("td");

    if (value.LocationName) {
      cell2.textContent = value.LocationName;
    } else {
      cell2.textContent = "N/A";
    }
    const cellPhone = document.createElement("td");
    if (value.Phone || value.Fax) {
      cellPhone.textContent = `Phone: ${
        value.Phone ? value.Phone : "N/A"
      } Fax: ${value.Fax ? value.Fax : "N/A"}`;
    } else {
      cellPhone.textContent = "N/A";
    }
    const cellst = document.createElement("td");

    if (value.State) {
      cellst.textContent = value.State;
    } else {
      cellst.textContent = "N/A";
    }
    const cell3 = document.createElement("td");

    if (value.Address) {
      cell3.textContent = value.Address;
    } else {
      cell3.textContent = "N/A";
    }
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
    row.appendChild(cellPhone);
    row.appendChild(cellst);
    row.appendChild(cell3);
    row.appendChild(cell4);
    tr.appendChild(row);

    // Append the row to the table body
    tableBody.appendChild(row);
  });
}
export { displayState };
