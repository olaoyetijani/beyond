import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import slide4 from "../../assets/slide4.png";
import slide5 from "../../assets/slide5.png";
import slide6 from "../../assets/slide6.png";
import slide7 from "../../assets/slide7.png";
import ImageComponent from "../ImageComponent";
import "./service.css";

const Service = () => {
  return (
    <div className="beyond__services" id="services">
      <h4>Our Services </h4>

      <div className="beyond__gallery">
        <figure className="gallery__item gallery__item--1">
          {/* <img src={slide1} alt="" /> */}
          <ImageComponent
            src={slide1}
            alt={"Slide 1"}
            hash="LhF}=z?GMxoL~V%LNGj]InaybwbI"
          />
        </figure>
        <figure className="gallery__item gallery__item--2">
          <ImageComponent
            src={slide2}
            alt={"Slide 2"}
            hash="LyK_OS%2xto0K-RjV[kCOZRjWoWD"
          />
          {/* <img src={slide2} alt="" /> */}
        </figure>
        <figure className="gallery__item gallery__item--3">
          {/* <img src={slide3} alt="" /> */}
          <ImageComponent
            src={slide3}
            alt={"Slide 3"}
            hash="LQHej^xvn%Rj~pa#M|xaV{WAt7WB"
          />
        </figure>
        <figure className="gallery__item gallery__item--4">
          {/* <img src={slide4} alt="" /> */}
          <ImageComponent
            src={slide4}
            alt={"Slide 4"}
            hash="LUJ[6V~pjd-;NF9GIAM{o#ozRjR*"
          />
        </figure>
        <figure className="gallery__item gallery__item--5">
          {/* <img src={slide5} alt="" /> */}
          <ImageComponent
            src={slide5}
            alt={"Slide 5"}
            hash="LKGlL#obM{x[~qM_IUt6oLxbWYWB"
          />
        </figure>
        <figure className="gallery__item gallery__item--6">
          {/* <img src={slide6} alt="" /> */}
          <ImageComponent
            src={slide6}
            alt={"Slide 6"}
            hash="LsJkfp-;NaV?~qj[oLogozM{n%bI"
          />
        </figure>
        <figure className="gallery__item gallery__item--7">
          {/* <img src={slide7} alt="" /> */}
          <ImageComponent
            src={slide7}
            alt={"Slide 7"}
            hash="LFN-G-00E1xu_N-;WAxts;-;%MRj"
          />
        </figure>
      </div>
    </div>
  );
};

export default Service;
