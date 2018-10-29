import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    drawChromeBoiAtCoords(x, y);
  }

  handleClick = (e) => {
    toggleCycling();
  }

  handleKeyDown = (e) => {
    switch(e.key) {
      case 'a':
        resize('+');
        break;
      case 's':
        resize('-');
        break;
    }
  }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
