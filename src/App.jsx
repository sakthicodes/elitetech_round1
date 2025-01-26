import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import RecipeList from "./components/RecipeList";
import Favorites from "./components/Favorites";
import Header from "./components/Header";

const App = () => {
  const [view, setView] = useState("recipes");

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50">
        <Header setView={setView} />
        <main className="p-4">
          {view === "recipes" ? <RecipeList /> : <Favorites />}
        </main>
      </div>
    </Provider>
  );
};
export default App;