# Completed Tasks

This repository contains three solutions for different tasks, each implementing
specific functionality.

## Installation

1.Clone the repository on your local computer:

`git clone https://github.com/your-username/goit-js-hw-08.git`

2. Navigate to the project directory: `cd goit-js-hw-08`

3. Install dependencies: `npm install`

## Image Gallery

A simple image gallery implemented using the
[simplelightbox](https://simplelightbox.com/) library. It allows users to view
images in a modal window with the ability to zoom in and navigate between
images.

### Usage

1. Insert the necessary HTML markup for the gallery in your HTML file:

```

<div class="gallery">
  <!-- Your images -->
</div>
```

2. Start the project:

`npm start`

**The gallery will be available at http://localhost:1234**

### Features

- Displaying the image gallery using simplelightbox.
- Viewing images in a modal window with zoom functionality.
- Navigating between images using navigation buttons.
- Responsive design for easy viewing on various devices.

### Example Markup

\```

<div class="gallery">
  <a href="path/to/image1.jpg">
    <img src="path/to/thumbnail1.jpg" alt="Image 1">
  </a>
  <a href="path/to/image2.jpg">
    <img src="path/to/thumbnail2.jpg" alt="Image 2">
  </a>
  <!-- Add more images following the same pattern -->
</div>
\```

### Customization

You can also customize additional parameters of
[simplelightbox](https://simplelightbox.com/), such as captions and element
positioning. Refer to the simplelightbox
[documnetation](https://simplelightbox.com/) for more details.

## Video Playback Time Recovery

The project enables the saving and recovery of video playback time from a Vimeo
player using local storage.

### Usage

1. Insert the Vimeo player `<iframe>` in your HTML file: \```
<iframe
  id="vimeo-player"
  src="https://player.vimeo.com/video/your-video-id"
  width="640"
  height="360"
  frameborder="0"
  allowfullscreen
  allow="autoplay; encrypted-media"
></iframe>
\```

2. Include the video.js script after the `<iframe>`:
   `<script src="video.js"></script> `

### Features

- Automatic saving of the current playback time to local storage.
- Recovery of the playback time from local storage when the page loads.
- Ability to continue video playback from the saved position.

### Example Usage

\```

<iframe
  id="vimeo-player"
  src="https://player.vimeo.com/video/your-video-id"
  width="640"
  height="360"
  frameborder="0"
  allowfullscreen
  allow="autoplay; encrypted-media"
></iframe>

<script src="video.js"></script>

\```

## Feedback Form

A basic feedback form that saves field values to local storage, allowing users
to resume form filling after page reload.

### Usage

1. Insert the HTML markup for the feedback form in your HTML file:

\```

<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>

<script src="feedback.js"></script>

\```

2. Start the project: `npm start`

### Features

- Automatic saving of field values to local storage when entered by the user.
- Restoration of field values from local storage when the page loads.
- Clearing of form fields and local storage upon form submission.

### Example Usage

\```

<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>

<script src="feedback.js"></script>

\```

## Contribution

If you have any suggestions for improvement or have found any issues, you are
welcome to create a pull request and contribute to the project. We appreciate
your contributions!
