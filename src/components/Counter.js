import React from 'react'
import { connect } from 'react-redux'

function Counter (props) {
    return <div>
      <button onClick={props.increment}>Increment</button>
      <span>{props.counter}</span>
    </div>
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INC' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)