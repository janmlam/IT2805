/*
Inspired from: https://www.w3schools.com/howto/howto_js_slideshow.asp
*/

const carousel = document.getElementById("container_carousel")

const IMAGE_PATH = "./img/hair/carousel/"
const image_names = ["boyhaircut.jpg", "girlback.jpg", "girlback2.jpg", "girlback3.jpg", "girlcurls.jpg", "girlside.jpg", "girlside2.jpg", "wedding.jpg", "wedding2.jpg", "wedding3.jpg"]


const alternative_names = ["Photo of a boy getting his hair cut", "Photo of hairstyle", "Photo of hairstyle", "Photo of hairstyle", "Portrait of a hair model", "Portrait of a hair model", "Portrait of a hair model", "Photo of a bride styled for her wedding", "Photo of a bride styled for her wedding", "Photo of a bride styled for her wedding"]

// Loop through every image, create its HTML-elements and append them to the carousel
for (let i=0; i<image_names.length; i++) {
    let figure = document.createElement('figure') 
    figure.setAttribute('class', "carousel_figure fade")
    
    let image = document.createElement('img')
    image.setAttribute('src', IMAGE_PATH.concat(image_names[i]))
    image.setAttribute('alt', alternative_names[i])

    figure.appendChild(image)
    carousel.appendChild(figure)
}

// Add buttons
const prev = "<button id='prev' onclick='rotateCarousel(-1)'>&#10094;</button>"
const next = "<button id='next' onclick='rotateCarousel(1)'>&#10095;</button>"

carousel.insertAdjacentHTML('beforeend' , prev)
carousel.insertAdjacentHTML('beforeend' , next)