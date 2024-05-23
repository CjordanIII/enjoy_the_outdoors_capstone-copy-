function showDropdown(element, arr) {
  // drop down crater
  arr.forEach((item) => {
    const option = document.createElement("option");
    option.textContent = item;
    option.value = item;

    element.appendChild(option);
  });
}
export { showDropdown };
