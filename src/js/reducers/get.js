const initialState = {
    recipeList: []
};
  
function getReducer (state = initialState, action) {
    switch (action.type) {
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

export default getReducer;