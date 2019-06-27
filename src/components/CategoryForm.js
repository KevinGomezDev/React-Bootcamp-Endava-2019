import React from 'react'

class CategoryForm extends React.Component {
  constructor(props) {
    super(props)
    this.formRef = React.createRef()
    this.state = {
      id: '',
      categoryName: '',
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSave = (e) => {
    e.preventDefault()
    console.log(this.formRef.current)
    localStorage.setItem('DataUser', JSON.stringify(this.state))
    console.log(localStorage.getItem('DataUser'))
  }


  render() {
    return <form onSubmit={this.handleSave} ref={this.formRef}>
      <fieldset>
        <label htmlFor='id'>Id</label>
        <input id='id' name='id' onChange={this.handleChange} value={this.state.id} />
      </fieldset>
      <fieldset>
        <label htmlFor='categoryName'>Name</label>
        <input id='categoryName' name='categoryName' onChange={this.handleChange} value={this.state.categoryName} />
      </fieldset>
      <button type='submit'>Save</button>
    </form>
  }
}

export default CategoryForm
