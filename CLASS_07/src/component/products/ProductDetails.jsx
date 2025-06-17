import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products, id)

  return (
    <Fragment>
      <h1>Product Details Page</h1>
    </Fragment>
  );
};

export default ProductDetails;
