var capture;

var balls = [];

var radiusLow = 10;
var radiusHigh = 10;
var rangeLow = 5;
var rangeHigh = 5;

function setup() {
  createCanvas(600, 600);
  capture = createCapture(VIDEO);
  capture.size(600, 600);
 // imageMode(CENTER);
   background(0);

}

function draw(){
 
   for (var i = 0; i < balls.length; i++){
         balls[i].draw();
         balls[i].update();
         balls[i].changeColour();
   }

   for (var i = 0; i < balls.length; i++){
         if (balls[i].radius < 10){
            //balls.splice(i);
         }
   }

   if (mouseIsPressed){

         for (var i = 0; i < 5; i++){
               balls.push(new Ball(mouseX, mouseY, color(capture.get(mouseX+random(2), mouseY+random(2)))));
         }

   }

}


class Ball{

         constructor(mX, mY, c){
                this.location = createVector(mX, mY);
               this.radius = random(1, 20);
               this.r = red(c);
               this.g = green(c);
               this.b = blue(c);

               this.xOff = 0.0;
               this.yOff = 0.0;

               this.radiusLow;
               this.radiusHigh;

               this.rangeLow;
               this.rangeHigh;
                     
                    
                    this.c = null;
                    
         } 

         update(){
               this.radius -= random(0.15, 0.25);

               this.xOff = this.xOff + random(-.5, .5);
               this.nX = noise(this.location.x) * this.xOff;

               this.yOff = this.yOff + random(-.5, .5);
               this.nY = noise(this.location.y) * this.yOff;

               this.location.x += this.nX;
               this.location.y += this.nY;
              
                    

         }

         changeColour(){
                    
                    if (this.location.x > capture.width || this.location.y > capture.height ||
                        this.location.x < 0 || this.location.y < 0){
                      
                    }
                  
               else {
                      this.c = color(capture.get(this.location.x, this.location.y));
                    }
               this.r = red(this.c);
               this.g = green(this.c);
               this.b = blue(this.c);
              
              
         } 

         draw(){
               noStroke();
               fill(this.r, this.g, this.b);
               ellipse(this.location.x, this.location.y, this.radius, this.radius);
         }
   }