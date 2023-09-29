// Add animation to the header
const header = document.querySelector('header');
header.style.opacity = 0;

setTimeout(() => {
    let opacity = 0;
    const fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn);
        } else {
            opacity += 0.1;
            header.style.opacity = opacity;
        }
    }, 100);
}, 500);
