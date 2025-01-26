import { createStore } from "redux";

const SET_RECIPES = "SET_RECIPES";
const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const setRecipes = (recipes) => ({ type: SET_RECIPES, recipes });
export const toggleFavorite = (recipe) => ({ type: TOGGLE_FAVORITE, recipe });

const initialState = {
  recipes: [],
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RECIPES:
      return { ...state, recipes: action.recipes };
    case TOGGLE_FAVORITE:
      const exists = state.favorites.find(
        (fav) => fav.uri === action.recipe.uri
      );
      return {
        ...state,
        favorites: exists
          ? state.favorites.filter((fav) => fav.uri !== action.recipe.uri)
          : [...state.favorites, action.recipe],
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
