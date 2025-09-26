const button = document.getElementById('greetBtn');
const heading = document.getElementById('greeting');
const nameInput = document.getElementById('nameInput');

button.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name) {
    heading.textContent = `Hello, ${name}! Nice to meet you.`;
    heading.style.color = "green";
  } else {
    heading.textContent = "Please enter your name!";
    heading.style.color = "red";
  }
});
