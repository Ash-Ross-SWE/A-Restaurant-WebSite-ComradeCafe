$(document).ready(function(){
	setTimeout(animateText,500,"welcome_message","Welcome Dear Comrade!", 2.5);
	setTimeout(show_header,3500);
});

	
	//setTimeout(blurDivs, 1000);




function show_header(){
	$("#header").slideToggle(1000);
	
	setTimeout(changezindex,1000);
}


function animateText(label_name, text, timer){
	//setTimeout(alert("4 seconds"),4000);
	t = 0;
	text = text;
	var milisecondPerFrame = Math.ceil(timer * 1000 / text.length);
	console.log(milisecondPerFrame);
	for (var i = 0; i < text.length; i++) 
	{
		//console.log(text.substring(0,i+1));
		//$("#"+label_name).html(text.substring(0,i+1));
		setTimeout(textFrame, i*milisecondPerFrame, text.substring(0, i + 1));
	}

};

var t;
var textToLabel;
//function animate
function textFrame(text)
{
	$("#welcome_message").html(text);
};

function changezindex(){
	$("#header").css("overflow","");
}