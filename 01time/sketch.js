/*global p5*/

function setup(){
    createCanvas(windowWidth, windowHeight);
  
}

function draw(){
    background('#FFE1A8');
    
    let h = hour();
    let m = minute();
    let s = second();

//hour

    push();
    noFill();
    translate(width/2, height/2);
    rectMode(CENTER);
    stroke('#723D46');
    strokeWeight(10);
    rotate(h*15);
    rect(0,0,8*h+1,8*h+1)
    pop();
    
//minute    
    push();
    noFill();
    translate(width/2, height/2);
    rectMode(CENTER);
    stroke('#E26D5C');
    strokeWeight(10);
    rotate(m*6);
    rect(0,0,8*m+1,8*m+1)
    pop();
  
//second   
    push();
    noFill();
    translate(width/2, height/2);
    rectMode(CENTER);
    stroke(255, 202, 69);
    strokeWeight(10);
    rotate(s*6);
    rect(0,0,8*s+1,8*s+1)
    pop();
  
  //angle += PI/300
}

