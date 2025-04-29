function navigateTo(url) {
    window.location.href = url;
}

document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll('.text'); // Get all elements with the class 'wave-text'

    textElements.forEach((textElement) => {
        const text = textElement.textContent;
        textElement.innerHTML = ''; // Clear the existing text

        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.classList.add('letter');
            span.style.animationDelay = `${index * 0.07}s`; // Stagger the animation
            textElement.appendChild(span);
        });
    });


    function isTouchDevice() {
        return (
            'ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0
        );
    }

    const imageElements = document.querySelectorAll('.image');

    imageElements.forEach((imageElement) => {
        const stillImage = imageElement.getAttribute('data-still');
        const gifImage = imageElement.getAttribute('data-gif');

        if (!stillImage || !gifImage) return; // skip if data missing

        if (isTouchDevice()) {
            // On mobile/touch devices: autoplay GIF
            imageElement.src = gifImage;
        } else {
            // On desktop: hover behavior
            imageElement.addEventListener('mouseenter', () => {
                imageElement.src = gifImage;
            });

            imageElement.addEventListener('mouseleave', () => {
                imageElement.src = stillImage;
            });
        }
    });
});
