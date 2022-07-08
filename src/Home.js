import React, { useEffect, useContext } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import RecipeCard from './components/RecipeCard';
import { RecipeContext } from './RecipeContext';

const Home = () => {

//////////////////////////////
// Set states as necessary
//////////////////////////////

const {searchValue, recipesValue, urlQueryValue} = useContext(RecipeContext);
const [search, setSearch] = searchValue;
const [urlQuery, setUrlQuery] = urlQueryValue;
const [recipes, setRecipes] = recipesValue;

////////////////////////
// Functions
////////////////////////

useEffect(()=>{
    const getRecipes = async () => { 

      const APP_ID = "d7c92b62";
      const APP_KEY = "b07f230c72f5d95cbc24818a5215a7b9";

        fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${urlQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`)
          .then(response => response.json())
          .then(data => {
            setRecipes(data.hits);
          });
    console.log("Data was fetched");
      }
    getRecipes();
  },[urlQuery]);

  const updateSearch = (event) =>{
    setSearch(event.target.value);
  }

  const getSearch = e =>{
    e.preventDefault();
    setUrlQuery(search);
    setSearch("");
  }

////////////////////////
// Return component
////////////////////////
    return (
        <div className="homepage">
            <Container className="mb-5">
      <h1>Recipe Search Engine</h1>
      <div className="search-bar">
        <form onSubmit={getSearch}>
          <input type="text" className="userInputSearch m-auto" placeholder="What are you craving?" value={search} onChange={updateSearch}></input>
          <Button variant="primary" type="submit" className="mx-5">Submit</Button>
        </form>
      </div>
      </Container>
      <Container className="recipeContainer">
        <Row>        
          {recipes.map(individualRecipe => {
            return (
              <Col xl={3} lg={4} sm={6} className="mb-5" key={individualRecipe.recipe.foodId}>
                <RecipeCard title={individualRecipe.recipe.label} calories={individualRecipe.recipe.calories} image={individualRecipe.recipe.image} ingredients={individualRecipe.recipe.ingredientLines} />
              </Col>
            )
          })}
        </Row>
      </Container>
        </div>
    )
}

export default Home
