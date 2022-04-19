const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector("#ingredients");


const createIngredientElement = (name) => {

  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = name;
  ingredientEl.classList.add("item");

return ingredientEl;
};

const ingredientElements = ingredients.map(createIngredientElement);

ingredientsList.append(...ingredientElements);

