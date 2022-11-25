import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer grid-rows-2 p-10 bg-neutral text-neutral-content">
      <div>
        <span className="footer-title">Support</span>
        <Link to="/" className="link link-hover">
          Help Center
        </Link>
        <Link to="/" className="link link-hover">
          Contact Us
        </Link>
        <Link to="/" className="link link-hover">
          Live Chat
        </Link>
        <Link to="/" className="link link-hover">
          Advertisement
        </Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to="/" className="link link-hover">
          Careers
        </Link>
        <Link to="/" className="link link-hover">
          Jobs
        </Link>
        <Link to="/" className="link link-hover">
          About us
        </Link>
        <Link to="/" className="link link-hover">
          Feedback
        </Link>
      </div>
      <div>
        <span className="footer-title">Shop for a Car</span>
        <Link to="/" className="link link-hover">
          Used Cars
        </Link>
        <Link to="/" className="link link-hover">
          Auto Loans
        </Link>
        <Link to="/" className="link link-hover">
          Car Comparison
        </Link>
      </div>
      <div>
        <span className="footer-title">Popular Brands</span>
        <Link to="/" className="link link-hover">
          Toyota
        </Link>
        <Link to="/" className="link link-hover">
          Ford
        </Link>
        <Link to="/" className="link link-hover">
          Nissan
        </Link>
        <Link to="/" className="link link-hover">
          Chevrolet
        </Link>
      </div>
      <div>
        <span className="footer-title">Explore</span>
        <Link to="/" className="link link-hover">
          Features
        </Link>
        <Link to="/" className="link link-hover">
          Enterprise
        </Link>
        <Link to="/" className="link link-hover">
          Security
        </Link>
        <Link to="/" className="link link-hover">
          Pricing
        </Link>
      </div>
      <div>
        <span className="footer-title">Popular Styles</span>
        <Link to="/" className="link link-hover">
          SUV
        </Link>
        <Link to="/" className="link link-hover">
          Crossover
        </Link>
        <Link to="/" className="link link-hover">
          Sedan
        </Link>
        <Link to="/" className="link link-hover">
          Truck
        </Link>
      </div>
      <div>
        <span className="footer-title">Buyer Resources</span>
        <Link to="/" className="link link-hover">
          Car Pricing
        </Link>
        <Link to="/" className="link link-hover">
          Car Buying
        </Link>
        <Link to="/" className="link link-hover">
          Buying Guides
        </Link>
      </div>
      <div>
        <span className="footer-title">Used Car Prices</span>
        <Link to="/" className="link link-hover">
          $10,000 to 15,000
        </Link>
        <Link to="/" className="link link-hover">
          $15,000 to 20,000
        </Link>
        <Link to="/" className="link link-hover">
          $20,000 to 25,000
        </Link>
        <Link to="/" className="link link-hover">
          $25,000 to 30,000
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
