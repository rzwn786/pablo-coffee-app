import React from "react";
import Navbar from "./navbar2";
import Footer from "./footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Contact.css";
import Shop1 from "./assets/kedai1.jpg";
import Shop2 from "./assets/kedai2.jpg";
import Shop3 from "./assets/kedai3.jpg";



const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="locate-us-container">
        <div className="margin-top">
          <Carousel className="carousel">
            <div className="image">
              <img src={Shop1} />
            </div>
            <div className="image">
              <img src={Shop2} />
            </div>
            <div className="image">
              <img src={Shop3} />
            </div>
          </Carousel>
        </div>
        <div className="contact-container">
          <ul>
            <li>
              Address: 12A, Lorong Datuk Sulaiman 1, Taman Tun Dr Ismail, 60000
              Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur
            </li>
            <li>Phone: +6035613227</li>
            <li>Email: pablocoffee@gmail.com</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
