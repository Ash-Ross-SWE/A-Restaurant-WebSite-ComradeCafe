//load on startup.
window.onload = function(){
	// get the current date, stuff it into variable, then get the day of the week in 0-6 format, stuff it into CurrentDay
	var currentDate = new Date();
	var currentDay = currentDate.getDay();
	

	//build an array that will contain our names for the day of the week
	var wday = new Array(7);
	wday[0] = "Sunday";
	wday[1] = "Monday";
	wday[2] = "Tuesday";
	wday[3] = "Wednesday";
	wday[4] = "Thursday";
	wday[5] = "Friday";
	wday[6] = "Saturday";

	//build an array that will contain each day's corresponding special text
	var onSpecial = new Array(7);
	onSpecial[0] = "Coffee, 50% Off. ($0.75)";
	onSpecial[1] = "Stroganoff for Soviets, 50% Off. ($10.99)";
	onSpecial[2] = "Perogies with Bacon and Mushrooms, 50% Off. ($5.00)";
	onSpecial[3] = "Rosa's Butter Cookies, 50% Off. ($8.00)";
	onSpecial[4] = "Brother's Borscht, 50% Off ($8.00)";
	onSpecial[5] = "Caviar for Comrades, 50% Off ($5.00)";
	onSpecial[6] = "Olivier Salad, 50% Off ($7.00)";


	//setup event listener for clicking the specials arrows
	document.getElementById("leftt").addEventListener('click', clickLeft);
	document.getElementById("rightt").addEventListener('click', clickRight);

	//Execute Page Update (Uses today's values)
	updatePage();
	
	//Display the main page (I made it invisibile until the JS is done loading to avoid it looking garbled.)
	document.getElementById("main").style.display = "block";
     

	//function for clicking the left specials button
	//This cycles effectively what day it is. Current day starts at whatever today's current day of the week is
	function clickLeft() {
	if (currentDay === 0) {
		currentDay = 6;
		updatePage();
	}
	else{
		currentDay = currentDay - 1;
		updatePage();
	}
	}
	
	//function for clicking the right specials button. Just like the left, but goes in the other direction.
	function clickRight() {
	if (currentDay === 6) {
		currentDay = 0;
		updatePage();
	}
	else {
		currentDay = currentDay + 1;
		updatePage();
	}
	}

	//function for writing the Day's settings to DOM
	function updatePage(){
	
	//pull values from the Array, using the currentDay as a key, insert them into the dom
	// results in the image, day name, and special description being displayed
	document.getElementById("specimg").src = "images/specials/" + wday[currentDay] + ".jpg";
	document.getElementById("specday").innerHTML = wday[currentDay];
	document.getElementById("specdesc").innerHTML = onSpecial[currentDay];
	}
	
	}

