import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/products.JSON")
      .then((res) => res.json())
      .then((data) => {
        const matchedProduct = data.find((item) => item.id.toString() === id);
        setProduct(matchedProduct);
      });
  }, [id]);

  if (!product) {
    return <div className="text-center mt-10">Product Details Is Lording</div>;
  }

  const { name, brand, vendor, price, description, offer } = product;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <p>
        <strong>Brand:</strong> {brand}
      </p>
      <p>
        <strong>Vendor:</strong> {vendor}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Offer:</strong> {offer}
      </p>
      <p className="text-green-600 font-bold mt-2">Price: ${price}</p>
    </div>
  );
};

export default ProductDetails;
