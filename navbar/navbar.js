<script>
/*This code hides teh navbar when scroll down and show it again when scroll up*/
jQuery(document).ready(function($){

var mywindow = $(window);
var mypos = mywindow.scrollTop();


if(mywindow.scrollTop() > 100){
	$('#stickyheaders').addClass('elementor-sticky--effects');
	$('#wpadminbar').length !== 0 ? $('#stickyheaders').css('margin-top','30px') : $('#stickyheaders').css('margin-top','0px');
}

mywindow.scroll(function() {
		if (mypos > 40) {
			if(mywindow.scrollTop() < mypos){
					$('#stickyheaders').addClass('elementor-sticky--effects');
					$('#stickyheaders').css('transform','translateY(0px)');
					$('#stickyheaders').css('-webkit-transform','translateY(0px)');
					$('#stickyheaders').css('-moz-transform','translateY(0px)');
					$('#wpadminbar').length !== 0 ? $('#stickyheaders').css('margin-top','30px') : $('#stickyheaders').css('margin-top','0px');
					//this is optional if you dont need to use a line above you're navbar remove all hiddenLine from the code
					$('#stickyheaders div:first').addClass('hiddenLine');
			}else{
					$('#stickyheaders').css('transform','translateY(-300px)');
					$('#stickyheaders').css('-webkit-transform','translateY(-300px)');
					$('#stickyheaders').css('-moz-transform','translateY(-300px)');
			}

		if(mywindow.scrollTop() < 100){
			$('#stickyheaders').removeClass('elementor-sticky--effects');
			$('#stickyheaders div:first').removeClass('hiddenLine');
			$('#wpadminbar').length !== 0 ? $('#stickyheaders').css('margin-top','0px') : $('#stickyheaders').css('margin-top','0px');
		}
		}
		mypos = mywindow.scrollTop();
		});
});

</script>
<style>

#stickyheaders{
  	transition : transform 0.34s ease;
}

.hiddenLine{
	border-width: 0px !important;
}
/*This code is adapted to elementor but you can change this with the id of your own Navbar*/
div[data-elementor-type="header"]{
	position: sticky;
	top: 0;
	z-index: 999;
}
</style>