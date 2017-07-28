import React from 'react'
import 'bootstrap/scss/bootstrap.scss'
import '../../scss/navigationBar.scss'
import { NavLink } from 'react-router-dom'


export default class Header extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
     <ul className="nav">
         <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
         <li><NavLink activeClassName="active" to="/tutorial">Tutorial</NavLink></li>
     </ul>
    )
  }
}
