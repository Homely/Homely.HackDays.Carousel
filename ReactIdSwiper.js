/// https://github.com/kidjp85/react-id-swiper

import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.1/css/swiper.css">

class ReactIdSwiper extends Component {
  render() {
    const options = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    };
    return (
      <div className="ReactIdSwiper">
        <Swiper {...options}>
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
        </Swiper>
      </div>
    )
  }
}

export default ReactIdSwiper;