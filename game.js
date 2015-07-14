var canvas;
var context;
var timer;
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



var pause=true;
var start=true;
var last_round="NONE";
var test=Object();
test.x=0;
test.y=0;
test.t=0;
var test2=Object();
test2.x=0;
test2.y=0;
test2.t=0;

var test3=Object();
test3.x=0;
test3.y=0;
test3.t=0;


var mouse=Object();
mouse.x=0;
mouse.y=0;


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

function handleMouseMove(event) {
    mouse.x=event.x;
    mouse.y=event.y;
}

/*******************Route**********************/


function R_A(m){
    if(m.t<100){
        m.x=m.t*2;
        m.y=300
    }
    else if(m.t<200){
        m.x=200;
        m.y=300-(m.t-100)*2;
        
    }
    else if(m.t<500){
        m.x=200+(m.t-200)*(25/30);
        m.y=100+(m.t-200)/2;
    }
}

function R_B(m){
    if(m.t<100){
        m.x=1000-m.t*2;
        m.y=500-m.t*2;
    }
    else if(m.t<200){
        m.x=800-(m.t-100)*3;
        m.y=300+(m.t-100);
    }
    else if(m.t<500){
        m.x=500;
        m.y=400-(m.t-200)/2;
    }
}

function R_C(m){
    if(m.t<100){
        m.x=500-m.t*3;
        m.y=200;
    }
    else if(m.t<300){
        m.x=200+(m.t-100)*1.5;
        m.y=200+(m.t-100)*0.1;
    }
    else if(m.t<500){
        m.x=500;
        m.y=220+(m.t-300)/2;
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
    
    test.t+=1;
    test2.t+=1;
    test3.t+=1;
    R_A(test);
    R_B(test2);
    R_C(test3);
    if(!pause && !start){
        
        
        
        
        
    }
}




function draw() {
	// Clear the screen.
	clearCanvas();
    context.font="3px Arial";
    context.fillStyle="black";
//    for(var i=0;i<200;i++){
//        context.fillText(i,i,i);
//    }
    context.fillText(test.x,test.x+12,test.y+12);
    context.fillText(test.y,test.x+30,test.y+12);
    fillCircle(test.x,test.y,10);
    
    context.fillText(test2.x,test2.x+12,test2.y+12);
    context.fillText(test2.y,test2.x+30,test2.y+12);
    fillCircle(test2.x,test2.y,10);
    
    context.fillText(test3.x,test3.x+12,test3.y+12);
    context.fillText(test3.y,test3.x+30,test3.y+12);
    fillCircle(test3.x,test3.y,10);
    
    
    context.fillText(mouse.x,mouse.x,mouse.y);
    context.fillText(mouse.y,mouse.x+30,mouse.y)
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

/*********************monster stuff****************************/



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

//function monster(){
//    this.x=0;
//    this.y=0;
//    this.t=0;
//    this.dead=false;
//}


/***************************************************************/
function onLoad() {
	canvas = document.getElementById("theCanvas");
	context = canvas.getContext("2d");
    
    

    
	//canvas.addEventListener("mousemove", handleMouseMove, false);
    window.addEventListener("keydown",handleKeyDown,false);
	window.addEventListener("keyup",handleKeyUp,false);
    canvas.addEventListener("mousemove", handleMouseMove, false);
	center.x = canvas.width / 2;
	center.y = canvas.height / 2;

	
    
    
	timer = setInterval(gameLoop, 30);
	return timer;
}
function reload(){
    
}
