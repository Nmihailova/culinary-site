import { combineEpics } from 'redux-observable';
import { requestDeleteRecipeEpic } from './delete';
import { requestUpdateRecipesEpic } from './update';
import { requestGetRecipesEpic } from './get';
import { requestAddRecipeEpic } from './add';

const rooteEpic = combineEpics(
  requestAddRecipeEpic,
  requestDeleteRecipeEpic,
  requestGetRecipesEpic,
  requestUpdateRecipesEpic
);

export default rooteEpic;
