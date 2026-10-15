import React,{useState,useEffect,useContext} from 'react'
import Navbar from './components/Navbar';
import axios from 'axios';
import Product from './components/Product';
import Cart from './components/Cart';
import MyStore from './context/MyContext';


const App = () => {

  const {toggle} = useContext(MyStore);
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
       <Navbar />

       {!toggle 
        ?
          <div className='m-10 '>
          <Product productData={productData} />
       </div>
        :
         <div>
         <Cart />
         </div>
       }
      

       
     
    </div>
  )
}

export default App;
