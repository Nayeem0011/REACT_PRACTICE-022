import React, { Fragment } from "react";
import Banner from "../component/static/Banner";
import Products from "../component/products/Products";

const HomePage = () => {
  return (
    <Fragment>
      <Banner/>
      <Products/>
    </Fragment>
  );
};

export default HomePage;
