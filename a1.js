let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight).parent('sketch-container');
  // No background needed as we want a transparent canvas

  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  clear(); // Clear the canvas to make it transparent

  for (let particle of particles) {
    particle.update();
    particle.display();
  }
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.size = random(10, 30);
    this.color = color(random(255), random(255), random(255));
  }

  update() {
    this.pos.add(this.vel);

    if (this.pos.x > width || this.pos.x < 0) {
      this.vel.x *= -1;
    }

    if (this.pos.y > height || this.pos.y < 0) {
      this.vel.y *= -1;
    }
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}
