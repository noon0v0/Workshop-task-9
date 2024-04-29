let video;
let canvas;
let flipped_video;

function setup() {
  canvas = createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  flipped_video = createImage(width, height);

  video.position(0, 0);

  save_btn = createButton("Save");
  save_btn.mousePressed(save_image)
}

function draw() {
  image(flipped_video, 0, 0);
  flipped_video.loadPixels();
  video.loadPixels();
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let index = (video.width - x - 1 + y * video.width) * 4;
      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      let a = video.pixels[index + 3];
      flipped_video.set(x, y, [r, g, b, a]);
    }
  }
  flipped_video.updatePixels();
}

function save_image() {
  saveCanvas('image', 'png');
}
