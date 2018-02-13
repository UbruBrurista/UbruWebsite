$(document).ready(function(){
	var modal = document.getElementById('locationsModal');

  	$('#login-trigger').click(function(){
    	$(this).next('#login-content').slideToggle();
    	$(this).toggleClass('active');          
    
    	if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
      	else $(this).find('span').html('&#x25BC;')
    });

  	/* scroll to a div with the ID "scrollTo" by clicking a link with the class "scrollArrow" */
	$('.scrollArrow').click( function() {
    	$('html, body').animate({
          scrollTop: $('#scrollTo').offset().top
     	}, 600);
	});

	/* scroll to the top of the page */
	$('.scrollToTop')
    	$('.scrollToTop').click(function(){
         	$('html,body').animate({ scrollTop: 0 }, 600);
     });

    // $('#locationsButton').click( function() {
    // 	modal.style.display = "block";
    // });
});
