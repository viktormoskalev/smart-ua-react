import React, { Component } from 'react';
import Image1 from '../../img/persone.png';
import Slider from './Flickity';

const images = [Image1, Image1, Image1, Image1, Image1];

export default class Home extends Component {
  render() {
    return (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }} />
          <Slider
            options={{
              autoPlay: 2000,
              pauseAutoPlayOnHover: true,
              wrapAround: true,
              fullscreen: true,
              adaptiveHeight: true,
            }}
          >
            {images.map((image, index) => (
              <div style={{ width: '400px', height: 'auto', margin: '0 0.5em' }} key={index}>
                <img src={image} alt="persone" />
              </div>
            ))}
          </Slider>
        </div>
    );
  }
}