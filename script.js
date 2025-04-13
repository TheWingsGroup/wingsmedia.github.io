// Function to create a floating bubble dynamically
function createBubble() {
  const bubble = document.createElement('div');  // Create a new div for the bubble
  bubble.classList.add('bubble');  // Add the class for styling

  // Set a random size for the bubble between 50px and 150px
  const size = Math.random() * (150 - 50) + 50;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  // Set random initial position for the bubble within the viewport
  const positionX = Math.random() * 100;  // Random horizontal position (0 to 100%)
  const positionY = Math.random() * 100;  // Random vertical position (0 to 100%)
  bubble.style.left = `${positionX}%`;
  bubble.style.top = `${positionY}%`;

  // Set random animation delay and duration for a more natural effect
  const positionDelay = Math.random() * 5;  // Random delay before animation starts
  const animationDuration = Math.random() * 10 + 5;  // Random animation duration (between 5s to 15s)

  // Apply styles for animation timing
  bubble.style.animationDelay = `${positionDelay}s`;
  bubble.style.animationDuration = `${animationDuration}s`;

  // Append the bubble to the body (or another container if needed)
  document.body.appendChild(bubble);
}

// Function to make the bubbles interactive based on mouse movement
function mouseMoveEffect(event) {
  const x = event.clientX;  // Get the X position of the mouse
  const y = event.clientY;  // Get the Y position of the mouse

  // Adjust the position and size of the bubbles based on mouse position
  const allBubbles = document.querySelectorAll('.bubble');
  allBubbles.forEach(bubble => {
    const bubbleRect = bubble.getBoundingClientRect();
    const bubbleCenterX = bubbleRect.left + bubbleRect.width / 2;
    const bubbleCenterY = bubbleRect.top + bubbleRect.height / 2;

    // Calculate the distance between the mouse and the bubble center
    const distanceX = x - bubbleCenterX;
    const distanceY = y - bubbleCenterY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    // Adjust the bubble's animation speed and size based on mouse distance
    const scale = 1 + (1 - distance / 400);  // Bubbles scale larger when closer to mouse
    const speed = 10 - Math.min(distance / 30, 5);  // Bubbles speed up when close to mouse

    bubble.style.transform = `translateY(${Math.sin(distance / 100) * 50}px) scale(${scale})`;
    bubble.style.transition = `transform ${speed}s ease-out`;
  });
}

// Create multiple bubbles when the page loads
window.addEventListener('load', () => {
  const bubbleCount = 40;  // Number of bubbles to create (adjust as needed)
  for (let i = 0; i < bubbleCount; i++) {
    createBubble();
  }
});

// Add mouse move event listener to make bubbles interact with the mouse
document.addEventListener('mousemove', mouseMoveEffect);
