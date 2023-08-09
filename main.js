noseX = 0;
noseY = 0;

function preload()
{
    mustache = loadImage(' https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    
    tint_color = "";

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
    }
}


function draw()
{
    image(video, 0, 0, 400, 400);
    tint(tint_color);
    image(mustache, noseX, noseY, 30, 30);
}

function take_snapshot()
{
    save("Suraj.png");
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value
}