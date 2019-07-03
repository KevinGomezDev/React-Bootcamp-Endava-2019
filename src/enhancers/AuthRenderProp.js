import React from 'react'

export default class AuthRenderProp extends React.Component {
  state = {
    username: null,
    password: null,
  }
  componentDidMount() {
    const username = window.localStorage.getItem('username')
    const password = window.localStorage.getItem('password')
    this.setState({ username, password })
  }
  render() {
    const { username, password } = this.state
    const data = { username, password }
    return this.props.children(data)
  }

}