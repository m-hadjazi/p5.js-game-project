/*

The Game Project

3 - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = 150; 
	treePos_y = 287; 
    
    canyon = {x_pos: -50, width: 100}
    
    collectable = {x_pos: 240, y_pos: 240, size: 50};
    
    mountain = {x_Pos: 270, y_Pos: 299, size: 0.5};
    cloud = {x_Pos: 50 , y_Pos: 40, scale: 1.0};
    
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

//    fill(0);
//    rect(0,0,100,100);
//    fill(255);
//    text(mouseX + "," + mouseY, 50, 50);
    
    noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground

    //mountain in the distance
    fill(151,124,83);
    triangle(mountain.x_Pos, 
             mountain.y_Pos - 200 * mountain.size,
             
             mountain.x_Pos - 150, 
             floorPos_y,
             
             mountain.x_Pos + 200, 
             floorPos_y);
    
    triangle(mountain.x_Pos - 100,
             mountain.y_Pos - 100 * mountain.size,
             
             mountain.x_Pos - 250, 
             floorPos_y,
             
             mountain.x_Pos + 100, 
             floorPos_y);
    
    triangle(mountain.x_Pos + 140,
             mountain.y_Pos - 50 * mountain.size,
             
             mountain.x_Pos + 50, 
             floorPos_y,
             
             mountain.x_Pos + 225, 
             floorPos_y);
    
    //tree
    //Leaves
    fill(66,105,47);
    ellipse(treePos_x + 298, floorPos_y - 123,150,150); //BIGGEST ONE
    ellipse(treePos_x + 238, floorPos_y - 103,100,100); //1st one
    ellipse(treePos_x + 258, floorPos_y - 183,100,100); //2nd one
    ellipse(treePos_x + 308, floorPos_y - 233,100,100); //3rd one
    ellipse(treePos_x + 328, floorPos_y - 183,100,100); //4th one
    ellipse(treePos_x + 358, floorPos_y - 113,100,100); //5th one
    
    //Trunk and branch 
    fill(102,51,0);
	triangle(treePos_x + 298, floorPos_y - 208, //224
             treePos_x + 273, floorPos_y, //432
             treePos_x + 323, floorPos_y); //432
    
    triangle(treePos_x + 303, floorPos_y - 63, //369
             treePos_x + 303, floorPos_y - 98, //334
             treePos_x + 368, floorPos_y - 133); //299
    
    triangle(treePos_x + 298, floorPos_y - 133, //299
             treePos_x + 298, floorPos_y - 98, //334
             treePos_x + 228, floorPos_y - 183); //249
    
    //canyon
    fill(100, 155, 255);
    rect(canyon.x_pos + 100, 432, 
         canyon.width/5, 
         50);
    rect(canyon.x_pos + 100, 480, 50, 
         canyon.width/5);
    rect(canyon.x_pos + 130, 480, 50, 
         canyon.width/5);
    rect(canyon.x_pos + 180, 480, 
         canyon.width/5, 50);
    rect(canyon.x_pos + 200, 510, 50, 
         canyon.width/5);
    rect(canyon.x_pos + 250, 510, 50, 
         canyon.width/5);
    rect(canyon.x_pos + 300, 510, 
         canyon.width/5, 50);
    rect(canyon.x_pos + 300, 530, 
         canyon.width/5, 50);
    
    //cloud in the sky
    fill(255);
    stroke(255);
    rect(cloud.x_Pos + 30 * cloud.scale,
         cloud.y_Pos + 30 * cloud.scale,
         100 * cloud.scale, 
         70 * cloud.scale);
	ellipse(cloud.x_Pos + 20 * cloud.scale, 
            cloud.y_Pos + 66 * cloud.scale,
            70 * cloud.scale, 
            70 * cloud.scale);
    ellipse(cloud.x_Pos + 70 * cloud.scale, 
            cloud.y_Pos + 30 * cloud.scale,
            80 * cloud.scale, 
            80 * cloud.scale);
    ellipse(cloud.x_Pos + 120 * cloud.scale, 
            cloud.y_Pos + 20 * cloud.scale,
            80 * cloud.scale, 
            80 * cloud.scale);
    ellipse(cloud.x_Pos + 140 * cloud.scale, 
            cloud.y_Pos + 61 * cloud.scale,
            80 * cloud.scale, 
            80 * cloud.scale);
    
    noStroke()
    
    //5. a collectable token - eg. a jewel, fruit, coins
    fill(255,223,0);
    ellipse(collectable.x_pos + 300, 
            collectable.y_pos + 300, 
            collectable.size, collectable.size);
    fill(255,200,0);
    ellipse(collectable.x_pos + 300, 
            collectable.y_pos + 300, 
            collectable.size - 10, collectable.size - 10);
    fill(255,223,0);
    ellipse(collectable.x_pos + 275, 
            collectable.y_pos + 275, 
            collectable.size, collectable.size);
    fill(255,200,0);
    ellipse(collectable.x_pos + 275, 
            collectable.y_pos + 275, 
            collectable.size - 10, collectable.size - 10);
    fill(255,223,0);
    ellipse(collectable.x_pos + 255,
            collectable.y_pos + 300, 
            collectable.size, collectable.size);
    fill(255,200,0);
    ellipse(collectable.x_pos + 255,
            collectable.y_pos + 300,
            collectable.size - 10, collectable.size - 10);
    
    //Game character 
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

function mousePressed()
{
    gameChar_x = mouseX;
    gameChar_y = mouseY;
}
