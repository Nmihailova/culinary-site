const initialState = {
    isEditRecipeOpen: false,
    isRecipeUpdateSuccess: false
  };
  
function editReducer (state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_RECIPE_SUCCESS':
            return { ...state, isRecipeUpdateSuccess: true };
  
        case 'UPDATE_RECIPE_FAIL':
            return { ...state, isRecipeUpdateSuccess: false };

        case 'OPEN_EDIT_RECIPE':
            return { ...state, isEditRecipeOpen: !state.isEditRecipeOpen};
      
          default:
              return state;
    }
};

export default editReducer;