import React, { useState, useEffect } from "react";

const RecipeDetails = ({ recipe, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (recipe) {
      setIsOpen(true); 
    } else {
      setIsOpen(false); 
    }
  }, [recipe]);
  if (!recipe) return null;
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); 
    }
  };
  return (
    <div className="fixed inset-0 z-50">
      <div
        className={`absolute inset-0 bg-black opacity-50 ${isOpen ? 'block' : 'hidden'}`}
        onClick={handleOverlayClick}
      ></div>

      <div
        className={`absolute right-0 top-0 w-96 bg-white p-6 h-full overflow-y-auto shadow-lg transform transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 bg-gray-200 rounded-full"
        >
          <span className="text-xl font-bold">&times;</span>
        </button>

        <h2 className="text-2xl font-bold mb-2">{recipe.label}</h2>
        <img
          src={recipe.image}
          alt={recipe.label}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <p className="text-sm text-gray-600 mb-2">Source: {recipe.source}</p>
        <p className="text-lg text-gray-800 mb-4">
          {recipe.description || "No description available."}
        </p>

        <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-5 space-y-1">
          {recipe.ingredients?.map((ingredient, index) => {
            const { text, quantity, measure, food } = ingredient;
            const ingredientText = `${quantity ? quantity + " " : ""}${
              measure ? measure + " " : ""
            }${food || text}`;

            return (
              <li key={index} className="text-gray-700">{ingredientText}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetails;
