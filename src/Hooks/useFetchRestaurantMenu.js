import { useEffect, useState } from 'react';
const useFetchRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState(null);
  const [menuTitle, setMenuTitle] = useState('');
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getRestaurantData();
  }, []);
  const menuItems = menu?.length ? menu?.length : 0;
  const getRestaurantData = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.927532&lng=76.2638427&restaurantId=${resId}&submitAction=ENTER`,
      );
      const restaurantData = await data.json();
      setIsLoading(false);
      setRestaurant(restaurantData?.data?.cards[0]?.card?.card?.info);
      setMenuTitle(
        restaurantData?.data?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card?.card
          ?.title,
      );
      setMenu(
        restaurantData?.data?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card?.card
          ?.itemCards,
      );
    } catch (error) {
      setError(error);
      setIsError(true);
    }
  };
  return [restaurant, menu, menuTitle, menuItems, isLoading, isError, error];
};
export default useFetchRestaurantMenu;
