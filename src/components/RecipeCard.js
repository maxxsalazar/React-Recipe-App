import React, {useContext} from 'react';
import { RecipeContext } from '../RecipeContext';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function RecipeCard({ title, calories, image }) {
    const urlString = title.replace(/\s+/g, '-').toLowerCase();
    const {recipeNameValue} = useContext(RecipeContext);
    const [recipeName, setRecipeName] = recipeNameValue

    const setupRecipeName = () => {
        setRecipeName(title);
    }

    return (
        <Card className="recipe-card h-100 shadow-sm bg-white rounded">
            <Card.Img variant="top" src={image} />
            <Card.Body className="d-flex flex-column">
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">{title}</Card.Title>
                </div>
                <Card.Text className="secondary-text">{parseInt(calories + 1)} Calories</Card.Text>
                <Button className="mt-auto font-weight-bold" variant="success"><Link to={`/FullRecipe/${urlString}`} className="white-text recipe-card-btn" onClick={setupRecipeName}>View Recipe</Link></Button>
                
            </Card.Body>
        </Card>
    )
}

export default RecipeCard;