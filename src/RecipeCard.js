import React from 'react';
import {Card, Button} from 'react-bootstrap';

function RecipeCard({ title, calories, image, ingredients }) {
    return (
        <Card className="recipe-card h-100 shadow-sm bg-white rounded">
            <Card.Img variant="top" src={image} />
            <Card.Body className="d-flex flex-column">
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">{title}</Card.Title>
                </div>
                <Card.Text className="secondary-text">{parseInt(calories + 1)} Calories</Card.Text>
                <Button className="mt-auto font-weight-bold" variant="success">View Recipe</Button>
            </Card.Body>
        </Card>
    )
}

export default RecipeCard;