import React from 'react'
import InputForm from './InputForm'
import InsImage from './InsImage'
import '../../scss/download.scss'
import { api } from '../lib/api'
import axios from 'axios'
import '../../scss/background.scss'

export default class Download extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      insOriginalUrl: '',
      imageUrl: '',
    }
    this.insImageUrl = this.insImageUrl.bind(this)
  }

  insImageUrl(url) {
    this.setState({imageUrl: url})
  }

  render() {
    const insImageElement = <InsImage imageUrl={this.state.imageUrl}/>
    if(this.state.imageUrl === '') {
      return (
        <div className="background">
          <div className="downloadInput">
            <InputForm insImageUrl={this.insImageUrl}/>
          </div>
        </div>
        )
    } else {
      return (
        <div className="background">
         <div className="downloadInput-up">
           <InputForm insImageUrl={this.insImageUrl}/>
           {this.state.imageUrl === '' ? null : insImageElement}
         </div>
       </div>
       )
    }
  }
}
