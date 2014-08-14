var layers = 6;
setupBubbles = function () {
	for (var i = 1; i <= layers; i++) {
		var div = '<li class="layer" data-depth="' + (.5 / i) + '">'
		div += '<div class = "bubble-background" id = "bubble-background-' + i + '"></div>';
		div += '</li>'
		
		$('#home-scene').append(div);
		
		for (var j = 0; j < Math.random() * (layers - i) * 20 * screen.width / 1200 + 10; j++) {
			var diam = Math.random() * i * 50;
			var oX = Math.random() * screen.width * 1.2;
			var oY = Math.random() * screen.height * 1.2;
			var opacity = Math.random() * .02 + (layers - i) * .02;
			var bubble = '<div class = "bubble" style = "width:' + diam + ';height:' + diam + ';';
			bubble += 'top:' + oY + ';left:' + oX + ';opacity:' + opacity + '"></div>';
			$('#bubble-background-' + i).append(bubble);
		}
		
	}
}

/*window.setInterval(function(){
	update()
}, 1000);*/

setupBubbles();