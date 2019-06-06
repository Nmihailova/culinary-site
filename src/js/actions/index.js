

// const HOST = "https://culinary-site.herokuapp.com";

export const openAddRecipe = () => {
  return {
    type: 'OPEN_ADD_RECIPE'
  }
};

export const openEditRecipe = () => {
  return {
    type: 'OPEN_EDIT_RECIPE'
  }
};

export const setCurRecipeObj = (data) => {
  return {
    type: 'SET_CURRENT_RECIPE_OBJECT',
    data
  }
};

export const showRecipe = () => {
  return {
    type: 'SHOW_RECIPE'
  }
};

export const getRecipe = () => {
  return {
    type: 'GET_RECIPE_LIST_REQUEST'
  }
};

export const getRecipeSuccess = data => {
  return {
    type: 'GET_RECIPE_LIST_SUCCESS',
    payload: data
  }
};

export const getRecipeFail = err => {
  return {
    type: 'GET_RECIPE_LIST_FAIL',
    payload: err
  }
};

export const addRecipe = data => {
  return {
    type: 'ADD_RECIPE_REQUEST',
    payload: data
  }
};

export const addRecipeSuccess = res => {
  return {
    type: 'ADD_RECIPE_SUCCESS',
    payload: res
  }
};

export const addRecipeFail = err => {
  return {
    type: 'ADD_RECIPE_FAIL',
    payload: err
  }
};

export const updateRecipe = data => {
  return {
    type: 'UPDATE_RECIPE_REQUEST',
    payload: data
  }
};

export const updateRecipeSuccess = res => {
  return {
    type: 'UPDATE_RECIPE_SUCCESS',
    payload: res.data
  }
};

export const updateRecipeFail = err => {
  return {
    type: 'UPDATE_RECIPE_FAIL',
    payload: err
  }
};

export const deleteRecipe = id => {
  return {
    type: 'DELETE_RECIPE_REQUEST',
    payload: id
  }
};

export const deleteRecipeSuccess = res => {
  return {
    type: 'DELETE_RECIPE_SUCCESS',
    payload: res.data
  }
};

export const deleteRecipeFail = err => {
  return {
    type: 'DELETE_RECIPE_FAIL',
    payload: err
  }
};
