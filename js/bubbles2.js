var num_bubbles = 60;
var bubbles = ["bubble.gif"];

// window size tests
function findLivePageWidth() {return window.innerWidth != null? window.innerWidth: document.body != null? document.body.clientWidth:700;}function findLivePageHeight() {return window.innerHeight != null? window.innerHeight: document.body != null? document.body.clientHeight:500;}
function posX() {return typeof window.pageXOffset != 'undefined' ? window.pageXOffset:document.documentElement.scrollLeft? document.documentElement.scrollLeft:document.body.scrollLeft? document.body.scrollLeft:0;}
function posY() {return typeof window.pageYOffset != 'undefined' ? window.pageYOffset:document.documentElement.scrollTop? document.documentElement.scrollTop: document.body.scrollTop?document.body.scrollTop:0;}

// make bubbles
var speed = 50;
var movw = new Array();
var move = new Array();
var stepw = new Array();
var posw = new Array();
var posh = new Array();
var diam = new Array();
var winWidth;
var winHeight;
function setSize() {
	winWidth = findLivePageWidth()-50;
	winHeight = findLivePageHeight()-50;
}

function load() {
	setSize();
	startBubbles(1);
	startBubbles(2);
	startBubbles(3);
	startBubbles(4);
	setTimeout("moreBubbles()", speed);
}

function startBubbles(layer) {
	var content = '';
	for (var i = (layer - 1) * num_bubbles / 4; i < layer * num_bubbles / 4; i++) {
		move[i] = 0;
		movw[i] = 11 + Math.random()*4;
		posw[i] = Math.random()*(winWidth-35)+12;
		posh[i] = Math.random()*winHeight;
		stepw[i] = 0.02 + Math.random()/10;
		diam[i] = (Math.random() * 50) + (layer) * 25;
		console.log(diam[i]);
		content += '<div class = "bubble" id="bub'+ i +'" style="position: absolute; z-index: '+ i +';';
		content += ' visibility:hidden;';
		content += ' width:' + diam[i] + 'px; height:' + diam[i] + 'px; opacity:' + (.55 / layer - diam[i] / (layer * 25 * 2 + 25) / layer) + '"';
		content += ' onclick="posh['+i+']=-50;"></div>';
	} 
	document.getElementById('bubble-background-' + layer).innerHTML = content;
	console.log(content);
}

function moreBubbles() {
	for (var i = 0; i < num_bubbles; i++) {
		if (posh[i] < -diam[i]) {
			posw[i] = 10+ Math.random()*(winWidth-movw[i]-30);
			posh[i] = winHeight + diam[i] + 100;
			stepw[i] = 0.02 + Math.random()/9;
		} 
		move[i] += stepw[i];
		posh[i]-=2;
		stepw[i] += Math.random()/100 - .005;
		if (stepw[i] > .05) {
			stepw[i] = .05;
		} else if (stepw[i] < -.05) {
			stepw[i] = -.05;
		}
		objstyle = document.getElementById('bub'+i).style;
		objstyle.left = posX()+posw[i] + movw[i]*move[i];
		objstyle.top = posY()+posh[i] - 1;
		objstyle.visibility = 'visible';
	}
	setTimeout("moreBubbles()", speed);
}

window.onload = load;
window.onresize = setSize;





