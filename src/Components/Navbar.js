import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/navbar.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="image-container">
        <div className="navbar-container">
          <div className="title-nav">
            <a href="#bebold">Be Bold</a>
          </div>
          <div className="nav-bar-wrapper">
            <div className={`nav-bar-menu ${showMenu ? "show" : ""}`}>
              <nav>
                <ul>
                  <li>
                    <NavLink to="/home">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/signup">SignUp</NavLink>
                  </li>
                  <li>
                    <NavLink to="/addtocart">Cart</NavLink>
                  </li>
                  <li>
                    <AddShoppingCartIcon className="cartIcon" />
                  </li>
                </ul>
                <div className="nav-bar-hamburger" onClick={toggleMenu}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="panding-page-wrapper">
          <div className="landing-page">
            <h1>
              <b>NEW ARRIVALS</b>
            </h1>
            <div className="landing-page-desc">
              <br></br>
              Our new collection of plants<br></br>
              delivered to your door
            </div>
            <button className="landing-page-button">Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
