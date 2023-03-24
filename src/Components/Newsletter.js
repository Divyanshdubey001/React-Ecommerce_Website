import "../Styles/newsletter.css";

const Newsletter = () => {
  return (
    <>
      <div className="news-container">
        <div className="news-wrapper">
          <div className="news-desc">
            <h2>
              Join Our <br></br>Newsletter
            </h2>
            <div className="news-input">
              <input placeholder="Your Email"></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
