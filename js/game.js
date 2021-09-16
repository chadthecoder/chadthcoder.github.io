var gameWidth;
var gameHeight;
var bestTime = 1000;

function changeShape()
	{
		gameWidth = document.getElementById("game").clientWidth;
		gameHeight = document.getElementById("game").clientHeight;
		


		if(Math.random() > 0.5) //circle or nah?
		{
			document.getElementById("shape").style.borderRadius = "50%";
			var size = Math.floor(Math.random() * 400) + 10+"px";
			document.getElementById("shape").style.width = size;
			document.getElementById("shape").style.height = size;
		}
		else
		{
			document.getElementById("shape").style.borderRadius = "0%";
			document.getElementById("shape").style.width = Math.floor(Math.random() * 400) + 10+"px";
			document.getElementById("shape").style.height = Math.floor(Math.random() * 400) + 10+"px";
		}
	
		document.getElementById("shape").style.marginTop = Math.floor(Math.random() * gameHeight)+"px"; // - document.getElementById("shape").style.height+"px";
		document.getElementById("shape").style.marginLeft = Math.floor(Math.random() * gameWidth)+"px";

		var color = "#"+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
		if(color == "#FFFFFF")
		{
			color = "#0000FF";
		}	
		document.getElementById("shape").style.backgroundColor = color;

	document.getElementById("shape").style.display = "block";
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

	document.getElementById("shape").style.display = "none";

	document.getElementById("time").innerHTML = "The time taken was: " + time + "s";
	document.getElementById("best").innerHTML = "The best time so far was: " +  "s";

	appearDelay();
}

function open()
{
   window.open("http://www.mcadamschad.com/php/session.php/");
}
