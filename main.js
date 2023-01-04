function setup() {
    canvas = createCanvas(700, 600)
    canvas.position(900, 150)

    vid = createCapture(VIDEO)
    vid.position(100, 150)
    vid.size(700, 600)

    poses = ml5.poseNet(vid, modelLoaded)
    poses.on('pose', gotposes)
    
}

function modelLoaded() {
    console.log("Model Loaded!!")
}

function gotposes(results){
    if(results.length > 0)
    console.log(results)
}

function draw() {
    background("pink")
}