import React from "react";
import "./PlayShifu.css";

const PlayShifu = () => {
  return (
    <div className="playshifu-container">
      {/* Top Banner */}
      <div className="top-banner">Never-before offers - Upto 25% OFF! </div>
      {/* <marquee width="60%" direction="left" height="100px">
        This is a sample scrolling text that has scrolls texts to the left.
      </marquee> */}

      {/* Main Navbar */}
      <div className="main-navbar">
        <div className="left-icons">
          <i className="fas fa-search"></i>
          <img
            src="https://flagcdn.com/w40/in.png"
            alt="India Flag"
            className="flag-icon"
          />
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="logo">
          <img src="https://www.playshifu.com/logo.svg" alt="PlayShifu" />
        </div>
        <div className="right-icons">
          <i className="fas fa-shopping-cart"></i>
          <i className="fas fa-user-circle"></i>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="bottom-nav">
        <div className="nav-item">
          Shop By Category <i className="fas fa-chevron-down"></i>
        </div>
        <div className="nav-item">
          Shop By Age <i className="fas fa-chevron-down"></i>
        </div>
        <div className="nav-item badge">
          Super Saver Deals <span className="offer-badge">Up To 25% Off</span>
        </div>
        <div className="nav-item badge">
          Birthday Gifts <span className="offer-badge">Up To 25% Off</span>
        </div>
        <div className="nav-item badge">
          Return Gifts <span className="offer-badge red">Up To 30% Off</span>
        </div>
        <div className="nav-item">Shop All</div>
        <div className="nav-item">
          More <i className="fas fa-chevron-down"></i>
        </div>
      </div>

      {/* Product Section */}
      <div className="product-section">
        {/* Left Side */}
        <div className="product-left">
          <img
            src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-1.webp&w=640&q=100"
            alt="Junior Genius Pack"
            className="main-image"
          />
          <div className="thumbnails">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-5.webp&w=640&q=100"
                alt={`Thumbnail ${index + 1}`}
                className="thumbnail"
              />
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="product-right">
          <h2 className="title">Junior Genius Pack</h2>
          <p className="subtitle">
            <a href="#">Plugo Count</a> & <a href="#">Plugo Letters</a> &{" "}
            <a href="#">Plugo Link</a>
          </p>

          <div className="stars">
            ★★★★☆ <span>(4.5)</span>
          </div>

          <div className="badges">
            <span className="badge purple">High Educational Value</span>
            <span className="badge red">Flat 25% off</span>
            <span className="badge red-border">Super Saver Deals</span>
          </div>

          <div className="price">
            ₹3749 <span className="strike">₹4999</span>
          </div>

          <ul className="desc">
            <li>
              <strong>Plugo Count</strong> - An interactive math learning kit to
              master addition, subtraction, multiplication, and division.
            </li>
            <li>
              <strong>Plugo Letters</strong> - Encourages children to spell
              using toy letters to solve word puzzles.
            </li>
            <li>
              <strong>Plugo Link</strong> - Build shapes with magnetic tiles to
              solve screen puzzles.
            </li>
          </ul>

          <button className="add-to-cart">Add To Cart</button>

          <div className="info-icons">
            <div className="info">
              <strong>4-10</strong>
              <br /> Age Group
            </div>
            <div className="info">
              🚚 <br />
              Free Shipping
            </div>
            <div className="info">
              🛡 <br />6 months warranty
            </div>
            <div className="info">
              🔄 <br />
              30 Day Return
            </div>
          </div>
        </div>
      </div>

      {/*Product Guide Section*/}
    </div>
  );
};

export default PlayShifu;
