import './App.css';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import { useEffect, useState } from 'react';

function App() {

  //To check whether the URL is fetching the data or not..
  const [loading,setIsloading]=useState(false);

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


  return (
    <div className="App">
        <h1>Food Recipes</h1>
    </div>
  );
}

export default App;
