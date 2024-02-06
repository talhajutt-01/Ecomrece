import React from 'react';
import { Link } from 'react-router-dom'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Hero.css";

const Hero = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...sliderSettings}>
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 style={{ fontFamily: "'Rubik Glitch Pop', sans-serif", color:"dark" }}>Discover the Latest Mobile Phones</h1>
            <p>Explore a wide range of smartphones with cutting-edge features and technology.</p>
            <div className="cta-buttons">
              <Link to="/" className="explore-btn">
                Scroll Down
              </Link>
              <Link to="/cart" className="contact-btn">
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 style={{ fontFamily: "'Rubik Glitch Pop', sans-serif", color:"dark" }}>Discover the Latest Mobile Phones</h1>
            <p>Explore a wide range of smartphones with cutting-edge features and technology.</p>
            <div className="cta-buttons">
              <Link to="/" className="explore-btn">
                Scroll Down
              </Link>
              <Link to="/cart" className="contact-btn">
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 style={{ fontFamily: "'Rubik Glitch Pop', sans-serif", color:"dark" }}>Discover the Latest Mobile Phones</h1>
            <p>Explore a wide range of smartphones with cutting-edge features and technology.</p>
            <div className="cta-buttons">
              <Link to="/" className="explore-btn">
                Scroll Down
              </Link>
              <Link to="/cart" className="contact-btn">
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Hero;
