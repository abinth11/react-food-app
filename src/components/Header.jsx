import React from "react";
import { logoImageUrl } from "../constants";
import filterData from "../filterAlgorithm";
const logo = (
  <div className="logo">
    <img src={logoImageUrl} alt="logo" />
  </div>
);
const Header = ({searchText,setSearchText,restaurant,setRestaurant}) => {
  return (
    <div className="header">
      <a href="/"> {logo}</a>
      <ul>
        <li>
          <input type="text"
            placeholder="Search..."
            value={searchText}
            onChange={e => {
              setSearchText(e.target.value)
              filterData(searchText,restaurant,setRestaurant) 
            }}
          />
        </li>
        <li>Offers</li>
        <li>Help</li>
        <li>Sign In</li>
        <li>Cart</li>
      </ul>
    </div>
  )
}

export default Header;
