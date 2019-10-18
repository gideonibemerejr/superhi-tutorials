import React, { Component } from 'react'
import styles from './Overlaps.module.css'
import { Header, Section } from './components'
import { sections } from './data'

class Overlaps extends Component {
  state = {
    sections: sections
  }
  render() {
    return (
      <div className={styles.body}>
        <Header />
        <section className={styles.about}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur hic odit laborum ut? Odit minima temporibus
            reprehenderit rerum autem quaerat.
          </p>
        </section>
        {sections.map((section, idx) => (
          <Section key={idx} classes={section.classes} img={section.img} />
        ))}
      </div>
    )
  }
}

export default Overlaps
