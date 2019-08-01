
$(document).ready(function(){  

//INITAL POSITION

	$("#div_ms").hide();
	$("#div_merch").hide();
	$("#div_history").hide();

//BUTTONS

	$("#btn_ms").click(function() {
	$("#div_ms").show(300);
	$("#div_merch").hide(300);
	$("#div_history").hide(300);
	})

	$("#btn_merch").click(function() {
	$("#div_merch").show(300);
	$("#div_ms").hide(300);
	$("#div_history").hide(300);
	})

	$("#btn_history").click(function() {
	$("#div_merch").hide(300);
	$("#div_ms").hide(300);
	$("#div_history").show(300);
	})

}); // END OF document.ready