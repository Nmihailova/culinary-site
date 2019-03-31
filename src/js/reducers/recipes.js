const initialState = {
    isAddRecipeOpen: false,
    isRecipedAdded: false,
    recipeList: [],
    currentRecipeId: '',
    isRecipeChoosen: false,
    isEditRecipeOpen: false,
    isRecipeUpdateSuccess: false
  };
  
  function recipesReducer (state = initialState, action) {
    switch (action.type) {
      case 'ADD_RECIPE_SUCCESS':
        return { ...state, isRecipedAdded: action.payload.message };
  
      case 'ADD_RECIPE_FAIL':
        return { ...state, isRecipedAdded: action.payload.message };
  
      case 'GET_RECIPE_LIST_REQUEST':
        return { ...state, recipeList: "Загрузка рецептов..." };
  
      case 'GET_RECIPE_LIST_SUCCESS':
        return { ...state, recipeList: action.payload };
  
      case 'GET_RECIPE_LIST_FAIL':
        return { ...state, recipeList: "Не удалось загрузить рецепты" };
  
      case 'UPDATE_RECIPE_SUCCESS':
        return { ...state, isRecipeUpdateSuccess: true };
  
      case 'UPDATE_RECIPE_FAIL':
        return { ...state, isRecipeUpdateSuccess: false };

      case 'OPEN_ADD_RECIPE':
        return { ...state, isAddRecipeOpen: !state.isAddRecipeOpen};

      case 'SET_CURRENT_RECIPE_ID':
        return { ...state, currentRecipeObj: action.data};

      case 'SHOW_RECIPE': 
        return { ...state, isRecipeChoosen: true };

      case 'OPEN_EDIT_RECIPE':
        return { ...state, isEditRecipeOpen: !state.isEditRecipeOpen};
  
      default:
        return state;
    }
  };
  
  export default recipesReducer;