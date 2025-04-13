// Function to create bubbles dynamically
function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  // Random size for bubbles
  const size = Math.random() * 40 + 20; // Size between 20px and 60px
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  // Random position for bubbles
  const xPos = Math.random() * window.innerWidth;
  const yPos = Math.random() * window.innerHeight;

  bubble.style.left = `${xPos}px`;
  bubble.style.top = `${yPos}px`;

  document.body.appendChild(bubble);

  // Remove bubble after animation ends
  setTimeout(() => {
    bubble.remove();
  }, 15000); // Matches the float animation duration
}

// Create bubbles at regular intervals
setInterval(createBubble, 500); // Add a new bubble every 500ms
