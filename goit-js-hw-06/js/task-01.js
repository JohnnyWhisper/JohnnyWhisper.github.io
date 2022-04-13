const categoriesEl = document.querySelector("#categories");



const categories = categoriesEl.querySelectorAll("li.item");
console.log("Number of categories:", categories.length);

for (let i=0; i < categories.length; i+=1) {
   const category = categories[i].querySelector("h2");

   const elements = category.nextElementSibling.querySelectorAll("li");
  
    console.log("Category:", category.textContent);
    console.log("Elements:", elements.length);
   
}
