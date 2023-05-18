import React, { useState } from 'react';
import { restaurantImageUrl } from '../../constants';
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  sla,
  costForTwoString,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className='w-72 pt-3 pb-3 mx-3 mb-10 p-2 hover:rounded-sm hover:border hover:shadow-md hover:scale-100 transform transition-transform duration-30 flex flex-col justify-between'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className='h-40 ml-2'
        src={`${restaurantImageUrl}/${cloudinaryImageId}`}
        alt='restaurant image'
      />
      <h3 className='font-md text-xl m-2'>{name}</h3>
      <h4 className='pl-2 text-sm font-thin'>{cuisines.join(', ')}</h4>
      <h5 className='text-sm font-thin mt-3 pl-2'>
        <span className='mr-14'>{avgRating}</span>
        <span className='mr-7'>{sla.deliveryTime}&nbsp;&nbsp;Mins</span>
        <span className='text-end'>{costForTwoString}</span>
      </h5>
      {isHovered && (
        <>
          <hr className='mt-2 ml-2 mr-2' />
          <button className='text-blue-500 text-sm font-medium mt-3 self-center'>
            QUICK VIEW
          </button>
        </>
      )}
    </div>
  );
};

export default RestaurantCard;
