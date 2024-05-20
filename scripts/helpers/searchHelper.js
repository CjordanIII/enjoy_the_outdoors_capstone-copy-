function searchData(nationalParksArray, targetedValue) {
  const parkList = nationalParksArray.filter(
    (item) => item.State === targetedValue
  );
  return parkList;
}

export { searchData };
