import React from 'react'
import 'bootstrap/scss/bootstrap.scss'
import '../../scss/navigationBar.scss'


export default class Header extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
     <div>
       <ul>
         <li><a className="active" href="#home">Home</a></li>
         <li><a href="#support">Support</a></li>
       </ul>
     </div>
    )
  }
}
