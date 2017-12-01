New Image Carousel 
=========================

### What:

Replace `react-slick` with a more performant image carousel.


### Where:
ie. use-cases, variations
* home - 3 card carousel 
* search - 1 card image gallery 
* details - 1 image gallery
* fullscreen - 1 image gallery - thumbnails | zoom | captions

transitions: 
slide on mobile - fade on desktop


### Requirements:
* works in React 16
* 60fps
* simple and fast
* smaller than React Slick (65.8KB raw)
* responsive
* virtual paging
* elegant loading state
* lazyload images
* fade and slide transitions
* handle mobile vertical scroll / touch-friendly
* handle any content (e.g. videos/iframes)
* SEO-friendly
* linkable in fullscreen
* touch-zoomable 
* supported / updated regularly

### Conclusion:
No suitable replacement has been identified that fulfills all the requirements.

### Actions:
Upgrade existing React Slick to latest version with a wrapper to handle any extra functionality.

### Carousel Options:
#### PhotoSwipe <http://photoswipe.com/> (91.8KB)
  * <https://github.com/dimsemenov/photoswipe>
  * react implementations:
    * <https://github.com/minhtranite/react-photoswipe>
    * <https://github.com/GopherLabsLtd/react-photoswipe>
  * good for image gallery but not card carousel?
  
  CONS
  * requires predefined image dimensions
  * doesn't allow to scroll the page vertically over the gallery on mobile
  * bigger than React Slick :(
  
#### Slider <https://www.jssor.com/demos/image-slider.slider> (48.7KB)

  PROS
  * Smaller than React Slick
  * Handles all required scenarios
  * Good support with active developer (<https://stackoverflow.com/search?tab=relevance&q=jssor|StackOverflow>)
  * Cross-platform ("all devices supported")

  CONS
  * Not SSR friendly (standard import throws `window` object error)
  * No native React support
  
#### React Responsive Carousel <https://github.com/leandrowd/react-responsive-carousel> (41.7KB)
  <https://www.npmjs.com/package/react-responsive-carousel>

  PROS
  * Smaller than React Slick and JSSOR
  * Proper React component

  CONS
  * No lazy loading
  * Touch vertical vs horizontal scroll
  * No fade transition
  
 #### Nuka Carousel <https://github.com/FormidableLabs/nuka-carousel> (88.3KB)
  
  PROS
  * React 16

  CONS
  * Seems to be old! Still using Mixins etc.
  * No lazy loading
  * Big!


#### Swiper <http://idangero.us/swiper/demos/> (192.5KB!!!)
  * <https://github.com/nolimits4web/swiper/>
  React:
  * <https://github.com/kidjp85/react-id-swiper>
  * <https://github.com/ashish41191/react-slider-swiper>
  
  PROS
  * does everything we need!
  
  CONS
  * Requires React-ready package (see above)
  * Needs IFrames to handle multiples per page
  * ENORMOUS!
  * Appears to prevent minification during build
  
  
#### Flickity <https://flickity.metafizzy.co/> (66.9KB)
  * <https://github.com/metafizzy/flickity>
  
  PROS
  * lazy loading
  
  CONS
  * NOT FREE! $25 - $110
  * Background image lazy load requires ANOTHER package
  * Not React native, requires reack-flickity (old!) or react-flickity-component
  
#### Pure React Carousel <https://www.npmjs.com/package/pure-react-carousel> (76.9KB)

  PROS
  * React from ground up
  * Simple
  
  CONS
  * Simple (no lazy loading)


### More custom options

#### using react-motion 
* react-view-pager <http://souporserious.github.io/react-view-pager/>
  
* tiny-slider <https://github.com/ganlanyuan/tiny-slider>
  * <https://github.com/jechav/tiny-slider-react>
  
  
---------------

(╯°□°)╯︵ ┻━┻
