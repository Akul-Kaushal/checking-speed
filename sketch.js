var Amuse , Corvette , Blitz ;
var wall1 , wall2 , wall3;
var weight1 , weight2 , weight3;
var speed1 , speed2 , speed3;
function setup() {
  createCanvas(1600,1200);

  Amuse = createSprite(50,200,50,50);
  Corvette= createSprite(50,600,50,50);
  Blitz = createSprite(50,1000,50,50);

  wall1 = createSprite(1200,200,10,height/2);
  wall2 = createSprite(1200,600,10,height/2);
  wall3 = createSprite(1200,1000,10,height/2);
  

  Amuse.shapeColor = color(66, 245, 105);
  Blitz.shapeColor = color(66, 245, 105);
  Corvette.shapeColor = color(66, 245, 105);

  wall1.shapeColor = color(194, 66, 245);
  wall2.shapeColor = color(194, 66, 245);
  wall3.shapeColor = color(194, 66, 245);
  
  weight1 = random(55,90);
  weight2 = random(50,95);
  weight3 = random(50,85);

  speed1 = random(40,50);
  speed2 = random(155,410);
  speed3 = random(400,420);
}

function draw() {
  background(0); 
  Amuse.velocityX = speed1;
  if (wall1.x-Amuse.x<(Amuse.width+wall1.width)/2){
      Amuse.velocityX=0;
        var deformation=(0.5*weight1*speed1*speed1)/22509;
       if (deformation>180){
           Amuse.shapeColor=color(225,0,0);
          } 
        if (deformation<180 && deformation>100){
           Amuse.shapeColor=color(230,230,0);
          }
        if (deformation<100){
           Amuse.shapeColor=color(0,225,0);
          }  
  }   

  Blitz.velocityX = speed2;
  if (wall2.x-Blitz.x<(Blitz.width+wall2.width)/2){
    Blitz.velocityX=0;
       var deformation=(0.5*weight2*speed2*speed2)/22509;
     if (deformation>180){
         Blitz.shapeColor=color(225,0,0);
        }
      if (deformation<180 && deformation>100){
         Blitz.shapeColor=color(230,230,0);
        }
      if (deformation<100){
         Blitz.shapeColor=color(0,225,0);
        }  
 }

  Corvette.velocityX = speed3;
  if (wall3.x-Corvette.x < (Corvette.width+wall3.width)/2){
  Corvette.velocityX=0;
     var deformation=(0.5*weight3*speed3*speed3)/22509;
    if (deformation>180){
       Corvette.shapeColor=color(225,0,0);
      }
    if (deformation<180 && deformation>100){
       Corvette.shapeColor=color(230,230,0);
      }
    if (deformation<100){
       Corvette.shapeColor=color(0,225,0);
      }  
     }

  drawSprites();
}