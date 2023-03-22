import { NavLink } from "react-router-dom";
import "../Styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="image-container">
        <div className="navbar-container">
          <div className="title-nav">
            <a href="#bebold">Be Bold</a>
          </div>
          <div className="nav-bar-wrapper">
            <nav>
              <ul>
                <li>
                  <NavLink to="/smartphones">Smartphones</NavLink>
                </li>
                <li>
                  <NavLink to="/laptop">Laptop</NavLink>
                </li>
                <li>
                  <NavLink to="/groceries">Groceries</NavLink>
                </li>
                <li>
                  <NavLink to="/fragnence">Fragnences</NavLink>
                </li>
                <li>
                  <NavLink to="/skincare">Skin Care</NavLink>
                </li>
                <li>
                  <NavLink to="/home decoration">Home Decoration</NavLink>
                </li>
              </ul>
            </nav>
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
