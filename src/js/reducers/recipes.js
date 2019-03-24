const initialState = {
    isRecipedAdded: false,
    recipeList: []
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
  
      default:
        return state;
    }
  };
  
  export default recipesReducer;