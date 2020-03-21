

const navigation = document.getElementById('navigation') //блок с ul navigation
const tags = document.getElementById('tags'); //блок div class="portfolio__tags tags"
const portfolio = document.getElementById('portfolio-images'); //блок div class="layout-4-column"

const screen_left = document.getElementById('screen-left'); //изменений фона экрана left (black-screen)
const screen_right = document.getElementById('screen-right'); //изменений фона экрана right (black-screen)

const submit = document.getElementById('submit-button'); //блок div class="quote__button"
const message = document.getElementById('message-container'); //информационное окно
const button = document.getElementById('close-button'); // кнопка "OK" на информационном окне



/*Black-screen on Iphone*/

navigation.addEventListener('click', () => {
    navigation.querySelectorAll('a').forEach(elem => elem.classList.remove('active-menu'));
    event.target.classList.add('active-menu');
})

screen_left.addEventListener('click', () => event.target.style.opacity = event.target.style.opacity == 0 ? 1 : 0);
screen_right.addEventListener('click', () => event.target.style.opacity = event.target.style.opacity == 0 ? 1 : 0);



/*Slider*/

let slides = document.querySelectorAll('.iphone .slide');
let currentSlide = 0;
let isEnabled = true;

function changeCurrentSlide(n) {
    currentSlide = (n + slides.length) % slides.length;
}

function hideSlide(direction) {
    isEnabled = false;
    slides[currentSlide].classList.add(direction);
    slides[currentSlide].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
    });
}

function showSlide(direction) {
    slides[currentSlide].classList.add('next', direction);
    slides[currentSlide].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    });
}

function nextSlide(n) {
    hideSlide('to-left');
    changeCurrentSlide(n + 1);
    showSlide('from-right');
}

function previousSlide(n) {
    hideSlide('to-right');
    changeCurrentSlide(n - 1);
    showSlide('from-left');
}

document.querySelector('.arrow-previous').addEventListener('click', function() {
    if (isEnabled) {
        previousSlide(currentSlide);
    }
});

document.querySelector('.arrow-next').addEventListener('click', function() {
    if (isEnabled) {
        nextSlide(currentSlide);
    }
});




/*Change Tags & Images*/

tags.addEventListener('click', () => {
    if (event.target.tagName === 'BUTTON') {
        tags.querySelectorAll('button').forEach(elem => elem.classList.remove('tag_selected'));
        event.target.classList.add('tag_selected');
        changePortfolio();
    }
    console.log(portfolio.firstElementChild);
})

portfolio.addEventListener('click', () => {
    if (event.target.tagName === 'IMG') {
        portfolio.querySelectorAll('div').forEach(elem => elem.classList.remove('active-img'));
        const div = event.target.parentNode;
        div.classList.add('active-img');
    }
})


/*Info Message*/

submit.addEventListener('click', (e) => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    if (name.validity.valid && email.validity.valid) {
        e.preventDefault();
        message.classList.remove('hidden');
        document.getElementById('message-subject').innerText = subject.value ? 'Subject: ' + subject.value : 'Without subject';
        document.getElementById('message-description').innerText = description.value ? 'Description: ' + description.value : 'Without description';
    }

})

button.addEventListener('click', () => {
    message.classList.add('hidden');
    document.getElementById('form').reset();
});

function changePortfolio() {
    let first = portfolio.firstElementChild;
    let last = portfolio.lastElementChild;
    last.after(first);
}



