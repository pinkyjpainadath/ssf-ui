import React from "react";
import CardBox from "components/CardBox";
import ContainerHeader from "components/ContainerHeader";
import Simple from "./simple/index";
import { products, testimonials } from "./data";
import ProductCarousel from "./product/index";
import TestimonialCarousel from "./testimonial/index";
import IntlMessages from "util/IntlMessages";

const Home = ({ match }) => (
  <div className="app-wrapper">
    <div className="animated slideInUpTiny animation-duration-3">
      <div className="row mb-md-3">
        <CardBox styleName="col-lg-12 " cardStyle="premiumStyle">
          <Simple />
        </CardBox>
      </div>

      <div className="padded-row row mb-md-3">
        <CardBox styleName="col-lg-12" cardStyle="text-center">
          <ProductCarousel products={products} />
        </CardBox>
      </div>
    </div>
  </div>
);
export default Home;
