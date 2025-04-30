function navigateTo(url) {
    window.location.href = url;
}

const assetsToPreload = [
    './media/a.gif',
    './media/i.gif',
    './media/k.gif',
    './media/l.gif',
    './media/m.gif',
    './media/o.gif',
    './media/sandwich.png',
    './media/sandocoin.ico',
    './media/chiren.png',
    './media/chiren.ico',
    './media/chiren.gif',
    './media/nak.png',
    './media/nghhrt.ico',
    './media/nak.gif',
    './media/skibidi.png',
    './media/skibidi.ico',
    './media/skibidi.gif',
    './media/zipbomb.png',
    './media/zipbomb.gif',
    './media/MAL.jpg',
    './media/teto.gif', 
    // Add more paths as needed
  ];
  
function preloadImage(url) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = resolve; // resolve on error to avoid blocking
      img.src = url;
    });
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

window.addEventListener('load', async () => {
    await Promise.all(assetsToPreload.map(preloadImage));
    if (typeof window.createSandwichRain === 'function') {
      window.createSandwichRain();
    }
    document.body.classList.remove('loading');
});
  
console.log('✅ Reached end of script');
