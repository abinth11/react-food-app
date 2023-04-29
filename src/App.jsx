import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { restaurantData } from './constants';
const AppLayout = () => {
  const [restaurant, setRestaurant] = useState(restaurantData)
  const [searchText, setSearchText] = useState("")
  return (
    <>
      <Header searchText={searchText}
        setSearchText={setSearchText}
        restaurant={restaurant}
        setRestaurant={setRestaurant} />
      <Body restaurant={restaurant} />
      <Footer />
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
