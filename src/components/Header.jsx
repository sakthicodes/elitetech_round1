import React from "react";
import { Button } from "./ui/button";
import { BookOpen, Heart,ChefHat } from "lucide-react";

const Header = ({ setView }) => (
  <header className="flex justify-between items-center p-4 bg-gradient-to-r from-red-700 to-orange-500 text-white shadow-lg">
    <h1 className="text-3xl font-bold tracking-wide flex items-center">
      <ChefHat className="mr-2 text-yellow-400" />Taste
    </h1>
    <div className="flex space-x-4">
      <Button
        onClick={() => setView("recipes")}
        className="flex items-center gap-2 bg-amber-500 hover:bg-red-300 px-4 py-2 rounded-full shadow-md"
      >
        <BookOpen className="w-5 h-5" />
        <span className="hidden md:block"></span>
      </Button>
      <Button
        onClick={() => setView("favorites")}
        className="flex items-center gap-2 bg-amber-200 hover:bg-amber-300 px-4 py-2 rounded-full shadow-md"
      >
        <Heart className="w-5 h-5 text-pink-900" />
        <span className="hidden md:block"></span>
      </Button>
    </div>
  </header>
);

export default Header;
