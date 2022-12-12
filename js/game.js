var gameWidth;
var gameHeight;
var bestTime = 100;
const shape = document.getElementById("shape");
const game = document.getElementById("game");
var shapeNumber;

function changeShape()
	{
		gameWidth = game.clientWidth;
		gameHeight = game.clientHeight;
		
  shapeNumber = Math.random();

		if(shapeNumber < 0.3) // circle
		{
			shape.style.borderRadius = "50%";
			var size = Math.floor(Math.random() * 400) + 10+"px";
			shape.style.width = size;
			shape.style.height = size;
		}
		else if(shapeNumber >= 0.3)// && shapeNumber < 0.7) //square ish
		{
			shape.style.borderRadius = "0%";
			shape.style.width = Math.floor(Math.random() * 400) + 10+"px";
		 shape.style.height = Math.floor(Math.random() * 400) + 10+"px";
		}
		//else //triangle not done
		{
			//shape.style.width = 0;
   //shape.style.height = 0;
   //border: 150px solid transparent;
   //border-top: 0;
   //border-bottom: 300px solid red;
		}
	
	 shape.style.marginTop = Math.floor(Math.random() * gameHeight)+"px"; // - document.getElementById("shape").style.height+"px";
		shape.style.marginLeft = Math.floor(Math.random() * gameWidth)+"px";

		var color = "#"+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
		if(color == "#FFFFFF")
		{
			color = "#0000FF";
		}	
		shape.style.backgroundColor = color;

	shape.style.display = "block";
	start = new Date().getTime();
	}
	
	var start;
	var end;
	var time;

	//function hello()
	//{
		//changeShape();
		
	
		

		//do something
		//appearDelay();

		
	//}

	function appearDelay()
	{
	setTimeout(changeShape, Math.random()*2000);
	}
	appearDelay();
	
function goodbye()
{
	end = new Date().getTime();
	time = (end - start)/1000;
	if(time < bestTime) bestTime = time;

	shape.style.display = "none";

	document.getElementById("time").innerHTML = "The time taken was: " + time + "s";
	document.getElementById("best").innerHTML = "The best time so far was: " + bestTime + "s";

	appearDelay();
}

function open()
{
   window.open("http://www.mcadamschad.com/php/session.php/");
}
