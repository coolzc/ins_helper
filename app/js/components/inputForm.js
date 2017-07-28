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
      downloadImgProgress: '',
      imageLoading: false,
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
    const config = {
      onUploadProgress: function (progressEvent) {
        const progressPercent = Math.round((progressEvent.loaded * 100) / progressEvent.total) + '%'
        _this.setState({downloadImgProgress: progressPercent})
      }
    }
    _this.setState({imageLoading: true})
    axios
      .post(insOriginalUrl, queryData, config)
      .then((res) => {
        _this.setState({imageUrl: res.data, imageLoading: false,})
        _this.props.insImageUrl(res.data)
      })
      .catch((err) => {
        alert(err)
      })
  }

  displayProgressBar() {
    if(this.state.imageLoading) {
      return (
        <div className="image-progress">
          <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={Object.assign({}, {width: this.state.downloadImgProgress})}></div>
          </div>
        </div>
        )
    } else {
      return null
    }
  }

  render() {
      return (<div className="input-form">
        <h5>Download Instagram Photos and Videos!</h5>
        <input className="form-control" type="text" id="insPicInput" placeholder="Enter Instagram Picture Information" onChange={this.handleChange.bind(this)}/>
        <button className="button" onClick={this.handleSubmit.bind(this)}>Go</button>
        {this.displayProgressBar()}
      </div>)
  }
}

