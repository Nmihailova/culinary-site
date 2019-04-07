const initialState = {
    isAddRecipeOpen: false,
    isRecipedAdded: false
};

function addReducer (state = initialState, action) {
    switch (action.type) {
        case 'ADD_RECIPE_SUCCESS':
            return { ...state, isRecipedAdded: true };
  
        case 'ADD_RECIPE_FAIL':
            return { ...state, isRecipedAdded: false };

        case 'OPEN_ADD_RECIPE':
            console.log(!state.isAddRecipeOpen);
            return { ...state, isAddRecipeOpen: !state.isAddRecipeOpen};
    
        default:
            return state;
    }
};

export default addReducer;