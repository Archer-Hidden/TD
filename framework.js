var canvas;
var context;
var timer;
var back_ground;
var center = Object();






var KEY_SPACE = 32;
var KEY_W=87;
var KEY_A=65;
var KEY_D=68;
var KEY_P=80;
var KEY_Q=81;
var KEY_E=69;
var KEY_J=74;
var KEY_K=75;
var KEY_L=76;
var KEY_I=73;
var KEY_U=85;
var KEY_O=79;
var slash_b=false;
var counter=0;

var pause=true;
var start=true;
var last_round="NONE";
var test=Object();
test.x=100;
test.y=410;



function fillCircle( x, y, radius ) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, true);
    context.fill();
}
function fillRect( x, y, width, height,color ) {
    context.fillStyle=color;
    context.fillRect( x, y, width, height );
}






/************************Player control**********************/
function handleKeyDown(event) {
    switch(event.keyCode) {
        case KEY_SPACE:
        {
            break;
        }
        case KEY_E:
        {
            break;
        }
        case KEY_A:
        {
            break;
        }
        case KEY_D:
        {
            break;
        }
        case KEY_W:
        {
            break;
        }
        case KEY_Q:
        {
            
            break;
        }
        case KEY_O:
        {
            break;
        }
        case KEY_J:
        {
            break;
        }
        case KEY_L:
        {
            break;
        }
        case KEY_I:
        {
            break;
        }
        case KEY_U:
        {
            
            break;
        }
    
        default:
    }
}
function handleKeyUp(event) {
	switch(event.keyCode) {
		case KEY_E:
        {
            
			break;
        }
        case KEY_A:
        {
            break;
        }
        case KEY_D:
        {
            break;
        }
        case KEY_Q:
        {
            break;
        }
        case KEY_O:
        {
            
            break;
        }
        case KEY_J:
        {
            break;
        }
        case KEY_L:
        {
            break;
        }
        case KEY_U:
        {
            break;
        }
		default:
	}
}



/*******************Triger********************/

function coll_det(ob_a,ob_b){
    var distance;
    var tempx=ob_b.x+48;
    var tempy=ob_b.y+48;
    distance = (ob_a.x-tempx)*(ob_a.x-tempx)+(ob_a.y-tempy)*(ob_a.y-tempy);
    distance = Math.sqrt(distance);
    if(distance<(ob_a.r+ob_b.r))
        return true;
    else
        return false;
}

/********************Game loop control**************/

function clearCanvas() {
    // Store the current transformation matrix
    context.save();
    
    // Use the identity matrix while clearing the canvas
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // Restore the transform
    context.restore();
}


function update() {
    if(!pause && !start){
        
        
        
        
        
    }
}




function draw() {
	// Clear the screen.
	clearCanvas();
    
    
    if(start){
        
        
        
        
    }
    else if(!pause){
        


        
    }
    else{
        context.font="30px Arial";
        context.fillStyle="black";
        context.fillText("PAUSE",center.x,center.y);
    }
}

function gameLoop() {
	update();
	draw();
    
}

/*********************bullets stuff****************************/



//function bullet(x,y,is_left){
//    this.px=x;
//    this.py=y;
//    this.x=this.px;
//    this.y=this.py;
//    this.is_left=is_left;
//    this.r=10;
//    this.speed=0;
//    this.dead=false;
//}




/***************************************************************/
function onLoad() {
	canvas = document.getElementById("theCanvas");
	context = canvas.getContext("2d");
    
    

    
	//canvas.addEventListener("mousemove", handleMouseMove, false);
    window.addEventListener("keydown",handleKeyDown,false);
	window.addEventListener("keyup",handleKeyUp,false);
	center.x = canvas.width / 2;
	center.y = canvas.height / 2;

	
    
    
	timer = setInterval(gameLoop, 30);
	return timer;
}
function reload(){
    
}
