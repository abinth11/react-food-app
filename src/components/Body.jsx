import React from 'react';
import RestaurantCard from './RestaurantCard';
const Body = ({restaurant }) => {
 
  return (
    <div className='body'>
      {restaurant.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
}
export default Body;
