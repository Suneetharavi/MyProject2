import React from 'react'
import styled from 'styled-components';
import SearchBar from './SearchBar';
import RecipeCard from './RecipeCard';
import { useEffect, useState } from 'react';

//Used Styled Components to style the Header
const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

function FoodSearchPage() {

  //To check whether the URL is fetching the data or not..
  const [isLoading,setIsloading]=useState(false);

  //To fetch the data according to the given serch term
  const [query,setQuery] = useState('');
 
  //To get the recipes data
  const[recipes,setRecipes]=useState([]);

  var apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

  const searchRecipes = async()=>{
    setIsloading(true);
    const url= apiUrl + query;
    const response=await fetch(url);
    //Get the Json data
    const data = await response.json();

    console.log(data);
    setRecipes(data.meals);
    setIsloading(false);

  };

  useEffect(() => {
      searchRecipes();
  },[]);

  const handleSubmit = event => {
    event.preventDefault();
    searchRecipes();
  }


  return (
    <div className="container">

    <Header>
        <div className='AppName'> 
            <img src="Food Recipe Finder.png " className='AppIcon' alt='logo'/>
            Food Recipe Finder
        </div>
        <div className='SearchBox'>
            
          
            <div className='SearchInput'>
               {/* <input  className='SearchInputText' placeholder="Search Recipe"
                   value={query}
                  // onChange={onTextChange}
                /> */}
                <SearchBar 
                       isLoading={isLoading}
                       query={query}
                       setQuery={setQuery}
                       handleSubmit={handleSubmit}
                />
            </div>
            {/* <div className='SearchIcon'> 
             <img src="SearchIcon.png" alt='searchimage' width='32' height='30'></img>
            </div> */}
        
           </div> 
    </Header>

        {/* To Dispaly the fetched data */}

        <div className='recipes'>

            {recipes ? recipes.map(recipe => (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
              />
            )) : "Sorry! No Recipes Found!"}

        </div>
    </div>
  );
}

export default FoodSearchPage