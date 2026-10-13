import React,{useState,useEffect} from 'react'
import Navbar from './components/Navbar';
import axios from 'axios';
import Product from './components/Product';

const App = () => {

  const [toggle,setToggle] = useState(false);
  const [productData, setProductData] = useState([]);

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
       <Navbar/>
       <div className='m-10 '>
          <Product productData={productData}/>
       </div>
     
    </div>
  )
}

export default App
