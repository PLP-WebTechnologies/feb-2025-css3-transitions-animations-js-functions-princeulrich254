// Get elements
const animateBtn = document.getElementById('animateBtn');
const animatedElement = document.getElementById('animatedElement');
const message = document.getElementById('message');

// Check if the animation has already been triggered
if (localStorage.getItem('animated')) {
    animatedElement.classList.add('animate');
    message.textContent = "You have already triggered the animation!";
}

// Function to trigger animation
animateBtn.addEventListener('click', () => {
    animatedElement.classList.add('animate');
    localStorage.setItem('animated', 'true'); // Store the user preference
    message.textContent = "Animation triggered! You can refresh the page.";
});
