const carousel = document.querySelector(".carouselBox");
const searchPriceButton = document.getElementById("searchPriceButton")
let scrollPerClick;
const IMAGE_PADDING = 50;
var scrollLength = 0
var maxPrice;
var minPrice = 0;
var searchString;

searchPriceButton.addEventListener('click', (e) => {
    try {
        minPrice = document.getElementById("minPrice").value;
        maxPrice = document.getElementById("maxPrice").value;
        const productsFilteredByPrice =  filterByPrice(productDataWomens,maxPrice);
        const productsFilteredByKeyWords = filterByKeyWord(productsFilteredByPrice,searchString)

       displayProducts(productsFilteredByKeyWords);
    } 
    catch (error) {
       console.error("Error")    
    }
});

searchBar.addEventListener('keyup', (e) => {
    try{
    searchString = e.target.value.toLowerCase();
    const productsFilteredByKeyWords = filterByKeyWord(productDataWomens,searchString)
    const productsFilteredByPrice = filterByPrice(productsFilteredByKeyWords,maxPrice)

    displayProducts(productsFilteredByPrice);
    } catch(error){
        console.error("Error")
    }   

});

const displayProducts = (products) => {
    try {
        carousel.innerHTML = '';
        products
            .map((product,index) => {
                const div = document.createElement("div");
                const img = document.createElement("img");
                const p = document.createElement("p");
                div.classList.add("cardWrap");
                img.src = product.imageSrc;
                p.classList.add("productDescription");
                p.innerHTML = product.productTitle;
                p.addEventListener('click', (e)=>{
                    togglePopup(product);
                });
                div.appendChild(img);
                div.appendChild(p);
                carousel.appendChild(div);
            })
            scrollPerClick = 400;
    }catch(error){
        console.error("Error")
    }
   
};

displayProducts(productDataWomens)