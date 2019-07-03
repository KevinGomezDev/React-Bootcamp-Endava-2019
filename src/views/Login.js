import React from 'react'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null,
    }
  }

    handleChange = (e) => {
      const { name, value} = e.target
      this.setState({
        [name]: value
      })
    }


  handleLogin = (e) => {
    e.preventDefault()
    const { username, password } = this.state
    const localUsername = window.localStorage.getItem('username')
    const localPassword = window.localStorage.getItem('password')
    console.log(localUsername)
    console.log(localPassword)
    if(username === localUsername && password === localPassword) {
      this.props.history.push('/')
    } else {
      console.log('Go back to login')
      this.props.history.push('/login')
    }
  }

    render() {
      return <form onSubmit={this.handleLogin}>
        <input onChange={this.handleChange} name='username' type="text"/>
        <input onChange={this.handleChange} name='password' type="password"/>
        <button>Login</button>
      </form>
    }
}

export default Login