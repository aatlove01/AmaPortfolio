// all the projects listed on work page with the css grid from 
// from codepen for the portfolio's work grid 
// https://codepen.io/jkmquitasol/pen/JxrKxX?html-preprocessor=none

$(function () {
	var filterList = {
		init: function () {
			// MixItUp plugin
			// http://mixitup.io
			$('.portfolio-grid').mixItUp({
				selectors: {
  			  target: '.portfolio',
  			  filter: '.filter'	
  		  },
  		  load: {
    		  filter: 'all' // show app tab on first load
    		}     
			});								
		}
	};
	// Run the show!
	filterList.init();
});	