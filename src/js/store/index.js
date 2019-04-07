import { createStore, applyMiddleware } from 'redux';
import combineReducers from '../reducers/index';
import thunk from 'redux-thunk';

const initialState = {
    addReducer: {
        isAddRecipeOpen: false,
        isRecipedAdded: false
    },
    getReducer: {
        recipeList: []
    },
    chooseReducer: {
        currentRecipeObj: {},
        isRecipeChoosen: false
    },
    editReducer: {
        isEditRecipeOpen: false,
        isRecipeUpdateSuccess: false
    },
    deleteReducer: {
        isRecipeDeleteSuccess: false
    }
};
const store = createStore(combineReducers, initialState, applyMiddleware(thunk));

export default store;