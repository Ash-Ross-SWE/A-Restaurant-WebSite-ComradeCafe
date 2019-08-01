//alert("hola");
// ###########################################
// ######## CODE FOR EXTERNAL WEB ############
// ###########################################
// function onLoadProcess(){
// 	alert("hola");
// 	$("#siteloader").html('<object id="new-page" data="http://emol.com/"></object>');
// 	$("#new-page").css("width","1080px")
// 	$("#new-page").css("height","1600");
// }
// window.onload = onLoadProcess;


//we define this herarchy for the page. if it changes, we just have to change this 2 arrays
var mainSections = ["Products/Services","Location","Site Map","Contest","About Us"];
var secSections = [["Menu", "Specials", "Gift Cards","Events/Booking"],[]
	,[] ,[] ,["Contact Us", "Careers"]];
var mainSectionsLinks = ["Products/Services","location.html","site-map.html","contest.html","aboutus.html"];
var secSectionsLinks = [["menu.html", "specials.html", "giftcard.html","events.html"],[]
	,[] ,[] ,["contact.html", "careers.html"]];

var canvas;
window.onload = function(){
	// $("#header").load("header.html");
	//var link = document.querySelector('link[rel="import"]');
	//body.appendChild(link.import); 
	canvas = document.getElementById("map-layout");
	canvas.width = 800;
	canvas.height = 500;
	drawLayout();
	$("#preview").hide();
}



//////////////////////////////////////////////////////////////////
// function that draws the site map with the given arrays.
//////////////////////////////////////////////////////////////////

function drawLayout(){

	var canvasWidth = canvas.width;
	var boxWidth = 125;
	var canvasHeight = canvas.height;
	var boxHeigth = 40;
	var margin = 30;

//First we draw the home. only 1 block in that row.
	draw((canvasWidth-boxWidth)/2,margin,boxWidth,boxHeigth,"Home","index.html");


//now we define some properties of the main sections
//
	var hmargin = (canvasWidth-boxWidth*mainSections.length)/
		(mainSections.length+1);

//now we draw de main sections
	for(var i = 0; i< mainSections.length; i++)
	{
		draw(i*(hmargin)-boxWidth+hmargin,margin*2+boxHeigth,
			boxWidth,boxHeigth,mainSections[i],mainSectionsLinks[i]);
	}

//finaly we do the same thing for the secondary sections
	for(var i = 0; i < mainSections.length;i++)
	{
		for(var j = 0; j < secSections[i].length;j++)
		{
			draw(i*(hmargin)-boxWidth*j+hmargin,
				margin*(3 + j)+boxHeigth*(j+1)/2,
				boxWidth,boxHeigth,secSections[i][j],secSectionsLinks[i][j]);
		}
	}
}

//////////////////////////////////////////////////////////////////
// function that draws a div with the given coordinates, size and text inside.
//////////////////////////////////////////////////////////////////
function draw(x,y,a,b,text,link){
//We draw the rectangle with the data given	
	// var ctx = canvas.getContext("2d");
	// console.log(a);
	// console.log(canvas.width);
	// ctx.rect(x,y,a,b);
	// ctx.fillStyle="#555";
	// ctx.fill();
	// ctx.font = "16px Arial";
	// ctx.fillStyle="#FFF";
	// ctx.fillText(text,10,50);
	var newBox = document.createElement("div");
	newBox.className += "sitediv";
	// newBox.style.background = "#777";
	newBox.style.width = a + "px";
	newBox.style.height = b + "px";
	// newBox.style.position = "relative";
	newBox.style.top = y+"px";
	newBox.style.left = Math.floor(x)+"px";
	// newBox.style.display = "inline-block";
	// newBox.style.color = "white";
	newBox.innerHTML = text;
	// newBox.style.textAlign = "center";
	// newBox.style.verticalAlign = "middle";
	newBox.style.lineHeight = b + "px";
	console.log(text+":"+link);
	newBox.addEventListener("click", function(){onSiteDivMouseOver(link,text)});
//	newBox.addEventListener("mouseout", onSiteDivMouseOut(link));
	canvas.appendChild(newBox);
}

function onSiteDivMouseOver (link,text){
	var scale = .4;
	$("#preview").empty();
	$("#preview").slideDown("1000");
	$("#map-layout").slideUp("1000");
    //document.getElementById("preview").innerHTML = "";
    $("#previewh2").html("Preview of " + text);
	var ifrm = document.createElement("iframe");
	ifrm.id = "ifrm-site";
	document.getElementById("preview").appendChild(ifrm);
    ifrm.style.webkitTransform = "Scale("+ scale +")";
    ifrm.style.transformOrigin = "0 0";
	//the next line, we have to change the secon argument for the actual link received. 
	ifrm.setAttribute("src", 	link);
	ifrm.style.width = ( 1 / scale * 100) + "%";
    ifrm.style.height = ( 1 / scale * 100) + "%";
    ifrm.style.margin = "0 auto";
    ifrm.style.outline = "1px solid transparent";
    //$("#ifrm-site").hide();
    //$("#ifrm-site").slideToggle(10000);
	var div = document.createElement("div");
	div.id = "overlay";
	div.className ="overlaydiv";
	div.addEventListener('click',function(){clickpreview(link)});
	document.getElementById("preview").appendChild(div);
	


	// var prev = document.createElement("object");
	// prev.id = "new-page"
	// prev.style.width = "300px";
	// prev.style.height = "400px";
	// prev.data = "site-map.html";
	// prev.style.margin = "0 auto";
	// prev.style.display = "block";
	// document.getElementById("preview").innerHTML = "";// '<object id="new-page" data="contest.html"></object>';
	// document.getElementById("preview").appendChild(prev);
	// var newpage = document.getElementById("preview").children[0];
	// console.log(newpage);
	//$("#siteloader").html('<object id="new-page" data="http://emol.com/"></object>');
	//$("#new-page").css("width","1080px")
	//$("#new-page").css("height","1600");	
}
function sitemapclick(){
	$("#map-layout").slideToggle(1000);
}
function previewtitleclick(){
	$("#preview").slideToggle(1000);
}
function clickpreview(link){
	window.location.href = link;
}