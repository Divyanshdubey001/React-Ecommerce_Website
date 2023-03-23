import "../Styles/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="aboutus">
          Be Bold.
          <div className="desc">
            <p className="desc-about">
              <br></br>
              <br></br>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              <br></br>
              It has been the industry's standard dummy text ever since the 1500s, 
              <br></br>
              when an unknown printer took a galley of type.
            </p>
            <p>
              <br></br>
              <br></br>
              Copyright 2020 Catalog-Z Company. All rights reserved.
            </p>
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-wrapper">{/*  */}</div>
          <div className="links">Our Links</div>
          <div className="list">
            <ul>
              <li>Smartphone</li>
              <li>Laptop</li>
              <li>Fragnences</li>
              <li>Skin Care</li>
              <li>Groceries</li>
              <li>Gift Cards</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
