import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-gray-800 mt-20 text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="text-sm">
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="text-sm">
              <li>Our Story</li>
              <li>Our Mission</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="text-sm flex justify-center space-x-4">
              <li>
                <a href="#">
                  <AiFillFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillTwitterCircle />
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="text-sm">
              <li>
                <FaPhoneAlt /> +1 123-456-7890
              </li>
              <li>
                <GrMail /> contact@fooddeliveryapp.com
              </li>
              <li>123 Main Street</li>
              <li>Anytown, USA 12345</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <p className="text-center text-sm text-gray-400">
          © 2023 Fresh Bite. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
