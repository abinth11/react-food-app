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
        try {
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.927532&lng=76.2638427&restaurantId=${resId}&submitAction=ENTER`)
            const restaurantData = await data.json()
            console.log(restaurantData.data)
            console.log(restaurantData?.data?.cards[0]?.card?.card?.info)
            setRestaurant(restaurantData?.data?.cards[0]?.card?.card?.info)
            setMenu(null)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="view-restaurant">
            <p className="rest-url">Home / {restaurant?.city} / {restaurant?.areaName} / {restaurant?.name}</p>
            <div className="restaurant-details">
                {/* <img className="main-img" src={`${restaurantImageUrl}/${restaurant?.cloudinaryImageId}`} alt="restaurant" /> */}
                <h2>{restaurant?.name}</h2>
                <p style={{paddingTop:'0px'}}>{restaurant?.cuisines?.join(', ')}</p>
                <p>{restaurant?.areaName}, {restaurant?.sla?.lastMileTravelString} </p>
                <p>{restaurant?.feeDetails?.message}</p>
                <p>{restaurant?.avgRating}</p>
                <p>{restaurant?.totalRatingsString}</p>
            </div>
        </div>
    )
}
export default ViewRestaurant