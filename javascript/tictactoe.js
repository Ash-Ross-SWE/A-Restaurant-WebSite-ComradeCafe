class Tictactoe{


	constructor(hard)
	{
		this.hard = hard;
	}

///////////////////////////////////////
// start the board and UI again and calls for first 
// AI play if AI starts.
//////////////////////////////////////

	load(pcstart){
		//show a welcome message
		$("#messages").css("color", "#594A42");
		animateText("messages", "Welcome dear comrade!",2);

		//create all the divs for the board
		this.boardfield = [[0,0,0],[0,0,0],[0,0,0]];
		console.log(this.boardfield);
		console.log("start load");
		drawInicialField();
		this.pos = 0;

		//if the AI starts, we ask the game to play its next move
		this.pcstart = pcstart;
		if(pcstart)
		{
			this.play();
			//setTimeout(play,2);
		}
		
		$("#btn_pagain").removeAttr('disabled');
		$("#btn_bmenu").removeAttr('disabled');
	}

///////////////////////////////////////
// first checks if we can keep playing (is there a winner or a draw)
// we play if we can.
//////////////////////////////////////

	play(){
		//first we check if there is a winner.
		var winner = this.checkwinner(this.boardfield);
		if(winner)
		{
			//do whatever is necessary for when there is a winner
			console.log("winner:yes");
			this.updateAfterWinner(winner);
			return;
		}
		console.log("winner:no");
		
		//then we check if there is a draw (no winner, full board)
		var fullboard = this.isboardfull();
		if(fullboard)
		{
			//do whatever is necessary for a draw game.
			console.log("board:full");
			return;
		}
		console.log("board:notfull");


		//keep playing if there is no winner and there are free spaces.
		this.nextPlay();
	}
	
	userplay(move){
		//check if the play is available
		//if is not available, give a message
		console.log(this.boardfield);
		console.log(move);
		var xy = this.stringToIntArray(move);
		// var x = parseInt(move.substring(0,1));
		// var y = parseInt(move.substring(1,2));
		console.log(this.boardfield[xy[0]][xy[1]]);
		if(this.boardfield[xy[0]][xy[1]]!=0)
		{
			//give him a wrong message.
			console.log("wrong play");
			return;
		}

		//console.log(this.boardfield);
		//if it's available, make the play (dom and boardfield) 
		console.log("correct play");
		updateField(2,move,this.pcstart);
		//blockDivClicks();
		//setTimeout(updateField,2000,2,move,this.pcstart);
		// $("#" + move).css("background","red");
		this.boardfield[xy[0]][xy[1] ]= 2;
		this.play();
	}
	
	//check if there is a winner. returns 1 for pc, 2 for user and 0 there is no winner.
	checkwinner(boardtemp){

		var possibleswins = ["0020","0002","0022","0121","0220","0222","1012","2022"]; 
		for(var i = 0; i < possibleswins.length; i++)
		{
			if(this.checkline(1,possibleswins[i], boardtemp))
			{
				console.log(possibleswins[i]);
				console.log(boardtemp);
				this.winningPlay = possibleswins[i];
				return 1;
			}
			else if(this.checkline(2,possibleswins[i],boardtemp))
			{

				console.log(possibleswins[i]);
				console.log(boardtemp);
				this.winningPlay = possibleswins[i];
				return 2
			}
		}
		return 0;
	}

	//checks if the input player has won on the line given.
	//receives a player, line to check and board to check in.
	checkline(player,line,boardtemp){
		var xy1 = this.stringToIntArray(line.substring(0,2));
		// var x1 = parseInt(line.substring(0,1));
		// var y1 = parseInt(line.substring(1,2));
		var xy3 = this.stringToIntArray(line.substring(2,4));
		// var x3 = parseInt(line.substring(2,3));
		// var y3 = parseInt(line.substring(3,4));
		var xy2 = [parseInt(xy1[0]+(xy3[0]-xy1[0])/2),parseInt(xy1[1]+(xy3[1]-xy1[1])/2)];
		// var x2 = parseInt(x1+(x3-x1)/2);
		// var y2 = parseInt(y1+(y3-y1)/2);


		// console.log(x3);
		var boola = boardtemp[xy1[0]][xy1[1]] == player &&
				boardtemp[xy2[0]][xy2[1]] == player &&
				boardtemp[xy3[0]][xy3[1]] == player;

		return boola;
		
	}

	//returns a bull depending if the current board is full
	isboardfull(){
		return (!this.boardfield[0].includes(0)) &&
			(!this.boardfield[1].includes(0)) &&
			(!this.boardfield[2].includes(0));
	}

	//decide which is the next play, draw it and update the board
	nextPlay(){
		//console.log(this.boardfield);
		//alert("");
		var pos = this.decideNextPlay();			
		var xy = this.stringToIntArray(pos);

		this.boardfield[xy[0]][xy[1]]=1;
		//updateField(1,pos,this.pcstart);
		blockDivClicks();
		setTimeout(updateField,3000,1,pos,this.pcstart);

		var winner = this.checkwinner(this.boardfield);
		if(winner)
		{
			//do whatever is necessary for when there is a winner
			console.log("winner:yes");
			this.updateAfterWinner(winner);
			return;
		}

		// $("#"+ pos).css("background","blue");
		//this.boardfield[parseInt(pos.substring(0,1))][parseInt(pos.substring(1,1))];
		//$("#"+pos).html(1);
	}

	//returns an array with every remainding possible play
	possiblePlaysArray(){
		var pos = [];
		for(var i = 0 ; i < 3; i++)
		{
			for(var j = 0 ; j < 3; j++)
			{
				if(this.boardfield[i][j] == 0)
					pos.push(i + "" + j);
			}
		}
		return pos;
	}

	//returns which is the next play the AI should play
	decideNextPlay(){
		var possibleplays = this.possiblePlaysArray();
		var pos = this.checkNextWin(possibleplays,1);
		console.log(this.pos);
		if(!this.pcstart && this.pos== 0)
		{
			this.pos=1;
			console.log("only first time");
			if(this.boardfield[0][0]==2)
			{return "22";}
			else if(this.boardfield[0][2]==2)
			{return "20";}
			else if(this.boardfield[2][0]==2)
			{return "02";}
			else if(this.boardfield[2][2]==2)
			{return "00";}

		}
		if(pos != -1)
			return pos;
		pos = this.checkNextWin(possibleplays,2)
		if(pos != -1)
			return pos;
		return this.checkNextNormal(possibleplays);
	}
	//returns the position if the user indicated wins. if there is none, return -1.
	checkNextWin(possArray,user){
		for(var i = 0; i < possArray.length; i++)
		{
			//console.log("check if user "+ user+ "wins with "+ possArray[i]);

			var tempboard = [[,,],[,,],[,,]];
			for(var j = 0; j < 3; j++)
			{
				for(var k = 0; k < 3; k++)
				{
					tempboard[j][k] = this.boardfield[j][k];
				}
			}

			var xy = this.stringToIntArray(possArray[i]);
			
			// if(this.boardfield[1][0]==1&&this.boardfield[1][1]==1&&user==2)
			// {
			// 	console.log("error"+xy[0]+xy[1]);
			// 	console.log(possArray);
			// }
			tempboard[xy[0]][xy[1]] = user;
			// console.log(this.checkwinner(tempboard));
			if(this.checkwinner(tempboard)!=0)
			{
				return possArray[i];
			}
		}
		return -1;
	}

	//returns the best position to play, doing center, corners and sides.
	checkNextNormal(possArray){
		var prefsmovs = ["11","00","02","20","22","01","10","12","21"];
		if(this.hard)
		{
			for(var i = 0; i < prefsmovs.length; i++)
			{
				var xy = this.stringToIntArray(prefsmovs[i]);
				if(this.boardfield[xy[0]][xy[1]]==0)
					return prefsmovs[i];
			}
		}
		else
		{
			while(true)
			{
				var pos = prefsmovs[Math.floor(Math.random()*prefsmovs.length)];
				var xy = this.stringToIntArray(pos);
				if(this.boardfield[xy[0]][xy[1]]==0)
					return pos;
			}
		}
	}

	stringToIntArray(pos){
		return [parseInt(pos.substring(0,1)),parseInt(pos.substring(1,2))];
	}

	updateAfterWinner(user)	{
		blockDivClicks();
		//drawResult(user,this.winningPlay);
		setTimeout(drawResult,4000,user,this.winningPlay);
	}

////////////////////////////////////////////////////
//drawing methids
//////////////////////////////////////////////////
}

function blockDivClicks(){
	for(var i = 0; i < 3; i++)
		for(var j = 0; j < 3; j++)
			$('#' + i + j).prop('onclick',null).off('click');
}

function unblockDiv(){
	for(var i = 0; i < 3; i++)
		for(var j = 0; j < 3; j++)
			$('#' + i + j).click(userPlay);
}

function drawInicialField(){
	for(var i = 0; i < 3; i++)
	{
		for(var j = 0; j < 3; j++)
		{
			var newfield = $("<div id='"+i+j+"'></div>");
			//$("btn_hard")
			$("#game").append(newfield);
			$("#"+i+j).addClass("tttfield");
			$("#"+i+j).click(userPlay);
			

			// add borders deppending on possitions
			//console.log(i +"" + j);
			if( j == 0 )
			{
				$("#" + i + j ).addClass("rightborder");
				//console.log("i = 0");
			}
			else if( j == 2 )
			{
				$("#" + i + j ).addClass("leftborder");
				//console.log("i = 2");
			}
			if( i == 2 )
			{
				$("#" + i + j ).addClass("topborder");
				//console.log("j = 0");
			}
			else if( i == 0 )
			{
				$("#" + i + j ).addClass("bottomborder");
				//console.log("j = 2");
			}
		}
	}
	console.log("finish drawing");
}
//draws the image we want (by user int) on the position we want (by pos string)



function updateField(user, pos, pcstart){	

	var images = [["\"images/contest/icon.png\"","icon"],["\"images/contest/clogo.png\"","clogo"]];
	// console.log(images);
	// console.log(images[0]);
	if(user == 1)
	{	
		var image;
		var class1;
		if(pcstart){
			image = images[0][0];
			class1 = images[0][1]
		}
		else{
			image = images[1][0];
			class1 = images[1][1];
		}
		$("#" + pos).css("background-image","url(" + image + ")");
		$("#" + pos).addClass(class1);
		// $("#" + pos).css("background","blue");
	}
	else 
	{
		var image;
		var class1;
		if(!pcstart){
			image = images[0][0];
			class1 = images[0][1]
		}
		else{
			image = images[1][0];
			class1 = images[1][1];
		}
		$("#" + pos).css("background-image","url(" + image + ")");
		$("#" + pos).addClass(class1);
		// $("#" + pos).css()
		// $("#" + pos).css("background","red");
		
	}
	unblockDiv();
	if(user == 1)
		animateText("messages","Your turn",1);
	else 
		animateText("messages","My turn now",1);
}
// draw UI depending on the user who won, 0 for draw, 1 for PC and 2 for user
function drawResult(user, winningLine){
	//hide label for messages;
	this.winner = user;
	$("#messages").css("color","#FCF9CE");	

	//start canvas
 	$("#game").append("<canvas id=\"drawing\"></canvas"); 	
 	$("#drawing").addClass("draws");
 	$("#drawing").attr("width","800px");
 	$("#drawing").attr("height","600px");

 	//draw winning line.
 	var ctx = document.getElementById("drawing").getContext('2d');
 	ctx.beginPath();
 	var xdiv6 = 800/6;
 	var ydiv6 = 600/6; 
 	var x = parseInt(winningLine.substring(1,2))*xdiv6*2 + xdiv6;
 	var y = parseInt(winningLine.substring(0,1))*ydiv6*2 + ydiv6;
 	var xy1 = {x,y};
 	x = parseInt(winningLine.substring(3,4))*xdiv6*2+xdiv6;
 	y = parseInt(winningLine.substring(2,3))*ydiv6*2+ydiv6;
 	var xy2 = {x,y};
 	ctx.lineWidth = 10;
 	ctx.strokeStyle = "#594A42"
 	ctx.moveTo(xy1['x'], xy1['y']);
 	ctx.lineTo(xy2['x'], xy2['y']);
 	//show a result message

 	ctx.stroke();
 	//go back to the main menu or show a new menu 
 	setTimeout(blurDivs, 1000,ctx);
}

function blurDivs(ctx)
{	

	for (var i = 0; i < 3 ; i++) 
		for (var j = 0; j < 3; j++)
			$("#" + i + j ).addClass("blur");	
	
	ctx.lineWidth = 1;
	ctx.font = '80px Rajdhani';
	ctx.fillStyle = '#AC2430'
	if(this.winner != 1)
	{
		ctx.fillText("You Win!",220,300);
	}
	else
		ctx.fillText("You Loose!",220,300);
	
}

function drawlogo(user,pos,start){

}
	

//we are going to keep loading characters to de label
//we are going to use the timer for it
//frames are going to be the amount of characters
//timer in seconds
function animateText(label_name, text, timer){
	//setTimeout(alert("4 seconds"),4000);
	t = 0;
	text = text;
	var milisecondPerFrame = Math.ceil(timer * 1000 / text.length);
	for (var i = 0; i < text.length; i++) 
	{
		$("#"+label_name).html(text.substring(0,i+1));
		setTimeout(textFrame, i*milisecondPerFrame, text.substring(0, i + 1));
	}

}

var t;
var textToLabel;
//function animate
function textFrame(text)
{
	$("#messages").html(text);
}
