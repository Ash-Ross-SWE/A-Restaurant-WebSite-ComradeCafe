
//Load on doc startup.
$(document).ready(function () {
   
   //Setup a hover listener over the hoverli class. Make it so it finds the menu inside whats hovered on and opens it.
	$(".hoverli").hover(function () {
     $(this).find('ul').slideToggle('medium');
    });
	
	//Click listener for the line cook menu option. Shows part of the page that has terms of work description in it. Writes job info to DOM.
	$("#linecook").click(function() {
		
		$("#careersdisplay").show();
		$("#h2requirements").show();
		$("#h2compensation").show();
		$("#requirements").show();
		$("#compenation").show();
		$("#title2").html("Line Cook");
		$("#requirements").html("<p>Must be comfortable, clean and effective in a fast paced environment</p><p>Minimum 1 year experience as a line cook.</p><p>Completed Safecheck Food Safety Course Certification</p>");
		$("#compensation").html("$14/hour, negotiable. Basic medical and dental benefits package.");
	});
	
	//Same as above function, but for chef.
	$("#chef").click(function() {
		
		$("#careersdisplay").show();
		$("#h2requirements").show();
		$("#h2compensation").show();
		$("#requirements").show();
		$("#compenation").show();
		$("#title2").html("Chef");
		$("#requirements").html("<p>Soviet background preferred, or at least must have mastered the fundamentals of Soviet cooking.</p><p>Minimum 5 years experience as a chef.</p><p>Completed Safecheck Food Safety Course Certification</p>");
		$("#compensation").html("19$/hour, negotiable. Basic medical and dental benefits package.");
	});
	
	//Same as above function, but for server.
	$("#server").click(function() {
		
		$("#careersdisplay").show();
		$("#h2requirements").show();
		$("#h2compensation").show();
		$("#requirements").show();
		$("#compenation").show();
		$("#title2").html("Server");
		$("#requirements").html("<p>Must be a fast team player with excellent customer service skills.</p><p>Minimum 1 year of experience as a server.</p><p>Smart Serve Certified.</p>");
		$("#compensation").html("9$/hour plus gratuities. Basic medical and dental benefits package.");
	});
	
	//Same as above function, but for manager.
	$("#manager").click(function() {
		
		$("#careersdisplay").show();
		$("#h2requirements").show();
		$("#h2compensation").show();
		$("#requirements").show();
		$("#compenation").show();
		$("#title2").html("Manager");
		$("#requirements").html("<p>Must be a natural leader with a passion for Soviet style organization..</p><p>Minimum 5 years of restaurant experience.</p><p>Smart Serve Certified</p>");
		$("#compensation").html("22$/hour. Full medical and dental benefits package.");
	});
		//Same as above function, except for it says they're not hiring for this position.
		$(".redd").click(function() {
		
		$("#careersdisplay").show();
		$("#h2requirements").hide();
		$("#h2compensation").hide();
		$("#requirements").hide();
		$("#compensation").show();

		$("#compensation").html("<h2>We are not currently hiring for this position.</h2>");
	});
	
});

