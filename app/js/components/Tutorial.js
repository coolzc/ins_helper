import React from 'react'
import '../../scss/tutorial.scss'

export default class Tutorial extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="tutorial-background">
        <img src="../images/tutorial-1.png" className="" alt="Responsive image"/>
        <img src="../images/tutorial-2.png" className="" alt="Responsive image"/>

      <h5> we can get the url like: https://www.instagram.com/p/BSqJJ6HBYyA/?taken-by=stilsamt</h5>
      <h4>Please paste text as follows</h4>
      <ol>
        <li>https://www.instagram.com/p/BSqJJ6HBYyA</li>
        <li>BSqJJ6HBYyA</li>
      </ol>

      </div>
    )
  }
}
