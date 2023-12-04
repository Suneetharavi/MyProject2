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
    <div className='card'>

        <img
            src={strMealThumb}
            alt={strMeal}
            className="card-image"
        />
        <div className='card-body'>
            <h3>{strMeal}</h3>
            <span className="category">{strCategory}</span>
            <h4>It's the {strArea} Dish</h4>
            {/* <h5>This is served as a {strCategory}</h5> */}

            {/* <div className='strArea'>This Recipe is from {strArea}.</div>
            <div className="category">Dish Type: {strCategory}</div>   */}
            <a href={"https://www.themealdb.com/meal/" + idMeal}>Ingrediants</a>
        </div>
    </div>
  )
};

export default RecipeCard