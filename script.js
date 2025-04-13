const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 8 + 4;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.color = 'rgba(0, 194, 255, 0.6)';
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // wrap around screen
    if (this.x > canvas.width) this.x = 0;
    if (this.x < 0) this.x = canvas.width;
    if (this.y > canvas.height) this.y = 0;
    if (this.y < 0) this.y = canvas.height;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#00C2FF";
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  particlesArray = [];
  for (let i = 0; i < 25; i++) {
    particlesArray.push(new Particle());
  }
}
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});

init();
animate();
}
// === PARALLAX BACKGROUND EFFECT ===
window.addEventListener("scroll", () => {
  const bg = document.querySelector(".hero-bg");
  if (bg) {
    let scroll = window.scrollY;
    bg.style.transform = `translateY(${scroll * 0.4}px)`;
  }
});
