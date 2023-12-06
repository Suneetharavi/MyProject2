import React from 'react'
import Footer from './Footer/Footer';
import {Link} from 'react-router-dom';
import Layout from './Layout/Layout';
import Header from './Layout/Header';

function Welcomepage() {
  return (
    <div>
        <Header/>
        {/* <img src='Food Recipe Finder.png'></img> */}

        <Layout><h3> Welcome to the Recipe Hunt</h3></Layout>

        <Link to='/FoodSearchPage'> Lets Find the Recipe </Link>
        <Link to='/About'> About Us</Link>
        <Link to='/Contact'>Contact</Link>
        <Footer/> 

    </div>
  )
}

export default Welcomepage