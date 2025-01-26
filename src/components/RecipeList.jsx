import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecipes } from "../store/store";
import RecipeCard from "./RecipeCard";
import RecipeDetails from "./RecipeDetails";
import { fetchRecipes } from "../utils/api";

const RecipeList = () => {
  const [query, setQuery] = useState("pizza");
  const [mealType, setMealType] = useState("");
  const [cuisineType, setCuisineType] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    const fetchAndSetRecipes = async () => {
      const filters = { mealType, cuisineType };
      const recipesData = await fetchRecipes(query, filters);
      dispatch(setRecipes(recipesData));
    };
    fetchAndSetRecipes();
  }, [query, mealType,  cuisineType, dispatch]);

  return (
    <div className="p-18">
      <div className="flex flex-col md:flex-row items-center gap-2 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes..."
          className="flex-1 p-2 border rounded-lg"
        />
        <select
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="">All Meal Types</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
        <select
          value={cuisineType}
          onChange={(e) => setCuisineType(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="">All Cuisines</option>
          <option value="Italian">Italian</option>
          <option value="Chinese">Chinese</option>
          <option value="Mexican">Mexican</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.uri}
            recipe={recipe}
            onViewDetails={setSelectedRecipe}
          />
        ))}
      </div>

      <RecipeDetails
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />
    </div>
  );
};

export default RecipeList;
