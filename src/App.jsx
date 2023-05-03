import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { restaurantData } from './constants';


const AppLayout = () => {
  useEffect(() => {
    getRestaurants()
  }, [])
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurant, setFilteredRestaurant] = useState([])
  const [searchText, setSearchText] = useState("")
  const getRestaurants = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.927532&lng=76.2638427&page_type=DESKTOP_WEB_LISTING")
    const parsedJson = await data.json()
    setFilteredRestaurant(parsedJson?.data?.cards[2]?.data?.data?.cards)
    setAllRestaurants(parsedJson?.data?.cards[2]?.data?.data?.cards)
    console.log(parsedJson?.data?.cards[2]?.data?.data?.cards)
  }
  return (
    <>
      <Header searchText={searchText}
        setSearchText={setSearchText}
        restaurant={filteredRestaurant}
        setRestaurant={setFilteredRestaurant}
        allRestaurant={allRestaurants} />
      <Body restaurant={filteredRestaurant} allRestaurants={allRestaurants} />
      <Footer />
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
