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
  });
  