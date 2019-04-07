const initialState = {
    isRecipeChoosen: false,
    currentRecipeObj: {}
  };
  
function chooseReducer (state = initialState, action) {
    switch (action.type) {
        case 'SHOW_RECIPE': 
            return { ...state, isRecipeChoosen: true };
            
        case 'SET_CURRENT_RECIPE_OBJECT':
            return { ...state, currentRecipeObj: action.data};  
      
        default:
            return state;
    }
};

export default chooseReducer;