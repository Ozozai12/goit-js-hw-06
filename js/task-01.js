const categoriesAmmount = document.querySelectorAll('.item');

console.log('Number of categories:', categoriesAmmount.length)

const categoriesAbout = document.querySelectorAll('.item h2') 

categoriesAbout.forEach(element => {
    console.log('Category: ', element.textContent);
    console.log('Elements: ', element.nextElementSibling.children.length);
})
    


















