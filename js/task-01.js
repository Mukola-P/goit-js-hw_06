const NumberOfCategories = document.querySelectorAll(".item");
console.log(`Number Of Categories: ${NumberOfCategories.length}`);

const CategoryAndElements = document.querySelectorAll(".item");
NumberOfCategories.forEach((title) => {
  console.log(`Category: ${title.firstElementChild.textContent}
Elements: ${title.lastElementChild.childElementCount}`);
});





