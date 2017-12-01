import React, { Component } from 'react';
import ReactResponsiveCarousel from './ReactResponsiveCarousel';
import ReactIdSwiper from './ReactIdSwiper';

const sliderCount = 2;

class App extends Component {
   constructor() {
    super();
    this.state = {
      activeIndex: 1,
    };
    this.toggleIndex = this.toggleIndex.bind(this);
  }
  toggleIndex(){
    const { activeIndex } = this.state;
    var newIndex = activeIndex + 1;
    newIndex = newIndex > sliderCount ? 1 : newIndex;
    this.setState({ activeIndex: newIndex });
  }
  render() {
    const { activeIndex } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleIndex}>Toggle Carousel</button>
        {activeIndex === 1 && <div>React Responsive Carousel<ReactResponsiveCarousel /></div>}
        {activeIndex === 2 && <div>React ID Swiper<ReactIdSwiper /></div>}
      </div>
    );
  }
}

export default App;
