import React from 'react'

const RecipeCard = ({ recipe }) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe;

  return (
    <div>Food recipes

        <img
            src={strMealThumb}
            alt={strMeal}
            className="card-image"
        />


    </div>
  )
};

export default RecipeCard