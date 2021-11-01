import React,{useState, useEffect} from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import Product from './Component/Product';
import About from './Component/About';
import Contact from './Component/Contact';
import PropagateLoader from 'react-spinners/PropagateLoader';

function App() {

  const[loading,setLoading]= useState(false);
  

  useEffect(() =>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 5000);
  },[])
  return (
    <div className="App">
     {
       loading ? <PropagateLoader color={"#3d2514"} Loading={loading}  size={40}/>
       :
       <>
       <Navbar/>
       <Header/>
       <Product/>
       <About/>
       <Contact/>
       </>
     }
    </div>
  );
}
export default App;
