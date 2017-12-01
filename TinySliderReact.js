/// https://github.com/jechav/tiny-slider-react

import React, { Component } from 'react';

import TinySlider from "tiny-slider-react";

class TinySliderReact extends Component {
  render() {
    const options = {
      lazyload: true,
      nav: false,
      mouseDrag: true
    };
    return (
      <div className="TinySliderReact">
        <TinySlider settings={options}>
          <div>
            <img src="//lorempixel.com/900/500/city/1/" alt="" />
          </div>
          <div>
            <img src="//lorempixel.com/900/500/city/2/" alt="" />
          </div>
          <div>
            <img src="//lorempixel.com/900/500/city/3/" alt="" />
          </div>
          <div>
            <img src="//lorempixel.com/900/500/city/4/" alt="" />
          </div>
          <div>
            <img src="//lorempixel.com/900/500/city/5/" alt="" />
          </div>
          <div>
            <img src="//lorempixel.com/900/500/city/6/" alt="" />
          </div>
        </TinySlider>
      </div>
    )
  }
}

export default TinySliderReact;