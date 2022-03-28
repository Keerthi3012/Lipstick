function preload ()  {
    clown_nose = l(oadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}
  
  function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
  
   
  
  function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 50, 20);
  }