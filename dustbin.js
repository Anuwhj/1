class Dustbin {
    constructor(x, y) {
      var options = 
      {
          isStatic : true
      
      }

      this.x = x;
      this.y = y;
      this.dustbinWidth = 200;
      this.dustbinHeight=120;
      this.wallThickness=10;

    
      this.image=loadImage('dustbingreen.png');
      this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThikness, options);
      this.leftWallBody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y, this.wallThickness, this.dustbinHeight, options);
      this.rightWallBody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y, this.wallThickness, this.dustbinHeight,options);

      World .add(world,this.bottomBody);
      World. add(world,this.leftWallBody);
      World. add(world,this.rightWallBody); 
    }
      


    display(){

    var posBottom=this.bottomBody.position;
    var posLeft=this.leftWallBody.position;
    var posRight=this.rightWallBody.position;

      //var pos =this.body.position;
      var angle = this.angle;

      push();
      translate(posLeft.x,posRight.y);
      rectMode(CENTER);
      angleMode(RADIANS);
      fill(225);
      rotate(angle);
      rect(0,0,this.wallThickness, this.dustbinHeight);
      pop ();




      push();
      translate(posRight.x,posRight.y);
      rectMode(CENTER);
      //angleMode(RADIANS);
      fill(225)
      //rotate(-1*angle);
      rect(0,0,this.wallThickness, this.dustbinHeight);
      pop(); 


      push();
      translate(posBottom.x,posBottom.y);
      rectMode(CENTER);
      //angleMode(RADIANS);
      fill(225);
      imageMode(CENTER);
      image(this.image,0,0,this.dustbinWidth,this.dustbinHeight);
      pop();
    }
  }
  