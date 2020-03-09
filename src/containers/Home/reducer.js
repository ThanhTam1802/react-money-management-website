export default (state = {nan: 1}, action) => {
  switch (action.type) {
   case 'ADD_DATE':
    return {
     result: action.data
    }
   default:
    return state
  }
 }