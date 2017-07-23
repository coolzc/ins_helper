import React from 'react'
import Header from './Header'
import Footer from './Footer'
import MainBody from './MainBody'
import '../../scss/background.scss'

export default class Index extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="backgroud">
          <Header />
          <MainBody />
          <Footer />
      </div>
    )
  }
}
