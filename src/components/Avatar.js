import React from 'react'
class Avatar extends React.Component {
  render() {
    let { imgSrc, name, age } = this.props
    return <div className='avatar'>
      <img style={{ width: '20px', height: '20px' }} src={imgSrc} alt="Avatar"/>
      <span>{name}</span>
      <span>{age}</span>
    </div>
  }
}

export default Avatar
