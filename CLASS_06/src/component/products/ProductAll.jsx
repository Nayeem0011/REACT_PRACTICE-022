import React, { Fragment, useEffect, useState } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  // console.log(products);

  return (
    <Fragment>
      <section className="w-full md:w-[1100px] mx-auto my-10">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-blue-700">Our All Products</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 justify-center">
          {products.map((product, index) => (
            <Product product={product} key={index} />
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Products;
