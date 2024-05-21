function showDropdown(element, arr) {
  arr.forEach((item) => {
    const option = document.createElement("option");
    option.textContent = item;
    option.value = item;

    element.appendChild(option);
  });
}
export { showDropdown };
