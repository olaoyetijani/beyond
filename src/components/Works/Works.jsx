import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.png";
import "./work.css";

const Works = () => {
  return (
    <div>
      <div className="beyond__works" id="works">
        <h4>Our Works</h4>
        <div className="beyond__works-content">
          <div className="beyond__work-detail">
            <h3>01</h3>
            <h5>Sharada</h5>
            <p>Kano</p>
            <p>View Details</p>
          </div>
          <div className="beyond__works-image">
            <img src={work1} alt="" />
          </div>
        </div>

        <div className="beyond__works-reverse">
          <div className="beyond__work-detail">
            <h3>02</h3>
            <h5>Life Camp</h5>
            <p>Abuja</p>
            <p>View Details</p>
          </div>
          <div className="beyond__works-image">
            <img src={work2} alt="" />
          </div>
        </div>

        <div className="beyond__works-content">
          <div className="beyond__work-detail">
            <h3>03</h3>
            <h5>Bannan Island</h5>
            <p>Lagos</p>
            <p>View Details</p>
          </div>
          <div className="beyond__works-image">
            <img src={work3} alt="" />
          </div>
        </div>
      </div>
      <div className="beyond__works-para">
        <p>
          We would love to hear about your project ideas and discuss how we can
          collaborate to bring them to life. Contact us to start a conversation
          about your next architectural endeavor.
        </p>
      </div>
    </div>
  );
};

export default Works;
