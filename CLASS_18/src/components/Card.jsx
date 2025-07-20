// import React from 'react'
// import { useCartStore } from '../zustand/store/store'

// const Card = () => {
//   const cart = useCartStore(state => state.cart)
//   const dispatch = useCartStore(state => state.dispatch)

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

//   console.log("cart item showing on", cart)
//   return (
//     <div className='border p-4 rounded shadow bg-white'>
//       {
//         cart.length === 0 ? (<p className='text-gray-500'>
//           your cart is empty
//         </p>) :
//         <div className='space-y-3'>
//           {
//             cart.map(item=>(
//               <div key={item.id} className='flex gap-4 items-center'>
//                 <p className='font-medium'>
//                   {item.title} X {item.quantity}
//                 </p>
//                 <p className='text-sm text-gray-600'>
//                   ${item.price.toFixed(2)}
//                 </p>
//                 <button onClick={() => dispatch({type: "REMOVE_FROM_CART", payload:item.id})}
//                   className='text-red-500 hover:underline'>
//                   Remove
//                 </button>
//                 <div className='mt-4 text-lg font-bold'>
//                   Total: ${total.toFixed}
//                 </div>
                
//               </div>
//             ))
//           }
//           <button onClick={() => dispatch({type: "CLEAR_CART"})}
//                   className='mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>
//                   Clear Cart
//                 </button>
//         </div>
//       }
//     </div>
//   )
// }

// export default Card


import { useCartStore } from '../zustand/store/store'

const Card = () => {
  const cart = useCartStore(state => state.cart)
  const dispatch = useCartStore(state => state.dispatch)

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className='border p-4 rounded-t-2xl shadow-xl bg-white lg:sticky lg:top-6 fixed bottom-0 left-0 right-0 z-50 lg:rounded-2xl lg:max-h-[90vh] lg:overflow-auto w-full lg:w-auto'>
      <h2 className="text-center text-lg font-bold text-indigo-600 mb-2">🛒 Your Cart</h2>

      {
        cart.length === 0 ? (
          <p className='text-gray-500 text-center'>Your cart is empty</p>
        ) : (
          <div className='space-y-4 max-h-[50vh] overflow-y-auto px-1'>
            {cart.map(item => (
              <div key={item.id} className='flex gap-4 bg-gray-50 p-3 rounded-xl shadow-sm'>
                
                {/* Product Image */}
                <img src={item.image} alt={item.title}
                  className='w-16 h-16 object-cover rounded-lg border' />

                {/* Product Info */}
                <div className='flex-1'>
                  <h3 className='font-semibold text-gray-800 text-sm line-clamp-1'>{item.title}</h3>
                  <p className='text-xs italic text-gray-500 mb-1'>Category: {item.category}</p>
                  <p className='text-sm text-gray-600'>Qty: {item.quantity}</p>
                  <p className='text-sm text-gray-600'>Price: ${item.price.toFixed(2)}</p>
                  
                  {/* Remove Button */}
                  <button 
                    onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
                    className='text-red-500 hover:underline text-xs mt-1'>
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Cart Total */}
            <div className='border-t pt-4 mt-4'>
              <p className='text-lg font-semibold text-indigo-700 text-right'>
                Total: ${total.toFixed(2)}
              </p>
              <button
                onClick={() => dispatch({ type: "CLEAR_CART" })}
                className='mt-4 w-full bg-red-500 text-white py-2 rounded-full hover:bg-red-600 transition'>
                Clear Cart
              </button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Card
