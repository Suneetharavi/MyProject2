import React from 'react'
import {Link} from 'react-router-dom';
import Layout from './Layout/Layout';
import Suneetha from '../models/logo/Suneetha.png'

function Welcomepage() {
  return (
    <Layout>
  
    <div className="home" style={{ backgroundImage: `url(${Suneetha})` }} >
        <div className="headerContainer">
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
