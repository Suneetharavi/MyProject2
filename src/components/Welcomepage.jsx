import React from 'react'
import Footer from './Footer/Footer';
import {Link} from 'react-router-dom';

function Welcomepage() {
  return (
    <div>
        <h3>Hello welcome to the Food Search recepie</h3>
        {/* <img src='Food Recipe Finder.png'></img> */}

        <Link to='/FoodSearchPage'> Lets Find the Recipe </Link>

        <Footer/>

    </div>
  )
}

export default Welcomepage