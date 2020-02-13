function changeShape()
	{
		document.getElementById("shape").style.marginTop = Math.floor(Math.random() * 400) + 10+"px";
		document.getElementById("shape").style.marginLeft = Math.floor(Math.random() * 400) + 10+"px";
		
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
		
		var color = "#"+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
		if(color == "#FFFFFF")
		{
			color = "#0000FF";
		}	
		document.getElementById("shape").style.backgroundColor = color;
	}
	
	var start;

	function hello()
	{
		changeShape();
		document.getElementById("shape").style.display = "block";
	
		start = new Date().getTime();

		//do something

		
	}

	function appearDelay()
	{
	setTimeout(hello, Math.random()*2000);
	}
	appearDelay();
	
function goodbye()
{
   document.getElementById("shape").style.display = "none";
   
	var end = new Date().getTime();
	var time = (end - start)/1000;
	document.getElementById("time").innerHTML = "The time taken was: " + time + "s";
	
	changeShape();
	
	appearDelay();
}

function open()
{
   window.open("http://www.mcadamschad.com/php/session.php/");
}