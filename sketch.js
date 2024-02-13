let particles = [];
let numberOfParticles = 300;
let gravity = 1;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < numberOfParticles; i++) {
    particles[i] = new Particle(); //setting up array to run 100 times, happens once
  }
}

function draw() {
  background(220);
  for (let i = 0; i < particles.length; i++){
    particles[i].move();
    particles[i].display();
  }
  gravity = map(mouseY, 0, height, 0, 3);
  console.log(gravity);
}

/*Generally round shapes take up too much space, so using rect/linear
shapes is going to be easier on the CPU

*/

class Particle {
  constructor() {
    this.height = 6;
    this.width = 6;
    this.x = random(width);
    this.y = random(height);
    this.xSpeed = random(0, 2);
  }
  display(){
    rect(this.x, this.y, this.width, this.height);
  }
  move(){
    this.x = this.x + this.xSpeed;
    this.y = this.y + gravity;
    if(this.x > width){
      this.x = 0;
    }
    if(this.y > height){
      this.y = 0;
    }
  }
}