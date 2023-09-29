// Add animation to the skills section
const skillsSection = document.querySelector('section:nth-child(2) ul');
const skillsList = Array.from(skillsSection.getElementsByTagName('li'));

let skillIndex = 0;

function fadeInSkill() {
    if (skillIndex < skillsList.length) {
        skillsList[skillIndex].style.opacity = 0;
        setTimeout(() => {
            let opacity = 0;
            const fadeIn = setInterval(() => {
                if (opacity >= 1) {
                    clearInterval(fadeIn);
                    skillIndex++;
                    setTimeout(fadeInSkill, 300);
                } else {
                    opacity += 0.05;
                    skillsList[skillIndex].style.opacity = opacity;
                }
            }, 20);
        }, 300);
    }
}

// Start the skills animation when the page loads
window.addEventListener('load', () => {
    fadeInSkill();
});
