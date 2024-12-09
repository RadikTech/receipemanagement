import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const RecipeDetail = ({ recipe, onBack }) => {
    return (
        <Card className="w-full max-w-lg mx-auto p-4">
            <Typography variant="h4" className="mb-4">{recipe.title}</Typography>
            <Typography variant="body1" className="mb-2">
                <strong>Cuisine Type:</strong> {recipe.cuisine}
            </Typography>
            <Typography variant="body1" className="mb-2">
                <strong>Cooking Time:</strong> {recipe.cookingTime} minutes
            </Typography>
            <Typography variant="body1" className="mb-4">
                <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
            </Typography>
            <Typography variant="body1" className="mb-4">
                <strong>Instructions:</strong>
                <p>{recipe.instructions}</p>
            </Typography>

            <Button variant="contained" color="primary" onClick={onBack} >
                Back to Recipes
            </Button>
        </Card>
    );
};

export default RecipeDetail;
