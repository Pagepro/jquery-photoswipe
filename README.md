# jQuery Photoswipe

## Description ##

jQuery plugin for [PhotoSwipe](http://photoswipe.com/).


## Installation ##

### Manual Install ###
1. Step 1: include JS and CSS files of Photo Swipe:

`
<!-- Core CSS file -->
<link rel="stylesheet" href="path/to/photoswipe.css"> 

<!-- Skin CSS file (styling of UI - buttons, caption, etc.)
     In the folder of skin CSS file there are also:
     - .png and .svg icons sprite, 
     - preloader.gif (for browsers that do not support CSS animations) -->
<link rel="stylesheet" href="path/to/default-skin/default-skin.css"> 

<!-- Core JS file -->
<script src="path/to/photoswipe.min.js"></script> 

<!-- UI JS file -->
<script src="path/to/photoswipe-ui-default.min.js"></script> 
`

2. Step 2: include jQuery Photoswipe plugin:

`
<!-- UI JS file -->
<script src="path/to/jquery.photoswipe.js"></script>
`

3. Step 3: add data size tag to your gallery links, attribute should describe image dimensions.

`
<a href="imageUrl.jpg" class="js-lightbox" data-size="1350x901">
`

4. Step 4: apply jQuery PhotoSwipe plugin:

`
$('.image-slider--floor-plan').photoSwipe({
    link: '.js-lightbox'
});
`