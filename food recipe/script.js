
/* Sliding controller*/
// accessing previous and next buttons
let right = document.querySelector(".right");
let left = document.querySelector(".left");
//accessing all images and it returns array of all images
let image = document.getElementsByClassName('img');
// access dot circle
let dot = document.querySelectorAll('.dot');
let container = document.querySelector('.slider');
let sliderText = document.querySelectorAll('.sliderText');
// counter to preserve index of current image
let counter = 0; 

// right button handling
right.addEventListener('click',next);
function next(){
    // defining sliding animation for next (next1 is variable name to ensure given animation is used for this variable)
    image[counter].style.animation = 'next1 0.5s ease-in forwards';
    sliderText[counter].style.animation = 'next1 0.5s ease-in forwards';

    // check the current index of image 
    if(counter >= image.length-1){
        counter = 0;
    }else{
        counter++;
    }
    circleActive()
    image[counter].style.animation = 'next2 0.5s ease-in forwards';
    sliderText[counter].style.animation = 'next2 0.5s ease-in forwards';
}
// left button handling
left.addEventListener('click',previous);
function previous(){
    image[counter].style.animation = 'prev1 0.5s ease-in forwards';
    sliderText[counter].style.animation = 'prev1 0.5s ease-in forwards';

    // check the current index of image 
    if(counter === 0){
        counter = image.length-1;
    }else{
        counter--;
    }
    image[counter].style.animation = 'prev2 0.5s ease-in forwards';
    sliderText[counter].style.animation = 'prev2 0.5s ease-in forwards';

    circleActive()
}


// auto sliding
function autoSliding(){
    autoSlide = setInterval(timer, 2000)
    function timer(){
        next();
        circleActive();
    }
}
autoSliding();
// stop sliding on hovering
container.addEventListener('mouseover',function(){
    clearInterval(autoSlide);
});
// resuming sliding
container.addEventListener('mouseout', autoSliding);

// active circle marking
function circleActive(){
    for( i = 0 ; i< dot.length; i++){
        dot[i].className = dot[i].className.replace('active'," ");
    }
    dot[counter].className += ' active';
}

// image showing on clicking on circle
function handleCircleClick(currentImage){
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('num');
    if(imageId > counter){
        image[counter].style.animation = 'next1 0.5s ease-in forwards';
        sliderText[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter=imageId;
        image[counter].style.animation = 'next2 0.5s ease-in forwards';
        sliderText[counter].style.animation = 'next2 0.5s ease-in forwards';
    }else if(imageId === counter){
        return
    }else{
        image[counter].style.animation = 'prev1 0.5s ease-in forwards';
        sliderText[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter=imageId;
        image[counter].style.animation = 'prev2 0.5s ease-in forwards';
        sliderText[counter].style.animation = 'prev2 0.5s ease-in forwards';

    }
    circleActive();
}

// small image sliding