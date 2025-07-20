import React, { Fragment } from 'react'
import ProductCard from './ProductCard'
import { products } from '../enum/enum'

const ProductList = () => {
  return (
    <Fragment>
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (<ProductCard key={product.id} product={product}/>))}
      </div>
    </Fragment>
  )
}

export default ProductList


