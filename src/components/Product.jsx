import React,{useState, useContext} from 'react';
import MyStore from '../context/MyContext';

const Product = ({productData}) => {
  const {cartItems,setCartItems} = useContext(MyStore);
  const [moreData,setMoreData] = useState(null);

  const handleMore = (id) =>{
    setMoreData(id);
  }

  const handleLess = () => {
    setMoreData(null);
  }
 
  const handleCart = (id) => {
     console.log(id);
     let arr = productData.find((val) => val.id === id);
     let ans = cartItems.find((val) => val.id === arr.id);
     let newObj;
     if(ans!==undefined){
       newObj = {...ans, quantity:ans.quantity + 1}
     }
     else{
       newObj = {...arr,quantity:1}
     }
     let newItems = [...cartItems];
     
     newItems.push(newObj);
     setCartItems(newItems);
  }

  const productQuantity = (id) => {
      let obj = cartItems.find((val) => val.id === id);
      return obj.quantity;
  }
 
  function handleIncrement(id){
     let obj = cartItems.map((val) => 
      val.id === id 
      ? {...val,quantity:val.quantity+1} 
      : val
     )

     setCartItems(obj);
     
  }

  function handleDecrement(id){
    let obj = cartItems.find(val => val.id === id);
    let arr;
    if(obj.quantity === 1){
       arr = cartItems.filter((val) => val.id !== id);
    }else{
       arr = cartItems.map((val) => val.id === id
       ? {...val,quantity:val.quantity-1}
       : val
      )
    }
     
    setCartItems(arr);

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
              {cartItems.find((val) => val.id === data.id) !== undefined 
              ?
               <div 
                className="bg-black py-2 px-5 rounded-3xl cursor-pointer hover:scale-105 flex justify-between gap-10 text-lg">
                  <button 
                  onClick={() => handleDecrement(data.id)}
                  className='cursor-pointer'
                  >-</button>
                  <p>{productQuantity(data.id)}</p>
                  <button 
                   onClick={() => handleIncrement(data.id)} 
                   className='cursor-pointer'
                  >+</button>
                </div>
              : 
              <button 
              onClick={() => handleCart(data.id)}
              className="bg-black py-2 px-5 rounded-3xl cursor-pointer hover:scale-105">Add To Cart</button>
              }
              
            </div>
         </div>
       })}
    </div>
  )
}

export default Product
 