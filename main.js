function setup(){
    canvas = createCanvas(500, 500);
     canvas.center();
     video = createCapture(VIDEO);
     video.size(500, 500);
     video.hide();
 
 }

 function take_snapshot(){
     save('frame.jbg');
 }

function draw(){
    
    image(video, 0, 0, 500, 500);


    fill(145, 163, 228);
    stroke(145, 163, 228);
    rect(0,0, 500, 20);

    
    fill(145, 163, 228);
    stroke(145, 163, 228);
    rect(480,0, 20, 500);

    fill(145, 163, 228);
    stroke(145, 163, 228);
    rect(0,480, 500, 20);

    fill(145, 163, 228);
    stroke(145, 163, 228);
    rect(0,0, 20, 500);

    fill(220, 20, 60);
    stroke(220, 20, 60);
    circle(0, 0, 100);

    fill(220, 20, 60);
    stroke(220, 20, 60);
    circle(500, 0, 100);

    fill(220, 20, 60);
    stroke(220, 20, 60);
    circle(500, 500, 100);

    fill(220, 20, 60);
    stroke(220, 20, 60);
    circle(0, 500, 100);
}




