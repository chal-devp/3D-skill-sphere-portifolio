const topBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});
topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Elegant smooth scroll
};
document.getElementById('goldenContactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const feedback = document.getElementById('formFeedback');
    // Professional Success State
    feedback.innerHTML = "Thank you. Our concierge will reach out to you shortly.";
    feedback.style.color = "#D4AF37";
    feedback.style.marginTop = "20px";
    feedback.style.textAlign = "center";
    
    e.target.reset(); // Clears the form after sending
});
const images = document.querySelectorAll(".img-hover-container img");
const dots = document.querySelectorAll(".dots"); // FIXED variable name
let currentSlide = 0;
let intervalId = null;

initialize();

function initialize() {
    images[currentSlide].classList.add("displayImage");
    if(dots.length > 0) dots[currentSlide].classList.add("active"); // add active safely
    intervalId = setInterval(nextSlide, 5000);
}

function showSlide(index) {
    if(index >= images.length){
        currentSlide = 0; 
    } else if(index < 0){
        currentSlide = images.length - 1;
    } else {
        currentSlide = index;
    }

    images.forEach((image, i) => {
        image.classList.remove("displayImage");
        if(dots.length > 0) dots[i].classList.remove("active");
    });
    images[currentSlide].classList.add("displayImage");
    if(dots.length > 0) dots[currentSlide].classList.add("active");
}
function nextSlide()
 {
     currentSlide++; 
     showSlide(currentSlide);
}

function prevSlide() 
{    clearInterval(intervalId);
    currentSlide--;
    showSlide(currentSlide);
}
function slider(value)
 {
    currentSlide = parseInt(value);
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);
    showSlide(currentSlide);
}





























/*
const images = document.querySelectorAll(".img-hover-container img");
const dot = document.querySelectorAll(".dots")
let currentSlide = 0;
let intervalId = null;
initialize();
function initialize()
{
    images[currentSlide].classList.add("displayImage");
    intervalId = setInterval(nextSlide, 5000);
}
function showSlide(index){
if(index >= images.length){
    currentSlide = 0; 
}
else if(index < 0){
    currentSlide = images.length - 1;
}
    else{
        currentSlide = index;
    }
    images.forEach((image,i)=>{
        image.classList.remove("displayImage");
        if(dot.length >0) 
            dot[i].classList.remove('active');
    })
    images[currentSlide].classList.add("displayImage");
    dot[currentSlide].classList.add("active")
}
function nextSlide(){
    currentSlide++;
    showSlide(currentSlide);
}
function prevSlide(){
    currentSlide--;
    showSlide(currentSlide);
}
function slider(value){
    currentSlide = parseInt(value);
clearInterval(intervalId);
intervalId = setInterval(nextSlide, 5000);
showSlide(currentSlide);
}
*/