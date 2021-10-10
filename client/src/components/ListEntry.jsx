import React from 'react'

class ListEntry extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li>
        {console.log(this.props.movie)}
        {this.props.movie.title}
      </li>
    )
  }
}

export default ListEntry