import React, { Fragment } from 'react'
import ProductCard from './ProductCard'
import { products } from '../enum/enum'

const ProductList = () => {
  return (
    <Fragment>
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Our Products</h1>
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (<ProductCard key={product.id} product={product}/>))}
      </div>
    </Fragment>
  )
}

export default ProductList


