import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import slide4 from "../../assets/slide4.png";
import slide5 from "../../assets/slide5.png";
import slide6 from "../../assets/slide6.png";
import slide7 from "../../assets/slide7.png";
import "./service.css";

const Service = () => {
  return (
    <div className="beyond__services" id="services">
      <h4>Our Services </h4>

      <div className="beyond__gallery">
        <figure className="gallery__item gallery__item--1">
          <img src={slide1} alt="" />
        </figure>
        <figure className="gallery__item gallery__item--2">
          <img src={slide2} alt="" />
        </figure>
        <figure className="gallery__item gallery__item--3">
          <img src={slide3} alt="" />
        </figure>
        <figure className="gallery__item gallery__item--4">
          <img src={slide4} alt="" />
        </figure>
        <figure className="gallery__item gallery__item--5">
          <img src={slide5} alt="" />
        </figure>
        <figure className="gallery__item gallery__item--6">
          <img src={slide6} alt="" />
        </figure>
        <figure className="gallery__item gallery__item--7">
          <img src={slide7} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Service;
