/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and point to draw the scenery as set out in the code comments. The items should appear next to the text titles.

Each bit of scenery is worth three marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = You've used lots of shape functions to create the scenery
3 marks = You went a bit further with your graphics

I've given titles and chosen some base colours, but feel free to imaginatively modify these and interpret the scenery titles loosely to match your game theme.

When you have completed your game scenery upload here as a zip file.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
    fill(255);
    stroke(255)
    rect(140,80,100,70);
	ellipse(130,116,70,70);
    ellipse(180,80,80,80);
    ellipse(230,70,80,80);
    ellipse(250,111,80,80);

	noStroke();
	fill(0,0,0);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	fill(151,124,83);
    triangle(500,100,350,433,700,433);
    triangle(400,200,250,433,600,433);
    triangle(640,250,550,433,725,433);

	noStroke();
	fill(255);
	text("mountain", 500, 256);

	//3. a tree
    fill(66,105,47);
    ellipse(810,310,150,150); //BIGGEST ONE
    ellipse(750,330,100,100); //1st one
    ellipse(770,250,100,100); //2nd one
    ellipse(820,200,100,100); //3rd one
    ellipse(840,250,100,100); //4th one
    ellipse(870,320,100,100); //5th one
     
    
    fill(102,51,0);
	triangle(810,225,785,433,835,433);
    triangle(815,370,815,335,880,300);
    triangle(810,300,810,335,740,250);


	noStroke();
	fill(255);
	text("tree", 800, 346);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	fill(100, 155, 255);
    rect(100,432,20,50);
    rect(100,480,50,20);
    rect(130,480,50,20);
    rect(180,480,20,50);
    rect(200,510,50,20);
    rect(250,510,50,20);
    rect(300,510,20,50);
    rect(300,530,20,50);

	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
    fill(255,223,0);
    ellipse(400,400,50,50);
    fill(255,200,0);
    ellipse(400,400,40,40);
    fill(255,223,0);
    ellipse(375,375,50,50);
    fill(255,200,0);
    ellipse(375,375,40,40);
    fill(255,223,0);
    ellipse(355,400,50,50);
    fill(255,200,0);
    ellipse(355,400,40,40);
    

	noStroke();
	fill(255);
	text("collectable item", 400, 400);
}
