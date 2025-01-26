import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/store";
import { Card, CardContent } from "./ui/card";
import { Heart } from "lucide-react";

const RecipeCard = ({ recipe, onViewDetails, isLoading }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.some((fav) => fav.uri === recipe?.uri);

  if (isLoading) {
    return (
      <Card className="animate-pulse border-0 transition-shadow relative">
        <div className="bg-gray-300 w-full h-48 rounded-t-lg" />
        <CardContent>
          <div className="bg-gray-300 h-6 w-3/4 mb-2 rounded" />
          <div className="bg-gray-300 h-4 w-1/2 rounded" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hover:shadow-xl border-0 transition-shadow relative">
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.label}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <button
          onClick={() => dispatch(toggleFavorite(recipe))}
          className={`absolute top-2 right-2 p-2 rounded-full ${
            isFavorite ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800"
          } shadow hover:opacity-80`}
          aria-label={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
        </button>
      </div>
      <CardContent>
        <h2
          className="text-lg font-bold mt-2 cursor-pointer"
          onClick={() => onViewDetails(recipe)}
        >
          {recipe.label}
        </h2>
        <p className="text-sm text-gray-600">{recipe.source}</p>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
