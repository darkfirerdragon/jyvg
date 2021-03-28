nosex=0;
nosey=0;
function preload(){
    clownnose=loadImage("https://i.postimg.cc/tChCVWLn/637.png");
    }
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotposes);
}
function modelloaded(){
console.log("posenet is inicialised");
}
function gotposes(results){
if(results.length>0){
console.log(results);
console.log("nose x="+nosex);
console.log("nose y="+nosey);
nosex=results[0].pose.nose.x-60; 
nosey=results[0].pose.nose.y-100;
}
}
function draw(){
image(video,0,0,300,300);
image(clownnose,nosex,nosey,127,130);

}
function take_snap_shot(){
save("image.png");
}


