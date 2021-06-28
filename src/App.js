import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import './App.css';
import RecipeCard from './RecipeCard';

function App() {
  const APP_ID = "d7c92b62";
  const APP_KEY = "b07f230c72f5d95cbc24818a5215a7b9";

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const updateSearch = (event) =>{
    setSearch(event.target.value);
  }
  useEffect(()=>{
    console.log("Effect used");
  },[recipe]);

  const fetchRecipe = async () => {
    const query = document.querySelector('.userInputSearch');

    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query.value}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(response => response.json())
      .then(data => {
        setRecipe(data.hits);
      })
      .then(data => {
        query.value = "";
      });
  }


  return (
    <div className="App">
      <Container className="mb-5">
      <h1>Recipe Search Engine</h1>
      <div className="search-bar">
        <input type="text" className="userInputSearch m-auto" placeholder="What are you craving?"></input>
        <Button variant="primary" className="mx-5" onClick={fetchRecipe}>Submit</Button>
      </div>
      </Container>
      <Container className="recipeContainer">
        <Row>        
          {recipe.map(individualRecipe => {
            return (
              <Col xl={3} lg={4} md={6} className="mb-5" key={individualRecipe.recipe.foodId}>
                <RecipeCard title={individualRecipe.recipe.label} calories={individualRecipe.recipe.calories} image={individualRecipe.recipe.image} ingredients={individualRecipe.recipe.ingredientLines} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
