document.addEventListener('DOMContentLoaded', () => {
    // Shopping Cart
    const shoppingCart = document.querySelector('.cart-item-container');
    const cartBtn = document.querySelector('#cart-btn');
    const closeCartBtn = document.querySelector('#close');

    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            shoppingCart.classList.add('active');
        });
    }

    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', () => {
            shoppingCart.classList.remove('active');
        });
    }

    // Account Form
    const accountForm = document.querySelector('.account-form');
    const accountBtn = document.querySelector('#account-btn');
    const closeFormBtn = document.querySelector('#close-form');

    if (accountBtn) {
        accountBtn.addEventListener('click', () => {
            accountForm.classList.add('active');
        });
    }

    if (closeFormBtn) {
        closeFormBtn.addEventListener('click', () => {
            accountForm.classList.remove('active');
        });
    }

    // Register/Login Form Toggle
    const registerbtn = document.querySelector('.account-form .register-btn');
    const loginbtn = document.querySelector('.account-form .login-btn');

    if (registerbtn && loginbtn) {
        registerbtn.addEventListener('click', () => {
            registerbtn.classList.add('active');
            loginbtn.classList.remove('active');

            document.querySelector('.account-form .login-form').classList.remove('active');
            document.querySelector('.account-form .register-form').classList.add('active');
        });

        loginbtn.addEventListener('click', () => {
            registerbtn.classList.remove('active');
            loginbtn.classList.add('active');

            document.querySelector('.account-form .login-form').classList.add('active');
            document.querySelector('.account-form .register-form').classList.remove('active');
        });
    }
});


// var swiper = new Swiper(".home-slider", {
//     autoplay: { 
//       delay: 7500, 
//       disableOnInteraction: false
//     },
//     grabCursor: true,
//     loop: true
//   });


const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const pagination = document.querySelector('.pagination');

let currentIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updatePagination();
}

function createPaginationDots() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateSlider();
        });
        pagination.appendChild(dot);
    }
}

function updatePagination() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
});

createPaginationDots();
updateSlider();

