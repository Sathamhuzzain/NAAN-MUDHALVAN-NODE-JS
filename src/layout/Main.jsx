import React, { useContext } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";
import Footer from "../components/Footer";
// import LoadingSpinner from  "../components/LoadingSpinner";


// import { AuthContext } from '../path/to/AuthProvider'

const Main = () => {
  // const {loading} = useContext(AuthContext);
  return (
    <div className="bg-prigmayBG">
     
        <Navbar />
            <Outlet />
            <Footer/>
      </div>
      
       
    
  );
};

export default Main;
