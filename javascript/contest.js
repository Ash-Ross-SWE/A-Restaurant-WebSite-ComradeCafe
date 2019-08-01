$(document).ready(function(){
	loadOptions();
});

var gameInstance;
var hard = 1;
var player = 1;

function loadOptions(){
	drawMenu();
}


function loadTicTacToe(){
	$("#menu").remove();
	$("#game").html("");
	gameInstance = new Tictactoe(hard);
	gameInstance.load(player);
}

function userPlay(){
	gameInstance.userplay($(this).attr("id"));
}

function drawMenu(){
	//$("#game").append($("<input type=\"button\" value=\"easy\"></input>").click(loadTicTacToe).width("100px"));
	$("#game").empty();
	$("#game").append("<div id=\"menu\"></div>");
	// $("#menu").addClass(")
	$("#menu").append("<div id=\"level\"></div>");
	$("#level").append("<label>Level:</label>");
	$("#level").append($("<input id=\"btn_easy\" type=\"button\" value=\"easy\"></input>").click(easyTicTacToe));
	$("#level").append($("<input id=\"btn_hard\" type=\"button\" value=\"hard*\"></input>").click(hardTicTacToe));
	$("#menu").append("<div id=\"side\"></div>");
	$("#side").append("<label>Side:</label>");
	$("#side").append($("<input id=\"btn_all\" type=\"button\" value=\"marxism\"></input>").click(allTicTacToe));
	$("#side").append($("<input id=\"btn_comm\" type=\"button\" value=\"communism\"></input>").click(commTicTacToe));
	$("#menu").append($("<input id=\"btn_start\" type=\"button\" value=\"start\"></input>").click(loadTicTacToe));
	$("#btn_hard").addClass("pressed");
	$("#btn_comm").addClass("pressed");
	$("#btn_pagain").attr("disabled","true");
	$("#btn_bmenu").attr("disabled","true")
	$("#messages").css("color","#FCF9CE");
}



function hardTicTacToe(){
	hard=1;
	$("#btn_easy").removeClass("pressed");
	$("#btn_hard").addClass("pressed");
}
function easyTicTacToe(){
	hard=0;
	$("#btn_hard").removeClass("pressed");
	$("#btn_easy").addClass("pressed");
}
function allTicTacToe(){
	player=0;
	$("#btn_comm").removeClass("pressed");
	$("#btn_all").addClass("pressed");
}
function commTicTacToe(){
	player=1;
	$("#btn_all").removeClass("pressed");
	$("#btn_comm").addClass("pressed");
}