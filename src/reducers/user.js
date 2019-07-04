export default (state = { users:[] }, action) => {
  switch(action.type) {
    case 'CREATE_USER':
      return {
        ...state,
        users: [...state.users, action.payload.user]
      }
    default:
      return state
  }
}