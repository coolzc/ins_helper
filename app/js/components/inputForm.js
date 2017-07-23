import React from 'react'
import '../../scss/download.scss'
import 'bootstrap/scss/bootstrap.scss'
import { api } from '../lib/api'
import axios from 'axios'

export default class InputForm extends React.Component{
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
        _this.setState({imageUrl: res.data})
        _this.props.insImageUrl(res.data)
      })
      .catch((err) => {
        alert(err)
      })
  }

  render() {
      return (<div className="input-form">
        <h5>Download Instagram Photos and Videos!</h5>
        <input className="form-control" type="text" id="insPicInput" placeholder="Enter Instagram Picture Information" onChange={this.handleChange.bind(this)}/>
        <button className="button" onClick={this.handleSubmit.bind(this)}>Go</button>
      </div>)

  }
}

