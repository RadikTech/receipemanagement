import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";

const RecipeCard = ({ recipe, onDelete }) => (
    <Card className="mb-4 p-3">
        <Typography variant="h5" className="mb-2">{recipe.title}</Typography>
        <Typography variant="body1">Cuisine: {recipe.cuisine}</Typography>
        <Typography variant="body2" className="mb-4">
            Ingredients: {recipe.ingredients.slice(0, 3).join(", ")}...
        </Typography>

        <div className="flex gap-2 my-2">
            <Link to={`/recipe-detail/${recipe.id}`}>
                <Button variant="contained" color="primary">View Details</Button>
            </Link>
            <Link to={`/edit-recipe/${recipe.id}`}>
                <Button variant="contained" color="secondary">Edit</Button>
            </Link>
            <Button variant="contained" color="error" onClick={() => onDelete(recipe.id)}>
                Delete
            </Button>
        </div>
    </Card>
);

export default RecipeCard;
