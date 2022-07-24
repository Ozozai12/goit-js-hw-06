const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const ingredientsList = ingredients.map(element => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.classList = 'item';
  ingredientsItem.textContent = element;
  
  return ingredientsItem;
});

listEl.append(...ingredientsList);
