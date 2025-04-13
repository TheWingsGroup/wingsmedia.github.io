// Function to create a floating bubble dynamically
function createBubble() {
  const bubble = document.createElement('div');  // Create a new div for the bubble
  bubble.classList.add('bubble');  // Add the class for styling

  // Set a random size for the bubble between 50px and 150px
  const size = Math.random() * (150 - 50) + 50;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  // Set a random position for the bubble to float from the bottom of the page
  const positionX = Math.random() * 100;  // Random horizontal position
  const positionDelay = Math.random() * 5;  // Random delay for the bubble animation
  const animationDuration = Math.random() * 3 + 5;  // Random duration for each bubble animation

  // Apply styles to position the bubble and control its movement
  bubble.style.left = `${positionX}%`;
  bubble.style.animationDelay = `${positionDelay}s`;
  bubble.style.animationDuration = `${animationDuration}s`;

  // Append the bubble to the body (or another container if needed)
  document.body.appendChild(bubble);
}

// Create multiple bubbles when the page loads
window.addEventListener('load', () => {
  const bubbleCount = 20;  // Number of bubbles to create
  for (let i = 0; i < bubbleCount; i++) {
    createBubble();
  }
});
