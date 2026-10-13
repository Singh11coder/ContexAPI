import React,{useState} from 'react'

const Product = ({productData,cartItems,setCartItems}) => {
  const [moreData,setMoreData] = useState(null);

  const handleMore = (id) =>{
    setMoreData(id);
  }

  const handleLess = () => {
    setMoreData(null);
  }
 
  const handleCart = (id) => {
    console.log(id);
     let newItems = [...cartItems];
     let arr = productData.find((val) => val.id === id);
     newItems.push(arr);
     console.log(newItems);
     setCartItems(newItems);
  }
 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 text-white">
       {productData.map((data) => {
        const isExpanded = moreData === data.id;
         return <div className="bg-gray-900 p-10 rounded-4xl cursor-pointer hover:scale-105 hover:shadow-2xl">
            <img src={data.image}  className="pb-6 h-60 w-50/"></img>
            <br></br>
            <h2><span className='text-2xl pr-4 '>Title:</span>{data.title}</h2>
            <br></br>
            {
              isExpanded 
              ?  <h4><span className='text-2xl pr-4 '>Description:</span>{data.description}
              <br></br><span onClick={() => handleLess()} className="text-blue-600"> show Less</span>
              </h4>
              :   <h4><span className='text-2xl pr-4 '>Description:</span>{data.description.slice(0,90)}
              <br></br><span onClick={() => handleMore(data.id)} className="text-blue-600"> more...</span>
              </h4>
            }
            
            <div className='mt-10 flex justify-between'>
              <h3 className="text-4xl"><span className="text-4xl">$.</span>{data.price}</h3>
              <button 
              onClick={() => handleCart(data.id)}
              className="bg-black py-2 px-5 rounded-3xl cursor-pointer hover:scale-105">Add To Cart</button>
            </div>
         </div>
       })}
    </div>
  )
}

export default Product
 