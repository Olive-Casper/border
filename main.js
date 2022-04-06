function preload()
{
}

function setup() 
{
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

  tint_color = "";
}

function draw()
{
    image(video, 230, 150, 220, 200)
    fill(tint_color);
    stroke(tint_color);
    rect(90, 40, 460, 20)
    rect(90, 420, 460, 20)
    rect(40, 90, 20, 300)
    rect(580, 90, 20, 300)
}

function take_snapshot()
{
   save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}