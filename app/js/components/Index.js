import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Tutorial from './Tutorial'
import '../../scss/background.scss'
import { BrowserRouter, Route } from 'react-router-dom'

export default class Index extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
            <Route exact path='/' component={Home}/>
            <Route path='/tutorial' component={Tutorial}/>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}
