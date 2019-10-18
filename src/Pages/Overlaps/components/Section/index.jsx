import React from 'react'

import './Section.css'

const Section = ({ classes, img }) => {
  return (
    <section className={classes}>
      <img src={img} alt='' />
    </section>
  )
}

export default Section
