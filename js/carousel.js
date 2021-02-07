
const sliderScrollLeft = ( ) =>{
    try {
        carousel.scrollTo({
            top:0,
            left: (scrollLength -= scrollPerClick),
            behavior:"smooth"
        })
        if( scrollLength<0 ) { 
            scrollLength = 0
        }
    } catch (error) {
        console.error("Error")      
    }
}

const sliderScrollRight = ( ) =>{
    try {
        if( scrollLength <= carousel.scrollWidth - carousel.clientWidth ) { 
            carousel.scrollTo({
                top: 0,
                left: (scrollLength += scrollPerClick),
                behavior:"smooth"
            })
        }
    } catch (error) {
        console.error("Error")       
    }
}