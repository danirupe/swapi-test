export default (state, action) => {
  const { payload, type } = action

  switch (type) {
    case 'HANDLE_SKIN':
      return {
        ...state,
        skin: payload
      }
    default:
      return state
  }
}
