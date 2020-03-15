const initialState = {
  username: '',
  password: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      const { data } = action;
      return { ...state, ...data }
    default:
      return state
  };
}