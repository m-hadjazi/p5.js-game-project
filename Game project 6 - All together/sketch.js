/*

The Game Project 6 - Side scrolling

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var clouds;
var mountains;
var trees_x;
var canyons;
var collectables;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    
	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Initialise arrays of scenery objects.
    trees_x = [-20,275,750,1500];
    
    clouds = [{x_Pos: -475, y_Pos: 40, scale: 0.7},
              {x_Pos: -70, y_Pos: 40, scale: 0.9},
              {x_Pos: 350, y_Pos: 60, scale: 0.7},
              {x_Pos: 725, y_Pos: 40, scale: 0.9}, 
              {x_Pos: 1200, y_Pos: 40, scale: 0.7}];
    
    mountains = [{x_Pos: -300, y_Pos: 299, size: 0.7},
                 {x_Pos: 550, y_Pos: 299, size: 0.5},
                 {x_Pos: 1100, y_Pos: 299, size: 0.9}];
    
    canyons = [{x_Pos: 175, width: 300},
               {x_Pos: 460, width: 250},
               {x_Pos: 780, width: 350}];
    
    collectables = [{x_Pos: 90, y_Pos: 400, size: 50, isFound: false}, 
                    {x_Pos: 580, y_Pos: 400, size: 50, isFound: false},
                    {x_Pos: 1365, y_Pos: 400, size: 50, isFound: false}];
    
}

function draw()
{
	background(100, 155, 255); // fill the sky blue
    
//    fill(0);
//    rect(0,0,100,100);
//    fill(255);
//    text(mouseX + "," + mouseY, 50, 50);
    
    // draw some green ground
    noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height/4); 
    
    push();
    translate(scrollPos, 0);

	// Draw clouds.
    for (var i = 0; i < clouds.length; i++){
        fill(255);
        stroke(255);
        rect(clouds[i].x_Pos + 30 * clouds[i].scale,
             clouds[i].y_Pos + 30 * clouds[i].scale,
             100 * clouds[i].scale, 
             70 * clouds[i].scale);
        
        ellipse(clouds[i].x_Pos + 20 * clouds[i].scale, 
                clouds[i].y_Pos + 66 * clouds[i].scale,
                70 * clouds[i].scale, 
                70 * clouds[i].scale);
        
        ellipse(clouds[i].x_Pos + 70 * clouds[i].scale, 
                clouds[i].y_Pos + 30 * clouds[i].scale,
                80 * clouds[i].scale, 
                80 * clouds[i].scale);
        
        ellipse(clouds[i].x_Pos + 120 * clouds[i].scale, 
                clouds[i].y_Pos + 20 * clouds[i].scale,
                80 * clouds[i].scale, 
                80 * clouds[i].scale);
        
        ellipse(clouds[i].x_Pos + 140 * clouds[i].scale, 
                clouds[i].y_Pos + 61 * clouds[i].scale,
                80 * clouds[i].scale, 
                80 * clouds[i].scale);
    }

	// Draw mountains.
    noStroke();
    for (var i = 0; i < mountains.length; i++){
        fill(151,124,83);
        triangle(mountains[i].x_Pos, 
                 mountains[i].y_Pos - 200 * mountains[i].size,

                 mountains[i].x_Pos - 150, 
                 floorPos_y,

                 mountains[i].x_Pos + 200, 
                 floorPos_y);

        triangle(mountains[i].x_Pos - 100,
                 mountains[i].y_Pos - 100 * mountains[i].size,

                 mountains[i].x_Pos - 250, 
                 floorPos_y,

                 mountains[i].x_Pos + 100, 
                 floorPos_y);

        triangle(mountains[i].x_Pos + 140,
                 mountains[i].y_Po - 50 * mountains[i].size,

                 mountains[i].x_Pos + 50, 
                 floorPos_y,

                 mountains[i].x_Pos + 225, 
                 floorPos_y);
    }

    //Draw trees.
    noStroke();
    for(var i = 0; i < trees_x.length; i++){
        //tree
        //Leaves
        fill(66,105,47);
        ellipse(trees_x[i], floorPos_y - 123,150,150); //BIGGEST ONE //
        ellipse(trees_x[i] - 60, floorPos_y - 103,100,100); //1st one
        ellipse(trees_x[i] - 40, floorPos_y - 183,100,100); //2nd one
        ellipse(trees_x[i] + 10, floorPos_y - 233,100,100); //3rd one
        ellipse(trees_x[i] + 30, floorPos_y - 183,100,100); //4th one
        ellipse(trees_x[i] + 60, floorPos_y - 113,100,100); //5th one

        //Trunk and branch 
        fill(102,51,0);
        triangle(trees_x[i], floorPos_y - 208, 
                 trees_x[i] - 25, floorPos_y,
                 trees_x[i] + 25, floorPos_y);

        triangle(trees_x[i] + 5, floorPos_y - 63,
                 trees_x[i] + 5, floorPos_y - 98,
                 trees_x[i] + 70, floorPos_y - 133);

        triangle(trees_x[i], floorPos_y - 133,
                 trees_x[i], floorPos_y - 98,
                 trees_x[i] - 70, floorPos_y - 183);
    }
    
    // Draw canyons
    for(var i = 0; i < canyons.length; i++){
        fill(100, 155, 255);
        rect(canyons[i].x_Pos, floorPos_y, 
             canyons[i].width/5, 50);
        
        rect(canyons[i].x_Pos, 480, 
             80, canyons[i].width/5);
        
        rect(canyons[i].x_Pos + 80, 480, 
             canyons[i].width/5, 50);
        
        rect(canyons[i].x_Pos + 100, 510, 
             100, canyons[i].width/5);
        
        rect(canyons[i].x_Pos + 200, 510, 
             canyons[i].width/5, 70);
    }

	// Draw collectable items
    for(var i = 0; i < collectables.length; i++){
        fill(255,223,0);
        ellipse(collectables[i].x_Pos, 
                collectables[i].y_Pos, 
                collectables[i].size, 
                collectables[i].size);
        
        fill(255,200,0);
        ellipse(collectables[i].x_Pos, 
                collectables[i].y_Pos, 
                collectables[i].size - 10, 
                collectables[i].size - 10);
    }
    
    pop();

	// Draw the game character - this must be last
    fill(255,220,177);
	ellipse(gameChar_x, 
            gameChar_y - 59, 
            17,20); //the face
    
    fill(255);
    ellipse (gameChar_x - 3, 
             gameChar_y - 62,
             5,5); // right eye
    ellipse (gameChar_x + 3, 
             gameChar_y - 62,
             5,5); // left eye
    fill(0);
    ellipse(gameChar_x - 3, 
            gameChar_y - 62,
            1,1); // right eye
    ellipse(gameChar_x + 3, 
            gameChar_y - 62,
            1,1); // left eye
    
    fill(255); 
    ellipse(gameChar_x, 
            gameChar_y - 54,
            7,5); //mouth
    
    fill(255,220,177);
    rect(gameChar_x - 2, 
         gameChar_y - 49,
         5,5); //the neck
    rect(gameChar_x + 14, 
         gameChar_y - 41,
         4,10); //right hand
    rect(gameChar_x - 17, 
         gameChar_y - 41,
         4,10); //left hand
    
    fill(159, 238, 232);
    rect(gameChar_x - 13,
         gameChar_y - 44,
         27,17); //the chest
    
    fill(121, 95, 44);
    rect(gameChar_x - 13,
         gameChar_y - 27,
         27,7); //the waist
    rect(gameChar_x - 8,
         gameChar_y - 20,
         5,15); //left leg
    rect(gameChar_x + 5,
         gameChar_y - 20,
         5,15); //right leg
    
    fill(19,44,111);
    rect(gameChar_x - 8,
         gameChar_y - 5,
         5,5); //Left shoe
    rect(gameChar_x + 5,
         gameChar_y - 5,
         5,5); //Right shoe


	//////// Game character logic ///////
	// Logic to move

	if(isLeft){
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight){
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}

	}
}

function keyPressed(){

	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = true;
	}

}

function keyReleased(){
	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}
}
