import React from 'react';
import RestaurantCard from './RestaurantCard'
import { restaurantData } from '../constants';
const Body = () => (
    <div className='body'>
      {
        restaurantData.map(restaurant => {
          return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
        })
      }
    </div>
  )
  export default Body