
const filterByPrice = (filteredProducts,maxPrice ) => {
    try{
        if (maxPrice){
            if (maxPrice === "") { maxPrice = Number.MAX_SAFE_INTEGER}
            return  filteredProducts.filter((product) => {
                return (
                    ((Number(product.price) < maxPrice) && (Number(product.price) > minPrice))
                )});
        }else{
            return filteredProducts
        }
    } catch(error) {
        console.error("Error")
    }
}

const filterByKeyWord = (filteredProducts,searchString) =>{
    try {
        if (!searchString){
            return filteredProducts
        }
        return  filteredProducts.filter((product) => {
            return (
                product.productTitle.toLowerCase().includes(searchString) ||
                product.productUrl.includes(searchString.split(' ').join('-'))
            );
        });
    } catch (error) {
        console.error("Error")
    }
}

const filterByCategory = (category) =>{
    try {
        const productsFilteredByPrice =  filterByPrice(productDataWomens,maxPrice);
        const productsFilteredByKeyWords = filterByKeyWord(productsFilteredByPrice,searchString)
        const filteredByCategory = filterByKeyWord(productsFilteredByKeyWords,category)

        displayProducts(filteredByCategory);
    } catch (error) {
        console.error("Error")
    }
}