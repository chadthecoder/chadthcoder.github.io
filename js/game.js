var gameWidth;
var gameHeight;
var bestTime = 100;
const shapeId = document.getElementById("shape");
const gameId = document.getElementById("game");
var shapeNumber = Math.random();

function changeShape()
	{
		gameWidth = gameId.clientWidth;
		gameHeight = gameId.clientHeight;
		
  shapeNumber = Math.random();

		if(shapeNumber < 0.5) // circle
		{
			shapeId.style.borderRadius = "50%";
			var size = Math.floor(Math.random() * 400) + 10+"px";
			shapeId.style.width = size;
			shapeId.style.height = size;
		}
		else if(shapeNumber >= 0.5)// && shapeNumber < 0.7) //square ish
		{
			shapeId.style.borderRadius = "0%";
			shapeId.style.width = Math.floor(Math.random() * 400) + 10+"px";
		 shapeId.style.height = Math.floor(Math.random() * 400) + 10+"px";
		}
		//else //triangle not done
		{
			//shape.style.width = 0;
   //shape.style.height = 0;
   //border: 150px solid transparent;
   //border-top: 0;
   //border-bottom: 300px solid red;
		}
	
	 shapeId.style.marginTop = Math.floor(Math.random() * gameHeight)+"px"; // - document.getElementById("shape").style.height+"px";
		shapeId.style.marginLeft = Math.floor(Math.random() * gameWidth)+"px";

		var color = "#"+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
		if(color == "#FFFFFF")
		{
			color = "#0000FF";
		}	
		shapeId.style.backgroundColor = color;

	shapeId.style.display = "block";
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

	shapeId.style.display = "none";

	document.getElementById("time").innerHTML = "The time taken was: " + time + "s";
	document.getElementById("best").innerHTML = "The best time so far was: " + bestTime + "s";

	appearDelay();
}

function open()
{
   window.open("http://www.mcadamschad.com/php/session.php/");
}
