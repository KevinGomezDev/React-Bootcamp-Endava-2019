import React from 'react'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function withAuthentication(WrappedComponent, nameProp) {
  return class WithAuthentication extends React.Component {
    state = {
      username: null,
      password: null,
    }
     static displayName = `withAuthentication(${getDisplayName(WrappedComponent)})`;

    componentDidMount() {
      const username = window.localStorage.getItem('username')
      const password = window.localStorage.getItem('password')
      this.setState({ username, password })
    }
    render() {
      const { username, password } = this.state
      const props = {
        [nameProp]: username,
        ...this.props
      }
     if(username && password) {
       return <WrappedComponent {...props} />
     } else {
       return 'You need to be logged'
     }
    }
  }
}

export default withAuthentication