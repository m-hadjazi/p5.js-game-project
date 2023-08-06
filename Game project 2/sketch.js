/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. If you're character takes more than 5 lines
of code to draw then you've probably over done it.

** Only submit your sketch.js **

*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
}

function draw()
{
	background(255);

    
	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 135;
    
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


	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 132;
    
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
    
    rect(237,
         112,
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


	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	
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



	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	
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
    rect(253, // right sheo
         gameChar_y - 5,
         10,5); 



	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
    
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
    

	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	
    
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
