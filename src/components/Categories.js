import React from 'react'
import { getCategories } from '../api/categories'
import AuthRenderProp from '../enhancers/AuthRenderProp'
import Category from './Category'

class Categories extends React.Component {
  state = {
    categories: [],
    loading: false,
    error: null
  }

  componentDidMount() {
    this.setState({ loading: true })
    getCategories().then((categories) => 
      this.setState({ categories, loading: false })
    )
  }

  render() {
    const { loading, error, categories } = this.state
    return <AuthRenderProp>
    {({ username }) => <React.Fragment>
      Username: {username}
      {loading 
        && <div className='loader'>
          <i className="fas fa-spinner fa-pulse"></i>
        </div>
      }
      {error && <div>{error}</div>}
      {categories.map((category) =>
        <Category key={category.id} {...category} />
      )}
    </React.Fragment>
    }
    </AuthRenderProp>
  }
}

export default Categories
