import React from 'react'
import {Link} from 'react-router-dom';

function Welcomepage() {
  return (
    <div>
        <h3>Hello welcome to the Food Search recepie</h3>

        <Link to='/FoodSearchPage'> Lets Find the Recipe </Link>
        
    </div>
  )
}

export default Welcomepage