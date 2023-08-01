// import logo from './logo.svg';
import './Blog.css';
import React from "react";
import Navbar from './Navbar';
import Content from './Content';

function MyApp()
{
return(
  <div className='container'>
  <Navbar/>
  <hr></hr>
<Content/>
  </div>
)
}

export default MyApp;
