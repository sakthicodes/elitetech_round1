export const fetchRecipes = async (query, filters) => {
  const { mealType, dietType, cuisineType,ingredientLines } = filters;
  const filterParams = [
    mealType && `mealType=${mealType}`,
    dietType && `healthLabels=${dietType}`,
    cuisineType && `cuisineType=${cuisineType}`,
    ingredientLines && `ingredientLines=${ingredientLines}`,
  ]
    .filter(Boolean) 
    .join("&");

  const url = `https://api.edamam.com/search?q=${query}&app_id=a5de3521&app_key=28f8a20bd893e2740e68d4bbb349b977&from=0&to=10${
    filterParams ? `&${filterParams}` : ""
  }`;
  const res = await fetch(url);
  const data = await res.json();
  return data.hits.map((hit) => hit.recipe);
};
