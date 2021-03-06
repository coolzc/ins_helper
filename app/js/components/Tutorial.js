import React from 'react'
import '../../scss/tutorial.scss'
import tutorial1 from '../../images/tutorial-1.jpg'
import tutorial2 from '../../images/tutorial-2.jpg'

export default class Tutorial extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="tutorial-background">
        <h1>Please paste text as follows</h1>
        <img src={tutorial1} className="tutorial" alt="Responsive image"/>
        <img src={tutorial2} className="tutorial" alt="Responsive image"/>

        <p> we can get the url like: https://www.instagram.com/p/BSqJJ6HBYyA/?taken-by=stilsamt, just choose one to copy on Home Page input area</p>
        <p>https://www.instagram.com/p/BSqJJ6HBYyA</p>
        <p>BSqJJ6HBYyA</p>
      </div>
    )
  }
}
