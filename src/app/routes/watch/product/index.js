import React from "react";
import Slider from "react-slick";
import ProductItem from "./ProductItem";
import FormatQuote from "@material-ui/icons/FormatQuote";

import { ButtonGroup } from "reactstrap";
import Button from "@material-ui/core/Button";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const ProductCarousel = ({ products }) => {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const options = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    marginRight: 10,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="padded-title text-left">
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton
          value="left"
          aria-label="left aligned"
          className=" bg-primary "
        >
          New Movies
        </ToggleButton>
        <ToggleButton
          value="center"
          aria-label="centered"
          className=" bg-primary "
        >
          Top Rated
        </ToggleButton>
        <ToggleButton
          value="right"
          aria-label="right aligned"
          className=" bg-primary "
        >
          Most Viewed
        </ToggleButton>
      </ToggleButtonGroup>

      <Slider className="slick-app-frame" {...options}>
        <div class="slick-slide-item">
          <ProductItem product={products[0]} />
        </div>
        <div class="slick-slide-item">
          <ProductItem product={products[1]} />
        </div>
        <div class="slick-slide-item">
          <ProductItem product={products[2]} />
        </div>
        <div class="slick-slide-item">
          <ProductItem product={products[3]} />
        </div>
        <div class="slick-slide-item">
          <ProductItem product={products[4]} />
        </div>
        <div class="slick-slide-item">
          <ProductItem product={products[5]} />
        </div>
      </Slider>
    </div>
  );
};

export default ProductCarousel;
