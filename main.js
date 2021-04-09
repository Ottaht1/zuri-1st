// Selection of HTML objects
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav-links');

function check(t) {
    if(!t) {
        nav.style.display = "none";
    }else {
        nav.style.display = "flex";
    }
}

let toggle = false;

check(toggle);



// Defining a function
function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
    check(toggle);
}

// Calling the function after click event occurs
burger.addEventListener('click', function() {
    toggle = !toggle;
    toggleNav();
});