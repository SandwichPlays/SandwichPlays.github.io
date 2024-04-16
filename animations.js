// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// JavaScript to dynamically generate and animate the sandwiches
document.addEventListener('DOMContentLoaded', function() {
    const sandwichesContainer = document.querySelector('.sandwiches');
    const numSandwiches = 30; // Number of sandwiches to generate

    // Function to generate a random number between min and max  inclusive
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to create a sandwich element
    function createSandwich() {
        const sandwich = document.createElement('div');
        sandwich.classList.add('sandwich');
        sandwich.style.left = `${getRandomNumber(-50, window.innerWidth + 50)}px`; // Random horizontal position with some margin
        sandwich.style.animationDuration = `${getRandomNumber(3, 8)}s`; // Random falling speed
        sandwich.style.animationDelay = `-${getRandomNumber(0, 4000)}ms`; // Random animation delay
        sandwich.style.transform = `rotate(${getRandomNumber(-30, 30)}deg)`; // Random rotation
        sandwichesContainer.appendChild(sandwich);
    }

    // Generate sandwiches
    for (let i = 0; i < numSandwiches; i++) {
        createSandwich();
    }
});

