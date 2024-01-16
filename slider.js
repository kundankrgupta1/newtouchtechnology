let imgArray = [
    "./img/slider1.jpeg",
    "./img/slider2.jpg",
    "./img/slider3.jpg",
    "./img/slider4.jpeg"
];
let image = document.querySelector('.img');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let currentImage = 0;
image.setAttribute('src', imgArray[currentImage]);
prev.addEventListener('click', function()
{
    currentImage--;
    if(currentImage < 0)
    {
        currentImage = imgArray.length - 1;
    }
    image.setAttribute('src', imgArray[currentImage]);
})
next.addEventListener('click', function()
{
    currentImage++;
    if(currentImage >= imgArray.length - 1){
        currentImage = 0;
    }
    image.setAttribute('src', imgArray[currentImage]);
})