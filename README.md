# Workshop 8: Live video

## URL:



## Tasks:

- Make an experimental 'smart mirror' using live video capture.
- Include manipulations at the level of the pixel.

## Note:

- **Setup**:
  - Initializes a video capture object using `createCapture(VIDEO)` to access the webcam feed.
  - Resizes the video feed to match the canvas size using `video.size(width, height)`.
  - Hides the video feed initially using `video.hide()`.
- **Drawing Function (`draw()`)**:
  - Draws the flipped video feed on the canvas using the `image()` function.
  - Uses nested loops to iterate through each pixel of the video feed.
  - Calculates the index of each pixel in the video feed array based on its position and flips it horizontally.
  - Sets the pixel colors of the flipped video feed using the `set()` function.
  - Updates the pixels of the flipped video feed using the `updatePixels()` function.
- **Save canvas：**

~~~
saveCanvas('image', 'png');
~~~

## Project:

The ninth task of the workshop implemented a mirror function. It utilizes pixel-level manipulation to horizontally flip the camera's image, mimicking the reflection seen in a mirror. The code allows for the saving of images by clicking a button.