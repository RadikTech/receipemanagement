import React, { useEffect, useState } from "react";
import RecipeForm from "../components/RecipeForm";
import { useNavigate, useParams } from "react-router-dom";

const EditRecipe = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
        const foundRecipe = recipes.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
    }, [id]);

    const handleUpdateRecipe = (updatedRecipe) => {
        const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
        const updatedRecipes = recipes.map((r) =>
            r.id === parseInt(id) ? { ...r, ...updatedRecipe } : r
        );
        localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
        navigate("/");
    };

    return recipe ? (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Recipe</h1>
            <RecipeForm initialData={recipe} onSubmit={handleUpdateRecipe} />
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default EditRecipe;
