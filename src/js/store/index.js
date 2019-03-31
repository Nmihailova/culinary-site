import { createStore, applyMiddleware } from 'redux';
import combineReducers from '../reducers/index';
import thunk from 'redux-thunk';

const initialState = {
    recipesReducer: {
        isAddRecipeOpen: false,
        isRecipedAdded: false,
        recipeList: [],
        currentRecipeObj: {},
        isRecipeChoosen: false,
        isEditRecipeOpen: false,
        isRecipeUpdateSuccess: false
    }
};

const store = createStore(combineReducers, initialState, applyMiddleware(thunk));

export default store;