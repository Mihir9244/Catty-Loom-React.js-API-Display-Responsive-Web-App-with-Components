import React from "react";
import logo from "../Assets/catty-loom-high-resolution-logo-transparent (3).png";

const Footer = () => {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="footer-top text-center mb-4">
          <img src={logo} alt="Catty-loom Logo" className="footer-logo" />
        </div>

        <div className="row footer-sections">
          <div className="col-md-4 mb-4 mb-md-0 footer-links">
            <h5>Useful Links</h5>
            <ul className="list-unstyled footer-links">
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="col-md-4 mb-4 mb-md-0 footer-contact">
            <h5>Contact Us</h5>
            <address>
              XYZ City Town. Yz Place
            </address>
            <p>Phone: 00 10 20 30 40 50</p>
            <p>Email: info@Cattyloom.com</p>
          </div>

          <div className="col-md-4 footer-subscribe">
            <h5>Search Beautiful Cats!</h5>
            <p>
              Catty Loom is an interactive demo platform to explore, save, and admire cat images with detailed insights.
            </p>
            <form>
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Your email" />
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer-bottom text-center mt-4">
          <div className="social-links mb-3">
            <a href="#" className="mx-2"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="mx-2"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" className="mx-2"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="mx-2"><i className="fa-brands fa-x-twitter"></i></a>
          </div>
          <p>
            Copyright © 2024 Catty-Loom. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
