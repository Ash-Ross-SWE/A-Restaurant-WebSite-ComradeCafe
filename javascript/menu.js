
$(document).ready(function () {


var todayDate = new Date();
console.log(todayDate);
var todayHours = todayDate.getHours();

$('#availability-dinner').hide();                        // hiding all label elements that tell if the menu is available or not on page load
$('#availability-lunch').hide();
$('#availability-offers').hide();
$('#not-available-offers').hide();


console.log(todayHours);

if(todayHours > 12 && todayHours < 16)
{
   $('#availability-dinner').show();                     //show that dinner is not yet available as it is lunch time between 12pm to 4pm
}

else if(todayHours > 16 && todayHours <= 22)
{

  $('#availability-lunch').show();                       // show that lunch is not available as it is dinner time between 4pm to 10pm
}

if(todayHours >= 18 && todayHours < 19)                  // show Comrade offers is available only between 6pm to 7pm
{
  $('#availability-offers').show();
}
else {
  $('#not-available-offers').show();                    // show that Comrade offers is not available during the rest of the day
}

//on hover functionality for menu

$('.gallery-item').hover(
  function() {
      $(this).find('.menu_img').css('opacity','0.4');   //change the menu images opacity on hover
      $(this).find('.img-title').css('opacity','1');    // change the opacity of the menu items so that they are seen on hover
        $(this).find('.img-title').fadeIn(300);         //fade in effect on hover in
    },
  function() {
    $(this).find('.menu_img').css('opacity','1');       // on hover out, change opacity back to normal
        $(this).find('.img-title').fadeOut(100);        //fade out effect on hover out
      }

    );

    });
