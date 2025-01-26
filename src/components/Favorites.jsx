import React from "react";
import { useSelector } from "react-redux";
import RecipeCard from "./RecipeCard";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Favorite Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((recipe) => (
          <RecipeCard key={recipe.uri} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};


export default Favorites;
