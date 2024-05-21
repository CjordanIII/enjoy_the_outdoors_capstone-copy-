import { showDropdown } from "./dropDownHelper.js";
import { displayState } from "./displayHelper.js";
function searchData(nationalParksArray, targetedValue, searchType) {
  const parkList = nationalParksArray.filter(
    (item) => item.State === targetedValue
  );
  const parkListType = nationalParksArray.filter((item) => {
    if (item.LocationName.includes(targetedValue)) {
      return true;
    }
  });
  if (searchType === "location") {
    return parkList;
  } else if (searchType === "byType") {
    return parkListType;
  } else {
    return "no park found";
  }
}

function findByState(
  locationsArray,
  nationalParksArray,
  location,
  row,
  tableBody
) {
  // template logic for dropdown
  locationsArray.unshift("select by state");
  showDropdown(location, locationsArray);
  location.addEventListener("change", (event) => {
    const targetedValue = event.target.value;
    const result = searchData(nationalParksArray, targetedValue, "location");
    displayState(result, row, tableBody);
  });
}
function findByType(parkTypesArray, nationalParksArray, parkType) {
  parkTypesArray.unshift("select by park type");
  let result;
  showDropdown(parkType, parkTypesArray);
  parkType.addEventListener("change", (event) => {
    const targetedValue = event.target.value;
    result = searchData(nationalParksArray, targetedValue, "byType");
  });
  return result;
}

export { searchData, findByState, findByType };
