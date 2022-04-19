const categoriesEl = document.querySelector("#categories");


const categories = categoriesEl.querySelectorAll("li.item");
console.log("Number of categories:", categories.length);

for (let i=0; i < categories.length; i+=1) {

    const category = categories[i].firstElementChild;
   const elements = category.nextElementSibling.children;

    console.log("Category:", category.textContent);
    console.log("Elements:", elements.length);
   
}
