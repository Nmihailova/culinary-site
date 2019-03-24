import { createStore, applyMiddleware } from 'redux';
import combineReducers from '../reducers/index';
import thunk from 'redux-thunk';

const initialState = {
    recipesReducer: {
        isRecipedAdded: false,
        recipeList: []
    }
};

const store = createStore(combineReducers, initialState, applyMiddleware(thunk));

export default store;