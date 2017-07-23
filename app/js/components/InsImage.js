import React from 'react'

export default class InsImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (<div className="downloaded-img">
      <img src={this.props.imageUrl} className="img-fluid" alt="Responsive image"/>
    </div>)
  }
}
