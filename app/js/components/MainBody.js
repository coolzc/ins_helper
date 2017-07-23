import React from 'react'
import InputForm from './InputForm.js'
import InsImage from './InsImage.js'
import 'bootstrap/scss/bootstrap.scss'
import '../../scss/download.scss'
import { api } from '../lib/api'
import axios from 'axios'

export default class Download extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      insOriginalUrl: '',
      imageUrl: '',
    }
  }

  handleChange(event) {
    let state = {}
    state.insOriginalUrl = event.target.value
    this.setState(state)
  }

  handleSubmit(values) {
    const domain = ''
    const insOriginalUrl = api.getInsPicUrl
    const _this = this
    const queryData = {
      insOriginalUrl: this.state.insOriginalUrl
    }
    axios
      .post(insOriginalUrl, queryData)
      .then((res) => {
        this.setState({imageUrl: res.data})
        console.log(res)
      })
      .catch((err) => {
        alert(err)
      })
  }

  insImageUrl(url) {
    this.setState({imageUrl: url})
  }

  render() {
    const insImageElement = <InsImage imageUrl={this.state.imageUrl}/>
    return (
      <div>
        <InputForm insImageUrl={this.insImageUrl}/>
        {this.state.imageUrl === '' ? null : insImageElement}
      </div>
    )
  }
}
