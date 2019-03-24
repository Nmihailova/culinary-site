import axios from 'axios';

const HOST = "http://localhost:3001";

export const requestLeaveFeedbackApi = data => {
    return dispatch => {
      dispatch({
        type: 'LEAVE_FEEDBACK_REQUEST',
        payload: data
      })
  
      axios.post(`${HOST}/leave-feedback`, data)
        .then(res => {
          dispatch({
            type: 'LEAVE_FEEDBACK_SUCCESS',
            payload: res.data
          })
        })
        .catch(err => {
          dispatch({
            type: 'LEAVE_FEEDBACK_FAIL',
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
  
      axios.get(`${HOST}/api/get-recipes`)
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