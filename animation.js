document.addEventListener("DOMContentLoaded", () => {
    const sandwichesContainer = document.querySelector('.sandwiches');
    const numSandwiches = 30;

    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const createSandwich = () => {
        const sandwich = document.createElement('div');
        sandwich.classList.add('sandwich');
        sandwich.style.left = `${getRandomNumber(-50, window.innerWidth + 50)}px`;
        sandwich.style.animationDuration = `${getRandomNumber(3, 8)}s`;
        sandwich.style.animationDelay = `-${getRandomNumber(0, 4000)}ms`;
        sandwich.style.transform = `rotate(${getRandomNumber(-30, 30)}deg)`;
        sandwichesContainer.appendChild(sandwich);
    };

    Array.from({ length: numSandwiches }).forEach(createSandwich);
});