const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];



const list = document.querySelector(`#ingredients`);

const items = ingredients.map(product => {
  const listItem = document.createElement(`li`);

  listItem.textContent = product;
  listItem.classList.add("item");
  return listItem;

});

list.append(...items);






