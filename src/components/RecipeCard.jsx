import React from 'react'

const RecipeCard = ({ recipe }) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
        strArea,
        strSource,
        strYoutube,
    } = recipe;

  return (
    <div className='foodRecipes'>

        <img
            src={strMealThumb}
            alt={strMeal}
            className="card-image"
        />
        <div className='card-body'>
            <h3>Dish Name: {strMeal}</h3>
            <div className='strArea'>This Recipe is from {strArea}.</div>
            <div className="category">Dish Type: {strCategory}</div>  
        </div>
    </div>
  )
};

export default RecipeCard