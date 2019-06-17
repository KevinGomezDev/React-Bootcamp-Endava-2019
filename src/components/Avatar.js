import React from 'react';

class Avatar extends React.Component {
  render() {
    let { imgSrc, name, age } = this.props
    age = age - 1
    return <div>
      <img src={imgSrc} alt="Fotico"/>
      <span>{name}</span>
      <span>{age}</span>
    </div>
  }
}

export default Avatar