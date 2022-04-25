import React from "react";
import "../styles/ProductReviews.css";
import ProductReviewCard from "./ProductReviewCard";

const ProductReviews = ({ productReviews }) => {
  return (
    <div className="ProductReviews">
      {productReviews.map((item, index) => (
        <ProductReviewCard
          image={item.image}
          review={item.review}
          price={item.price}
          name={item.name}
          index={index}
          key={item.image}
        />
      ))}
    </div>
  );
};

export default ProductReviews;
