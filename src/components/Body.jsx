import React from 'react';
import RestaurantCard from './RestaurantCard';
import ShimmerEffect from './shimmer';
const Body = ({ restaurant, allRestaurants, isLoading }) => {
  const shimmer = new Array(15).fill(0)
  return  (
      <div className='body'>
        {
          isLoading
            ? (
              shimmer.map((item,index) => <ShimmerEffect key={index} />)
            )
            : (restaurant.map((restaurant) => {
              return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            }))
        }
      </div >
    );
}
export default Body;
