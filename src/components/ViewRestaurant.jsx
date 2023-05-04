import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { restaurantImageUrl } from "../constants";
const ViewRestaurant = () => {
    const [restaurant, setRestaurant] = useState(null)
    const [menu, setMenu] = useState(null)
    useEffect(() => {
        getRestaurantData()
    }, [])
    const { resId } = useParams()
    const getRestaurantData = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.927532&lng=76.2638427&restaurantId=${resId}&submitAction=ENTER`)
        const restaurantData = await data.json()
        console.log(restaurantData.data)
        console.log(restaurantData?.data?.cards[0]?.card?.card?.info)
        setRestaurant(restaurantData?.data?.cards[0]?.card?.card?.info)
        setMenu(null)
    }
    return (
        <div className="view-restaurant">
            <h2>view restaurant</h2>
            {
                console.log(restaurant?.cloudinaryImageId)
            }
            <img src={`${restaurantImageUrl}/${restaurant?.cloudinaryImageId}`} alt="restaurant" />
            <h2>{restaurant?.name}</h2>
            <h3>city:{restaurant?.city}</h3>
            <h4>area:{restaurant?.areaName}</h4>
        </div>
    )
}
export default ViewRestaurant