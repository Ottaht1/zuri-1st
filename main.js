// Selection of HTML objects
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav-links');

// Defining a function
function toggleNav() {
    nav.style.visibility.display = "block";
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}

// Calling the function after click event occurs
burger.addEventListener('click', function() {
    toggleNav();
});