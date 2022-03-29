
difference=0;
leftWristX=0;
rightWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas=createCanvas(550,550);
    canvas.position(560,150);

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet is initialized")
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}
function draw(){
    background("#C0C0C0");
    document.getElementById("text").innerHTML=difference;
    textSize(difference);
    fill("pink");
    text("Jaanvi is cool",50,400);
    
}