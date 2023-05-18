import { useEffect, useState } from 'react';
import { fetchRestaurantsUrl } from '../constants';
import filterRestaurant from '../Helpers/filterAlgorithm';
const useFetchRestaurant = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');
  const [filteredRestaurants,setFilteredRestaurants] = useState([])
  useEffect(() => {
    getRestaurants();
  }, []);
  const getRestaurants = async () => {
    try {
      const data = await fetch(fetchRestaurantsUrl)
      const parsedJson = await data.json();
      setRestaurants(parsedJson?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(parsedJson?.data?.cards[2]?.data?.data?.cards)
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      setIsError(true);
      setError(error);
    }
  };
  return [restaurants,filteredRestaurants,setFilteredRestaurants,isLoading, isError, error];
};

export default useFetchRestaurant;
