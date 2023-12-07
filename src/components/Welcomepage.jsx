import React from 'react'
import Footer from './Footer/Footer';
import {Link} from 'react-router-dom';
import Layout from './Layout/Layout';
import Header from './Layout/Header';
import SRHLogo from '../models/logo/SRHLogo.png'

function Welcomepage() {
  return (
    <Layout>
  
    <div className="home" style={{ backgroundImage: `url(${SRHLogo})` }} >
        <div className="headerContainer">
          {/* <img src="SRHLogo.png"></img> */}
          <h1> Recipe Hunter</h1>
          <h4>The Global Cooking World </h4>
          <Link to='/FoodSearchPage'>
            <button>Click me to Start The Receipe Hunting .. </button> </Link>
        </div>
    </div>
    
    </Layout>

  )
}

export default Welcomepage



    // <div>
        {/* <Header/>
        {/* <img src='Food Recipe Finder.png'></img> */}

        {/* <Layout><h3> Welcome to the Recipe Hunt</h3></Layout>

        <Link to='/FoodSearchPage'> Lets Find the Recipe </Link> */}
        {/* <Link to='/About'> About Us</Link>
        <Link to='/Contact'>Contact</Link> */} 
       

    // </div>