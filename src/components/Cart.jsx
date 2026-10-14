import React from 'react'

const Cart = ({cartItems,setCartItems}) => {
  console.log("From Carts",cartItems);  
  let total = cartItems.reduce((acc,curr) => {
      acc+=(curr.price) * (curr.quantity);

      return acc;
  },0);

  let qunatity = cartItems.reduce((acc,curr) => {
       acc += curr.quantity;

       return acc;
  },0);
  return (
    <div>
      <div><h1 className="text-3xl text-white ml-14 mt-10">Shopping Cart ({cartItems.length})</h1></div>
      <div className="">
        {cartItems.map((item) => {
           return <div className=" flex justify-between w-250  bg-gray-800 m-10 p-10 rounded-4xl text-white text-xl">
                <div className="w-80 h-50 mr-20 p-2"> 
                  <img src={item.image}/>
                </div>
                <div>
                  <h1><span className="text-red-500">Title: </span>{item.title}</h1>
                  <h1><span className="text-red-500">Description: </span>{item.description}</h1>
                  <div className="flex justify-between mt-10">
                    <h1 className="text-2xl">⭐4.1(259)</h1>
                    <div className="flex items-center gap-20">
                        <h1 className="bg-white px-4 py-2 rounded-xl text-green-700 font-bold">quantity:{item.quantity}</h1>
                        <h1 className="text-green-500 text-2xl">${item.price}</h1>
                    </div>
                  
                  </div>
                </div>  
                
            </div>
        })}
        <div className="bg-gray-800 p-8 rounded-4xl text-white w-90"> 
          <h1 className="text-2xl">Order Summary</h1>
           <div className="flex justify-between mt-8 mb-4">
             <h3>Items</h3>
             <h3 className="text-xl text-green-500">{cartItems.length}</h3>
           </div>
            <div className="flex justify-between mb-4">
            <h3>Qunatity</h3>
            <h3 className="text-xl text-green-500">{qunatity}</h3>
           </div>
           <div className="flex justify-between mb-4">
            <h3>Total</h3>
            <h3 className="text-xl text-green-500">${total}</h3>
           </div>
           <div className="flex justify-center items-center bg-black h-12 rounded-xl">
               <button>Checkout</button>
           </div>
          
        </div>
      </div>
    </div>
  )
}

export default Cart
