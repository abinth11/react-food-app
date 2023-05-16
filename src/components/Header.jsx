import React from "react";
import { logoImageUrl } from "../constants";
import filterData from "../Helpers/filterAlgorithm";
import { Link } from "react-router-dom";
const logo = (
  <div className="w-36 p-2 m-2 ml-14">
    <img src={logoImageUrl} alt="logo" />
  </div>
);
const Header = ({ searchText, setSearchText, restaurant, setRestaurant, allRestaurant }) => {
  return (
    <div className="bg-fixed fixed top-0 w-full flex justify-between shadow-lg p-3 font-bold border rounded-md z-20">
      <a href="/">{logo}</a>
      <ul className="flex mr-32">
        <li className="mx-4 my-4">
          <input
            type="text"
            className="rounded-full p-2 border shadow-md"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              filterData(searchText, restaurant, setRestaurant, allRestaurant);
            }}
          />
        </li>
        <li className="mx-3 my-6">
          <Link className="" to="/offers">
            Offers
          </Link>
        </li>
        <li className="mx-3 my-6">
          <Link className="nav-link" to="/help">
            Help
          </Link>
        </li>
        <li className="mx-3 my-6">
          <Link className="nav-link" to="/login">
            Sign In
          </Link>
        </li>
        <li className="mx-3 my-6">
          <Link className="nav-link" to="/cart">
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
