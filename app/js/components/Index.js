import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Tutorial from './Tutorial'
import '../../scss/background.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default class Index extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/tutorial' component={Tutorial}/>
            <Route path='/about' component={About}/>
            <Route render={function() {
              return <p>Not Found</p>
              }}/>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}
