# React Bootcamp 2019 [![react](https://www.iconfinder.com/icons/1174949/download/png/32)](https://reactjs.org/)
## Session One
### What's React, Reconciliation, JSX, Components & Props
  1. Generate a basic project structure using [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started).
  2. Create some cards to render content and iterate a given data to test your components & props knowledge.
  * Concepts: 
    * Reconciliation Algorithm
    * `JSX` (Javascript XML)
    * `create-react-app`
    * `functional` components
    * `class` components
    * `props`

## Session Two
### State & LifeCycle I
  1. Define a `state` and include some properties to control your application flow. Remember that you will need to define a `class component` to use `state` (We will learn about hooks later.)
  2. Get some browser `window` data using react's lifecycle methods and use it on your application.
  * Concepts:
    * Instance Properties: `props` & `state`
    * `setState`
    * `constructor()`
    * `render()`
    * `componentDidMount()`
    * `componentDidUpdate()`
    * `componentWillUnmount()`
    * Class Properties: `defaultProps` & `displayName`

## Session Three
### State & LifeCycle II
  1. Create a rule to generate a derived state based on your customer preferences.
  2. Get the scroll position as a snapshot and pass it to the next life cycle method.
  3. Create an "Oops" page to prevent the customer from seeing a blank page in error cases.

  * Concepts: 
    * `shouldComponentUpdate()`
    * static `getDerivedStateFromProps()`
    * `getSnapshotBeforeUpdate()`
    * static `getDerivedStateFromError()`
    * `componentDidCatch()`
    * `forceUpdate()`
    * Legacy LifeCycle Methods
