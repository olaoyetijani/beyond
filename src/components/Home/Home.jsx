import "./home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import caro1 from "../../assets/caro1.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="header__bg" id="about">
      <div className="imgslides">
        <Slider {...settings} className="slides">
          <img src={caro1} alt="" />
          <img src={caro1} alt="" />
          <img src={caro1} alt="" />
        </Slider>
      </div>

      <header className="header__content">
        <p>
          We bring a unique perspective to every project. Explore our work to
          see how we blend modern aesthetics with practical solutions to create
          environments that enhance both form and function.
        </p>
      </header>

      <div className="header__about">
        <h5>About us</h5>
        <FaLongArrowAltRight />
      </div>
    </div>
  );
};

export default Home;
