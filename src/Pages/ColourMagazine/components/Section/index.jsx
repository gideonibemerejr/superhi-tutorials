import React, { Component } from 'react'
import styles from './Section.module.css'
import {
  colour1,
  colour2,
  colour3,
  colour4,
  colour5,
  colour6
} from '../../assets'

class Section extends Component {
  state = {
    images: [colour1, colour2, colour3, colour4, colour5, colour6]
  }

  handleHover = e => {
    const x = e.nativeEvent.offsetX
    const width = e.currentTarget.offsetWidth
    const percentage = x / width

    const imageNumber = Math.floor(percentage * this.images.length)

    this.images.forEach(image => {
      image.style.zIndex = 0
    })

    imageNumber >= this.images.length
      ? (this.images[0].style.zIndex = 1)
      : (this.images[imageNumber].style.zIndex = 1)
  }

  images = []

  render() {
    return (
      <section onMouseMove={this.handleHover} className={styles.slideshow}>
        {this.state.images.map((image, idx) => (
          <img
            key={idx}
            src={image}
            ref={ref => (this.images[idx] = ref)}
            alt=''
          />
        ))}
      </section>
    )
  }
}

export default Section
