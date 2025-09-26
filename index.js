// Get the button and heading elements
const button = document.getElementById('changeBtn');
const heading = document.getElementById('greeting');

// Add a click event listener to the button
button.addEventListener('click', () => {
  heading.textContent = "Hello, JavaScript is working!";
  heading.style.color = "blue";
});
