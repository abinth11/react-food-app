import React from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './shimmer';
const Body = ({restaurant,allRestaurants }) => {
  console.log(restaurant.length)
  // if(restaurant.length == 0) {
  //   restaurant.length = 15
  //   restaurant.fill(0)
  // }
  console.log(restaurant)
  return restaurant.length ==0
  ?(<Shimmer/>)
  :  (
    <div className='body'>
      {restaurant.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
      })}
    </div>
  );
}
export default Body;
