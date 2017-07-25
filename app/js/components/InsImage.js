import React from 'react'

export default class InsImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (<div className="downloaded-img">
      <a href={this.props.imageUrl} title="Download Instagram Picture" download>
        <img src={this.props.imageUrl} className="img-fluid" alt="Responsive image"/>
      </a>
    </div>)
  }
}
