import React, { useEffect, useState } from "react";
import RecipeDetail from "../components/RecipeDetail";
import { useNavigate, useParams } from "react-router-dom";

const RecipeDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
        const foundRecipe = recipes.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
    }, [id]);

    const handleBack = () => {
        navigate("/");
    };

    return (
        <div className="container mx-auto p-4">
            {recipe ? (
                <RecipeDetail recipe={recipe} onBack={handleBack} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default RecipeDetailPage;
