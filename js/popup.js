const togglePopup = (product) =>{
    try {
        document.querySelector(".popup").classList.toggle("active")
        if(product){
            document.querySelector(".popupImage").src = product.imageSrc;
            document.querySelector(".popupProductDescription").innerText = product.productTitle;
            document.querySelector(".popupProductDescription").href = product.productUrl;
            document.querySelector(".popupProductPrice").innerText = `${product.price}£`;
        }
    } catch (error) {
        console.log("Error")
    }
}
