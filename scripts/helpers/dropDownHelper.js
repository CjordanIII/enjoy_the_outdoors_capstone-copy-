function showDropdown(child, display, arr) {
  const dropdown = document.querySelector("#dropDown");
  const clon = dropdown.content.cloneNode(true);
  arr.forEach((item) => {
    const option = document.createElement("option");
    option.textContent = item;
    option.value = item;
    clon.querySelector("select").appendChild(option);
  });
  document.body.appendChild(clon);
}
export { showDropdown };
