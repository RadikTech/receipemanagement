import React, { useEffect, useState } from "react";
import { Button, TextField, MenuItem } from "@mui/material";

const RecipeForm = ({ onSubmit, initialData = {} }) => {
    useEffect(() => {
        console.log(initialData);
    }, [])

    const [title, setTitle] = useState(initialData.title || "");
    const [ingredients, setIngredients] = useState(
        initialData.ingredients ? initialData.ingredients.join(", ") : ""
    ); const [instructions, setInstructions] = useState(initialData.instructions || "");
    const [cuisine, setCuisine] = useState(initialData.cuisine || "");
    const [cookingTime, setCookingTime] = useState(initialData.cookingTime || "");

    const formattedIngredients = ingredients
        .split(",")
        .map((ingredient) => ingredient.trim());

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            title,
            ingredients: formattedIngredients,
            instructions,
            cuisine,
            cookingTime,
        });
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <TextField
                fullWidth
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <TextField
                fullWidth
                label="Ingredients (comma-separated)"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                required
            />
            <TextField
                fullWidth
                label="Instructions"
                multiline
                rows={4}
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                required
            />
            <TextField
                select
                fullWidth
                label="Cuisine"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                required
            >
                <MenuItem value="Italian">Italian</MenuItem>
                <MenuItem value="Indian">Indian</MenuItem>
                <MenuItem value="Mexican">Mexican</MenuItem>
            </TextField>
            <TextField
                fullWidth
                label="Cooking Time (in minutes)"
                type="number"
                value={cookingTime}
                onChange={(e) => setCookingTime(e.target.value)}
                required
            />
            <Button variant="contained" color="primary" type="submit">
                Save
            </Button>
        </form>
    );
};

export default RecipeForm;
