function navigateTo(url) {
    window.location.href = url;
}

document.addEventListener("DOMContentLoaded", () => {
    const textElements = document.querySelectorAll('.text');

    textElements.forEach((textElement) => {
        const text = textElement.textContent;
        textElement.innerHTML = text
            .split('')
            .map((char, index) => `<span class="letter" style="animation-delay: ${index * 0.07}s">${char}</span>`)
            .join('');
    });

    const isTouchDevice = () =>
        'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

    const imageElements = document.querySelectorAll('.image');

    imageElements.forEach((imageElement) => {
        const stillImage = imageElement.dataset.still;
        const gifImage = imageElement.dataset.gif;

        if (!stillImage || !gifImage) return;

        if (isTouchDevice()) {
            imageElement.src = gifImage;
        } else {
            imageElement.addEventListener('mouseenter', () => (imageElement.src = gifImage));
            imageElement.addEventListener('mouseleave', () => (imageElement.src = stillImage));
        }
    });
});
