import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import RestaurantCard from './restaurant/RestaurantCard';
import ShimmerEffect from './shimmer';
import RestaurantContext from './contexts/restaurantContext';
const Body = () => {
  const {restaurant,isLoading} = useContext(RestaurantContext)
  const shimmer = new Array(15).fill(0)
  return (
          <div className='mt-36 flex flex-wrap ml-32 '>
            {
              isLoading
                ? (
                  shimmer?.map((item, index) => <ShimmerEffect key={index} />)
                )
                : (restaurant?.map((restaurant) => {
                  return <Link className='card-link' to={`/view-restaurant/${restaurant.data.id}`} key={restaurant.data.id}><RestaurantCard {...restaurant.data} /></Link>
                }))
            }
          </div >
  );
}
export default Body;
