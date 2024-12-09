import React, { useEffect, useState } from "react";
import RecipeList from "../components/RecipeList";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Home = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        var list = localStorage.getItem("recipes");
        console.log(list);
        setRecipes(JSON.parse(list));
    }, [])
    
    const handleDelete = (id) => {
        var newList = recipes.filter((recipe) => recipe.id !== id);
        localStorage.setItem("recipes",JSON.stringify(newList));
        setRecipes(newList);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Recipe Management</h1>
                <Link to="/add-recipe">
                    <Button variant="contained" color="primary">Add Recipe</Button>
                </Link>
            </div>
            <RecipeList recipes={recipes} onDelete={handleDelete} />
        </div>
    );
};

export default Home;
