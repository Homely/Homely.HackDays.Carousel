/// https://github.com/leandrowd/react-responsive-carousel

import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

// general styles
import 'react-responsive-carousel/lib/styles/main.css';

// carousel styles
import 'react-responsive-carousel/lib/styles/carousel.css';

// these would be props 
const images = [
  { url: "//lorempixel.com/900/500/city/1/" },
  { url: "//lorempixel.com/900/500/city/2/" },
  { url: "//lorempixel.com/900/500/city/3/" },
  { url: "//lorempixel.com/900/500/city/4/" },
  { url: "//lorempixel.com/900/500/city/5/" },
  { url: "//lorempixel.com/900/500/city/6/" },  
];

const thumbs = [
  { url: "//lorempixel.com/90/50/city/1/" },
  { url: "//lorempixel.com/90/50/city/2/" },
  { url: "//lorempixel.com/90/50/city/3/" },
  { url: "//lorempixel.com/90/50/city/4/" },
  { url: "//lorempixel.com/90/50/city/5/" },
  { url: "//lorempixel.com/90/50/city/6/" },
]

class ReactResponsiveCarousel extends Component {
  constructor (props) {
    super(props);
    this.state = {
      totalVisible: 3,
      currentIndex: 0,
      slides: this.fillArray(2),
    };

    this.addSlide = this.addSlide.bind(this);
  }
  
  componentDidMount() {
    document.title = 'React Responsive Carousel Hack Day Demo';
  }

  // fills array with fullsize urls or thumb urls
  fillArray(index) {
    const slides = [];
    for (var i = 0; i < images.length; i++) { 
      if (i <= index) {
        slides.push(images[i]);
      } else {
        slides.push(thumbs[i])
      }
    }
    return slides;
  }
  
  addSlide(index) {
    const { totalVisible } = this.state;
    const newIndex = index + 3;
    if (newIndex > 3 && newIndex > totalVisible) {      
      const slides = this.fillArray(newIndex);
      this.setState({ slides, totalVisible: Math.floor(images.length, newIndex), currentIndex: index });
    } else {
      this.setState({ currentIndex: index });
    }
  }
  
  renderImages() {
    const renderedImages = this.state.slides.map((slide, index) => <div key={index}><img src={slide.url} alt="" /></div>);
    return renderedImages;
  }

  render() {
    const options = {
      showStatus: true,
      showArrows: true,
      useKeyboardArrows: true,
      emulateTouch: true,
      infiniteLoop: false,
      centerMode: false,
      showThumbs: true,
      swipeScrollTolerance: 1,
      selectedIndex: this.state.currentIndex,
    };
    const containerStyle = {
      width: '900px',
      maxWidth: '100%',
      height: '500px',
      margin: '0 auto',
    }
    return (
      <div style={containerStyle}>
        <div style={{height: '200px', background: '#ccc'}}></div>
        <Carousel onChange={this.addSlide} onClickThumb={this.addSlide} {...options}>
          {this.renderImages()}
        </Carousel>
        Selected Index: {this.state.currentIndex} <br/>
        Total Visible: {this.state.totalVisible}
        <div style={{height: '500px', background: '#ccc'}}></div>
      </div>
    );
  }
}

export default ReactResponsiveCarousel;