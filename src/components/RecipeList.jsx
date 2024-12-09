import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, onDelete }) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recipes?.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default RecipeList;
