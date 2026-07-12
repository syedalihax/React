import { Bookmark } from 'lucide-react'
import Styles from './Card.module.css'
import React from 'react'

const Card = (props) => {
  return (
    <div className={Styles.card}>
      <div className={Styles.top}>
        <img src={props.logo} alt="" />
        <div>Save <Bookmark /> </div>
      </div>

      <div className={Styles.middle}>
        <div className={Styles.divt}>
          <h3>{props.company}</h3>
          <span>{props.posted}</span>
        </div>
        <h2>{props.title}</h2>
        <div className={Styles.divb}>
          <span>{props.tag1}</span>
          <span>{props.tag2}</span>
        </div>
      </div>

      <div className={Styles.bottom}>
          <div>
            <h3>{props.salary}</h3>
            <h5>{props.locatoin}</h5>
          </div>
          <button>Apply Now</button>
      </div>

    </div>
  )
}


export default Card

