import React from 'react'

const Navbar = () => {
  return (
    <div className="rounded-4xl flex bg-blue-700 justify-between px-20 py-6 text-4xl text-white items-center">
       <div className="bg-red-800 py-4 px-8 rounded-4xl">🛒 Shop</div>
       <div className="flex gap-20">
         <h3>Home</h3>
         <h3>Product</h3>
         <h3>Contact</h3>
       </div>
       <div>
         <button className="bg-black py-4 px-8 rounded-4xl cursor-pointer hover:scale-105 ">Create</button>
       </div>
    </div>
  )
}

export default Navbar
