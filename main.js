
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas')

//Set initial positions for ball and hole images.
ball_x=0;
ball_y=0;

hole_y=400;
hole_x=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png", function(Img)
    {
   holobj= Img;
    
    holobj.scaleToHeight(50);
    holobj.scaleToWidth(50);
    
   holobj.set({
            top:hole_y,
            left:hole_x
        });
    canvas.add(holobj);
    })
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img)
    {
   ballobj= Img;
    
    ballobj.scaleToHeight(50);
   ballobj.scaleToWidth(50);
    
   ballobj.set({
            top:ball_y,
            left:ball_x
        });
    canvas.add(ballobj);
    })// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ballobj);
		document.getElementById("hd3").innerHTML="YOU HAVE HIT THE GOAL";
		document.getElementById("myCanvas").style.borderColor="red";

	}
	
	else{
		

		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function down()
	{
		if(ball_y <=450){
			ball_y = ball_y + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("down arrow key is pressed, X = " + ball_x + ",Y = " + ball_y);
			canvas.remove(ballobj),
			new_image();
			
		}		// Write a code to move ball upward.
	}

	function up()
	{
		if(ball_y >=5){
			ball_y = ball_y  -  block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("down arrow key is pressed, X = " + ball_x + ",Y = " + ball_y);
			canvas.remove(ballobj),
			new_image();
		}		// Write a code to move ball upward. // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("left arrow key is pressed, X = " + ball_x + ",Y = " + ball_y);
			canvas.remove(ballobj),
			new_image();
		}		
	}


	function right()
	{
		if(ball_x <=1050)
		{
			
			ball_x = ball_x + block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("down arrow key is pressed, X = " + ball_x + ",Y = " + ball_y);
			canvas.remove(ballobj),
			new_image();
		}		
	}
	
	
}

