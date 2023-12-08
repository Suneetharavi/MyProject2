import React from 'react'
import styled from 'styled-components';
import SearchBar from './SearchBar';
import RecipeCard from './RecipeCard';
import Header from './Layout/Header';
import { useEffect, useState, useRef } from 'react';

//Used Styled Components to style the Headers
const Headers = styled.div`
  background-color:gold;
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

  const data1=useRef('null');

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
    // event.target.value='';
  }


  return (
    <>
    <Header/>
    <div className="container">

    <Headers>
        <div className='AppName'> 
            <img src="SRHLogo.png " className='AppIcon' alt='logo'/>
            Recipe Hunter
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
    </Headers>

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
    </>
  );
}

export default FoodSearchPage