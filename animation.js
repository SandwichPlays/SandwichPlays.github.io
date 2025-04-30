window.createSandwichRain = function () {
    const sandwichesContainer = document.querySelector('.sandwiches');
    const numSandwiches = 30;

    const getRandomNumber = (min, max) =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    const createSandwich = () => {
        const sandwich = document.createElement('div');
        sandwich.classList.add('sandwich');

        const leftPercent = Math.random() * 100;
        sandwich.dataset.leftPercent = leftPercent;
        sandwich.style.left = `${leftPercent}vw`;

        sandwich.style.animationDuration = `${getRandomNumber(3, 8)}s`;
        sandwich.style.animationDelay = `-${getRandomNumber(0, 4000)}ms`;
        sandwich.style.transform = `rotate(${getRandomNumber(-30, 30)}deg)`;

        sandwichesContainer.appendChild(sandwich);
    };

    Array.from({ length: numSandwiches }).forEach(createSandwich);

    window.addEventListener('resize', () => {
        document.querySelectorAll('.sandwich').forEach(sandwich => {
            const leftPercent = sandwich.dataset.leftPercent;
            sandwich.style.left = `${leftPercent}vw`;
        });
    });
};
