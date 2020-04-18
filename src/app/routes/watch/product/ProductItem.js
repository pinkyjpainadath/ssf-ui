import React from "react";

const ProductItem = ({ product }) => {
  const { image } = product;

  return (
    <div className="newmovies-carousel">
      <img src={image} alt="Clients" />
    </div>
  );
};

export default ProductItem;
