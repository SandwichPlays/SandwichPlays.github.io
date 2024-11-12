function navigateTo(url) {
    window.location.href = url;
}

window.onload = function() {
    const textElement = document.querySelector('h1');
    const textContent = textElement.textContent;  // Get the text content
    textElement.innerHTML = '';  // Clear the current text

    // Loop through each character and wrap it in a <span> tag
    for (let i = 0; i < textContent.length; i++) {
        const span = document.createElement('span');
        span.textContent = textContent[i];  // Set each letter as text content of span
        textElement.appendChild(span);  // Append the span to the text element
    }
};
