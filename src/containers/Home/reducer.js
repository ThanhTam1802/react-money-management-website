const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
   case 'ADD_DATE':
    return {
     result: action.data
    }
   default:
    return state
  };
 }