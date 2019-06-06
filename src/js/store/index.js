import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import combineReducers from '../reducers/index';
import rootEpic from '../epics/index';

const epicMiddleware = createEpicMiddleware();

const initialState = {
  addReducer: {
    isAddRecipeOpen: false,
    isRecipeAdded: false
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
const store = createStore(combineReducers, initialState, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export default store;