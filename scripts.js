var cards =[
	'<img src="superhero01.png">',
	'<img src="superhero02.png">',
	'<img src="superhero03.png">',
	'<img src="superhero04.png">'
];

$(document).ready(function(){
	var gridSize = 4;
	var card = '<img src="logo.png">'

	var mgHTML = '';
	
	var cardCounter = 0;
	for(var i = 0; i < gridSize; i++){
			
			}
		mgHTML += '<div class="mg-tile col-sm-3">';
			mgHTML += '<div class="mg-tile-inner">';
			  mgHTML += '<div class="mg-front">'+card+'</div>';
			  mgHTML += '<div class="mg-back"></div>';
			mgHTML += '</div>';
			mgHTML += '</div>';
	

	$('.mg-contents').html(mgHTML);

		$('.mg-tile-inner').click(function(){
			$(this).toggleClass('flip');
				var cardsUp = $('.mg-tile-inner, flip');
			if(cardsUp.length == 2){
				// check to see if they match
				if(cardsUp.find('img')[0] == cardsUp[1].find('img')[1]){
					//They match!
					cardsUp.addClass('matched');
				}else{
					// They don't match! Flip them back over.
					setTimeout(function(){
					cardsUp.removeClass('flip');
				}, 1000)
				
				}
			}
		});

});



