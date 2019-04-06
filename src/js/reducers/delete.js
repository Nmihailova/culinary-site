const initialState = {
    isRecipeDeleteSuccess: false
  };
  
  function deleteReducer (state = initialState, action) {
    switch (action.type) {
      case 'DELETE_RECIPE_SUCCESS':
        return { ...state, isRecipeDeleteSuccess: true };
  
      case 'DELETE_RECIPE_FAIL':
        return { ...state, isRecipeDeleteSuccess: false };

      default:
        return state;
    }
  };
  
  export default deleteReducer;