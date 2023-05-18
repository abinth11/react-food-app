const filterRestaurant = (searchText, setRestaurant, allRestaurant) => {
  if ((searchText === '')) {
    return;
  }
  const filteredData = allRestaurant.filter((item) => {
    return item.data.name.toLowerCase().trim().includes(searchText.toLowerCase().trim());
  });
  setRestaurant(filteredData);
};
export default filterRestaurant;
