/*

The Game Project - 4

Game interaction

*/


//Write a conditional statement within draw to detect when the character is over the canyon. HINT: use gameChar_x and the > and < operators

//When the condition is met set isPlummeting to true.

//Write another conditional statement within draw which detects when isPlummeting is true

//When this condition is met increment gameChar_y so that the game character falls quickly

//Test that your character falls down the canyon when they pass over it

// have one coin for now/erase the anchor points

// get red of the anchor points on the canyon

var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isFalling; // falling down 
var isPlummeting; // falling down the canyons 

var collectable;
var canyon;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2; 
	gameChar_y = floorPos_y; 
    
    isLeft = false;
    isRight = false; 
    isFalling = false;
    isPlummeting = false;
    
    collectable = {x_pos: 125, y_pos: 400, size: 50, isFound: false};
    
    canyon = {x_pos: 220, width: 200}
    
}

function draw()
{

	///////////DRAWING CODE//////////
    
    //fill the sky blue
	background(100,155,255); 

    //draw some green ground
	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); 
    
    fill(0);
    rect(0,0,100,100);
    fill(255);
    text(mouseX + "," + mouseY, 50, 50)
    
    //plumetting down the canyon 
    if (gameChar_x > canyon.x_pos && gameChar_x < canyon.x_pos + 40 && gameChar_y <= floorPos_y){
        isPlummeting = true;
        console.log("isPlummeting")
    }   

    else{
        isPlummeting = false;
    }
    
    if (isPlummeting == true){
        gameChar_y += 50;
    }

	//draw the canyon
    fill(100, 155, 255);
    rect(canyon.x_pos, floorPos_y, 
         canyon.width/5, 
         50);
    rect(canyon.x_pos, 480, 
         80, canyon.width/5);
    rect(canyon.x_pos + 80, 480, 
         canyon.width/5, 50);
    rect(canyon.x_pos + 100, 510, 100, 
         canyon.width/5);
    rect(canyon.x_pos + 200, 510, 
         canyon.width/5, 70);
    
    //collectable item 
    if (collectable.isFound == false){
        fill(255,223,0);
        ellipse(collectable.x_pos, 
                collectable.y_pos, 
                collectable.size, 
                collectable.size);
        fill(255,200,0);
        ellipse(collectable.x_pos, 
                collectable.y_pos, 
                collectable.size - 10, collectable.size - 10);
    }
    
    var d = dist(collectable.x_pos, collectable.y_pos, gameChar_x, gameChar_y);
    
    if(d < 65){
        collectable.isFound = true; 
    }
    
	//the game character
	if(isLeft && isFalling){
		// add your jumping-left code
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
        ellipse(gameChar_x - 4, 
                gameChar_y - 62,
                1,1); // right eyeball
        ellipse(gameChar_x + 2, 
                gameChar_y - 62,
                1,1); // left eyeball

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
             4,-10); //right hand

        fill(159, 238, 232);
        rect(gameChar_x - 13,
             gameChar_y - 44,
             27,17); //the chest

        fill(121, 95, 44);
        rect(gameChar_x - 13,
             gameChar_y - 27,
             27,7); //the waist

        rect(gameChar_x - 8, //left leg
             gameChar_y - 20,
             5,14); 
        rect(gameChar_x + 18, 
             gameChar_y - 13,
             -10,5);

        rect(gameChar_x + 5, //right leg
             gameChar_y - 20,
             5,12); 
        rect(gameChar_x - 8,
             gameChar_y - 6,
             10,5);

        fill(19,44,111);
        rect(gameChar_x + 2, //left sheo
             gameChar_y - 6,
             5,5); 
        rect(gameChar_x + 18, //right sheo
             gameChar_y - 13,
             5,5); 
	}
    
    else if(isRight && isFalling){
		// add your jumping-right code
        fill(255,220,177);
        ellipse(gameChar_x, //the face 
            gameChar_y - 59, 
            17,20); 
    
        fill(255);
        ellipse (gameChar_x - 3, //right eye
                 gameChar_y - 62,
                 5,5); 
        ellipse (gameChar_x + 3, //left eye
                 gameChar_y - 62,
                 5,5); 

        fill(0);
        ellipse(gameChar_x - 2, // right eyeball
                gameChar_y - 62,
                1,1); 
        ellipse(gameChar_x + 4, // left eyeball
                gameChar_y - 62,
                1,1); 

        fill(255); 
        ellipse(gameChar_x, 
                gameChar_y - 54,
                7,5); //mouth

        fill(255,220,177);
        rect(gameChar_x - 2, 
             gameChar_y - 49,
             5,5); //the neck

        rect(gameChar_x - 17, 
             gameChar_y - 41,
             4,-10); //left hand

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
             5,12); //left leg
        rect(gameChar_x - 6, gameChar_y - 13,-10,5);

        rect(gameChar_x + 5,
             gameChar_y - 20,
             5,14); //right leg
        rect(gameChar_x + 10, gameChar_y - 6,-10,5);

        fill(19,44,111);
        rect(gameChar_x - 21,
             gameChar_y -13,
             5,5); //left sheo
        rect(gameChar_x - 5,
             gameChar_y - 6,
             5,5); //right sheo
	}
	
    else if(isLeft){
		// add your walking left code
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
        ellipse(gameChar_x - 2, 
                gameChar_y - 62,
                1,1); // right eyball
        ellipse(gameChar_x + 4, 
                gameChar_y - 62,
                1,1); // left eyeball

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

        fill(159, 238, 232);
        rect(gameChar_x - 13,
             gameChar_y - 44,
             27,17); //the chest

        fill(121, 95, 44);
        rect(gameChar_x - 13,
             gameChar_y - 27,
             27,7); //the waist

        triangle(gameChar_x - 3,
                 gameChar_y - 20,
                 gameChar_x - 5, 
                 gameChar_y - 5, 
                 gameChar_x - 15, 
                 gameChar_y - 5); //left leg

        triangle(gameChar_x + 11,
                 gameChar_y - 20,
                 gameChar_x + 10,
                 gameChar_y - 5,
                 gameChar_x,
                 gameChar_y - 5); //right leg


        fill(19,44,111);
        rect(gameChar_x - 15,
             gameChar_y - 5,
             10,5); //left sheo
        rect(gameChar_x,
             gameChar_y - 5,
             10,5); // right sheo
	}
	
    else if(isRight){
		// add your walking right code
        fill(255,220,177);
        ellipse(gameChar_x, //the face
                gameChar_y - 59, 
                17,20); 

        fill(255);
        ellipse (gameChar_x - 3, //right eye
                 gameChar_y - 62,
                 5,5); 
        ellipse (gameChar_x + 3, //left eye
                 gameChar_y - 62,
                 5,5); 
        fill(0);
        ellipse(gameChar_x - 4, //right eyball
                gameChar_y - 62,
                1,1); 
        ellipse(gameChar_x + 2, //left eyeball
                gameChar_y - 62,
                1,1); 

        fill(255); 
        ellipse(gameChar_x, //mouth
                gameChar_y - 54,
                7,5); 

        fill(255,220,177);
        rect(gameChar_x - 2, //the neck
             gameChar_y - 49,
             5,5); 

        rect(gameChar_x - 17, //left hand
             gameChar_y - 41,
             4,10); 

        fill(159, 238, 232); //the chest
        rect(gameChar_x - 13,
             gameChar_y - 44,
             27,17); 

        fill(121, 95, 44); //the waist
        rect(gameChar_x - 13,
             gameChar_y - 27,
             27,7); 

        triangle(gameChar_x + 18, //right leg
                 gameChar_y - 5,
                 gameChar_x + 8, 
                 gameChar_y - 5,
                 gameChar_x + 4,
                 gameChar_y - 20); 

        triangle(gameChar_x - 11, //left leg
                 gameChar_y - 20,
                 gameChar_x - 10, 
                 gameChar_y - 5,
                 gameChar_x,
                 gameChar_y - 5); 


        fill(19,44,111);
        rect(gameChar_x - 10, //left sheo
             gameChar_y - 5,
             10,5); 
        rect(gameChar_x + 8, // right sheo
             gameChar_y - 5,
             10,5);  
	}
	
    else if(isFalling || isPlummeting){
		// add your jumping facing forwards code
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
             4,-10); //right hand
        rect(gameChar_x - 17, 
             gameChar_y - 41,
             4,-10); //left hand

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
             5,10); //right leg


        fill(19,44,111);
        rect(gameChar_x - 8,
             gameChar_y - 5,
             5,5);
        rect(gameChar_x + 5,
             gameChar_y - 10,
             5,5);
	}
	
    else{
		// add your standing front facing code
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
             gameChar_y - 5,5,5);
        rect(gameChar_x + 5,
             gameChar_y - 5,
             5,5);


	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    
    if (isLeft == true) // Walking to the left 
    {
        gameChar_x -= 5;
    }
    
    if (isRight == true) // Walking to the rigt
    {
        gameChar_x += 5;
    }
    
    if (gameChar_y < floorPos_y)
    {
        gameChar_y += 2;
        isFalling = true;
    }
    
    else
    {
        gameChar_y = floorPos_y;
        isFalling = false 
    }
    
}


function keyPressed()
{

	//open up the console to see how these work
    //console.log("keyPressed: " + key);
    //console.log("keyPressed: " + keyCode);
    
    if (keyCode == 65)
    {
        isLeft = true;
    }
    
    if (keyCode == 68)
    {
        isRight = true;
    }
    
    if (keyCode == 87 && gameChar_y == 432)
    {
        gameChar_y -= 175;
    }
    
    if (keyCode == 32)
    {
        gameChar_y = floorPos_y;
    }
    
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

    //console.log("keyReleased: " + key);
    //console.log("keyReleased: " + keyCode);
    
    if (keyCode == 65);
    {
        isLeft = false;
    }
    
    if (keyCode == 68);
    {
        isRight = false;
    }
}
