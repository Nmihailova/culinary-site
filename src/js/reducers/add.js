const initialState = {
  isAddRecipeOpen: false,
  isRecipeAdded: false
};

function addReducer (state = initialState, action) {
  switch (action.type) {
    case 'ADD_RECIPE_SUCCESS':
      return { ...state, isRecipeAdded: true };

    case 'ADD_RECIPE_FAIL':
      return { ...state, isRecipeAdded: false };

    case 'OPEN_ADD_RECIPE':
      return { ...state, isAddRecipeOpen: !state.isAddRecipeOpen };

    default:
      return state;
  }
};

export default addReducer;