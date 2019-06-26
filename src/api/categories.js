import axios from 'axios'

const massage = (categories) =>
 categories.map(({ categories }) => ({
    id: categories.id,
    name: categories.name,
  }))

/*class Category {
  constructor(id, name) {
    this.id = id
    this.name = name
  }
}*/

export const getCategories = () =>
axios.get('https://developers.zomato.com/api/v2.1/categories', {
  headers: { 'user-key': process.env.REACT_APP_ZOMATOKEY },
})
.then(({ data }) => massage(data.categories))