import React,{useState,useEffect} from 'react'
import Navbar from './components/Navbar';
import axios from 'axios';
import Product from './components/Product';
import Cart from './components/Cart';

const App = () => {

  const [toggle,setToggle] = useState(false);
  const [productData, setProductData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const fetchData = async() => {
     const res = await axios.get("https://fakestoreapi.com/products");
     const data = res.data;
     setProductData(data);
  }
  
  useEffect(() => {
     fetchData();
  },[])
  return (
    <div className="bg-gray-600 p-10 ">
       <Navbar setToggle={setToggle} toggle={toggle}/>

       {!toggle 
        ?
          <div className='m-10 '>
          <Product productData={productData} cartItems={cartItems} setCartItems={setCartItems} />
       </div>
        :
         <div>
         <Cart cartItems={cartItems} setCartItems={setCartItems}/>
         </div>
       }
      

       
     
    </div>
  )
}

export default App;
