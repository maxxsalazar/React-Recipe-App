import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { RecipeContext } from './RecipeContext';

const FullRecipe = () => {
    const { recipesValue, recipeNameValue } = useContext(RecipeContext);
    const [recipes, setRecipes] = recipesValue;
    const [recipeName, setRecipeName]= recipeNameValue 
    
    const filterRecipe = recipes.filter((recipe) => recipe.recipe.label === recipeName);
    const individualRecipe = filterRecipe[0].recipe;

    console.log(individualRecipe);

    return (
        <div className="FullRecipePage">
                <Link to="/">Home</Link>
            <Container>
                <Card className="p-5">
                    <Card.Body>
                        <Card.Title>{individualRecipe.label}</Card.Title>
                    </Card.Body>
                    <Card.Text>
                        <Container>
                            <Row>
                                <Col>
                                <h4>Ingredients</h4>
                        <ul>
                            {
                                individualRecipe.ingredientLines.map( ingredient => {
                                    return(
                                        
                                        <li>{ingredient}</li>
                                    );
                                })
                            }
                        </ul>
                                </Col>
                                <Col>
                                <h4>Instructions</h4>
                                <ul>
                            {
                                individualRecipe.ingredientLines.map( ingredient => {
                                    return(
                                        
                                        <li>{ingredient}</li>
                                    );
                                })
                            }
                        </ul>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Text>
                    <Card.Img src={individualRecipe.image} width="500px"></Card.Img>

                </Card>
            </Container>
                
        </div>
    )
}

export default FullRecipe;
