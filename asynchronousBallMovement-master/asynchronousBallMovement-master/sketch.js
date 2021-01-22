var ball;
var database, position;
var child; 

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    //ball = createSprite(250,250,10,10);
    //ball.shapeColor = "red";
    child = createSprite(250,250,10,10);
    child.shapeColor = "red";    
    var childt= database.ref("Ball/Position");
    childt.on("value",readposition,showerror)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("Ball/Position").set({
        "x": position.x+ x,
        "y": position.y+ y
    })
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
}
function readposition(data){
position = data.val();
child.x = position.x;
child.y = position.y;

}
function showerror(){
    console.log("error in the writing database")
}