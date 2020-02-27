let carouselIndex = 0

// Update carouselIndex on button click
const rotateCarousel = (n) => displayImages(carouselIndex += n)

const toggleButton = (id, value) => {
    document.getElementById(id).disabled = value
} 

const displayImages = (index) => {
    let images = document.getElementsByClassName("carousel_figure")
    
    /*Disable/enable buttons */
    if (index == 0) {
        toggleButton("prev", true)
    }
    if (index == images.length-6) {
        toggleButton("next", true)
    }
    if (index > 0) {
        toggleButton("prev", false)
    }
    if (index < images.length-6) {
        toggleButton("next", false)
    }
    
    if (index > -1 && index < images.length-5) {
        // Hide all images
        for (let i=0; i<images.length;i++){
            images[i].style.display = "none"
        }
        // Display images in the range images[carouselIndex] to images[carouselIndex + 5] 
        images[index].style.display = "block"
        images[index+1].style.display = "block"
        images[index+2].style.display = "block"
        images[index+3].style.display = "block"
        images[index+4].style.display = "block"
        images[index+5].style.display = "block"
    }

}

displayImages(carouselIndex)