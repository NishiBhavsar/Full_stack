import React, { Component } from 'react';
  
class PersonDefault extends Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name} </p>
        <p>Gender: {this.props.gender}</p>
        <hr/>
      </div>
    )
  }
}

PersonDefault.defaultProps = {
  name: "Shruti",
  gender:"Female"
}
  
export default PersonDefault;