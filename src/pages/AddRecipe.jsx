import React from "react";
import RecipeForm from "../components/RecipeForm";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
    const navigate = useNavigate();

    const handleAddRecipe = (newRecipe) => {
        const id = Date.now(); // Generate unique ID
        newRecipe.id = id;
        const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
        localStorage.setItem("recipes", JSON.stringify([...recipes, newRecipe]));
        navigate("/");
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Add Recipe</h1>
            <RecipeForm onSubmit={handleAddRecipe} />
        </div>
    );
};

export default AddRecipe;
