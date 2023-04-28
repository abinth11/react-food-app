import React from 'react';
import { logoImageUrl } from '../constants';
const logo = (
  <div className='logo'>
    <img src={logoImageUrl} alt='logo' />
  </div>
);
const Header = () => (
  <div className='header'>
    <a href='/'> {logo}</a>
    <ul>
      <li>
        Search
        <input type='text' placeholder='Search...' />
      </li>
      <li>Offers</li>
      <li>Help</li>
      <li>Sign In</li>
      <li>Cart</li>
    </ul>
  </div>
);
export default Header;
