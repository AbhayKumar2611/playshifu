import React from "react";
import "./PlayShifu.css";

const PlayShifu = () => {
  const items = [
    {
      src: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fout-of-the-box%2Fletters-trunk.webp&w=1080&q=75",
      text: "Count Spike",
    },
    {
      src: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fout-of-the-box%2F48-letter-tiles.webp&w=1080&q=75",
      text: "2 Sets Of 0-9 Numerals",
    },
    {
      src: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fout-of-the-box%2Fquick-start-guide.webp&w=1080&q=75",
      text: "Gamepad",
    },
    {
      src: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fout-of-the-box%2Fgamepad.webp&w=1080&q=75",
      text: "Quick Start Guide",
    },
    {
      src: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fout-of-the-box%2Fnumerals-and-arithmetic-operators.webp&w=1080&q=75",
      text: "48 Letter Tiles",
    },
    {
      src: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fout-of-the-box%2Fcount-spike.webp&w=1080&q=75",
      text: "Letters Trunk",
    },
  ];

  const games = [
    {
      src: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fgames%2Fgame-3.webp&w=384&q=75",
      title: "Where’s My Roar?",
    },
    {
      src: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fgames%2Fgame-2.webp&w=384&q=75",
      title: "Crossword Climber",
    },
    {
      src: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-link%2Fgames%2Fgame-2.webp&w=384&q=75",
      title: "Who Am I?",
    },
    {
      src: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-link%2Fgames%2Fgame-4.webp&w=384&q=75",
      title: "Loco Jojo",
    },
  ];
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

      {/*In The Box Section*/}
      <div className="in-the-box-container">
        <h2>In The Box</h2>
        <div className="box-grid">
          {items.map((item, index) => (
            <div className="box-item" key={index}>
              <img src={item.src} alt={item.text} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/*Free In-App Games*/}
      <div className="free-games-section">
        <h2>Free In-App Games</h2>
        <p>To play, download the complimentary Plugo app</p>

        <div className="games-container">
          {games.map((game, index) => (
            <div className="game-card" key={index}>
              <img src={game.src} alt={game.title} />
              <p>{game.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/*Device Compatibility Secction*/}
      <div className="compatibility-section">
        <h2>Device Compatibility</h2>
        <div className="device-cards">
          <div className="device-card">
            <h3>🤖 android</h3>
            <ul>
              <li>All devices with RAM 3GB and above except Samsung</li>
              <li>All Samsung devices with RAM 2GB and above</li>
              <li>
                Devices with 11 inches screen and below (Samsung A9+ is not
                compatible)
              </li>
            </ul>
          </div>
          <div className="device-card">
            <h3>🍎 iOS</h3>
            <ul>
              <li>iPhone 6S and above</li>
              <li>iPad mini 4 and above</li>
              <li>iPad Air 2 and above</li>
              <li>iPad 5th gen and above</li>
              <li>Pad Pro 11 inches only</li>
            </ul>
          </div>
          <div className="device-card">
            <h3>
              📱 <span className="amazon-title">Amazon Fire</span>
            </h3>
            <ul>
              <li>Fire 7 (2022 release)</li>
              <li>Fire 8 (2020 and 2022 release)</li>
              <li>Fire 8 Plus (2020 and 2022 release)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Parent Also Bought Section */}
      <h2 style={{ textAlign: "center" }}>Parents Also Bought</h2>
      <div className="parent-also-bought">
        <div className="product-suggestions">
          <div className="product-card">
            <img
              src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-animals%2Fcarousal%2Fcarousal-1.webp&w=640&q=75"
              alt="Plugo Count"
            />
            <h3>Plugo Count</h3>
            <p>Math Kit (ages 4-10)</p>
            <p className="price">₹2,499</p>
          </div>
          <div className="product-card">
            <img
              src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-detective%2Fcarousal%2Fcarousal-1.webp&w=640&q=75"
              alt="Tacto Coding"
            />
            <h3>Tacto Coding</h3>
            <p>Learn to code (ages 4-10)</p>
            <p className="price">₹2,999</p>
          </div>
          <div className="product-card">
            <img
              src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Forboot-earth-explorer%2Fcarousal%2F1.webp&w=640&q=75"
              alt="Orboot Earth"
            />
            <h3>Orboot Earth</h3>
            <p>Globe + App (ages 4-10)</p>
            <p className="price">₹2,999</p>
          </div>
          <div className="product-card">
            <img
              src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fpeppa-pig%2Fcarousal%2F1.webp&w=640&q=75"
              alt="Orboot Earth"
            />
            <h3>Orboot Earth</h3>
            <p>Globe + App (ages 4-10)</p>
            <p className="price">₹2,999</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer-container">
        <div className="footer-content">
          {/* Column 1 */}
          <div className="footer-column">
            <h4>Shop</h4>
            <ul>
              <li>STEM Toys</li>
              <li>STEM Wiz Pack</li>
              <li>Shifu Bundles</li>
              <li>Gift Cards</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>FAQs</li>
              <li>Track Order</li>
              <li>Return & Refund Policy</li>
              <li>Warranty</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Our Story</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-column">
            <h4>Join Our Mailing List</h4>
            <p>
              Be the first to know about new products, exclusive deals, and
              more!
            </p>
            <div className="subscribe-box">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 PlayShifu. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default PlayShifu;
