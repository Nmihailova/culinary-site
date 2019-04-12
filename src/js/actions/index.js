import axios from 'axios';

const HOST = "https://culinary-site.herokuapp.com";

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

//api middlewares

export const requestAddRecipeApi = data => {
  return dispatch => {
    dispatch({
      type: 'ADD_RECIPE_REQUEST',
      payload: data
    })

    axios.post(`${HOST}/add-new-recipe`, data)
      .then(res => {
        dispatch(requestGetRecipesApi());
        document.location.href = `/show-recipe/${res.data._id}`;

        dispatch({
          type: 'ADD_RECIPE_SUCCESS',
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: 'ADD_RECIPE_FAIL',
          payload: err
        })
      })
  }
};

export const requestGetRecipesApi = () => {
  return dispatch => {
    dispatch({
      type: 'GET_RECIPE_LIST_REQUEST'
    })

    axios.get(`${HOST}/get-recipes`)
      .then(res => {
        dispatch({
          type: 'GET_RECIPE_LIST_SUCCESS',
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: 'GET_RECIPE_LIST_FAIL',
          payload: err
        })
      })
  }
};

export const requestUpdateRecipesApi = data => {
  return dispatch => {
    dispatch({
      type: 'UPDATE_RECIPE_REQUEST',
      payload: data
    })

    axios.put(`${HOST}/update-recipe`, data)
      .then(res => {
        dispatch(requestGetRecipesApi());
        dispatch({
          type: 'UPDATE_RECIPE_SUCCESS',
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: 'UPDATE_RECIPE_FAIL',
          payload: err
        })
      })
  }
};

export const requestDeleteRecipeApi = id => {
  return dispatch => {
    dispatch({
      type: 'DELETE_RECIPE_REQUEST',
      payload: id
    })

    axios.delete(`${HOST}/delete-recipes/${id}`)
      .then(res => {
        dispatch(requestGetRecipesApi());
        dispatch({
          type: 'DELETE_RECIPE_SUCCESS',
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: 'DELETE_RECIPE_FAIL',
          payload: err
        })
      })
  }
};