import { updateRecipeSuccess, updateRecipeFail, getRecipe } from '../actions';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

const HOST = 'https://culinary-site.herokuapp.com';

export const requestUpdateRecipesEpic = action$ => action$.pipe(
  ofType('UPDATE_RECIPE_REQUEST'),
  switchMap((action) => {
    return ajax({
      url: `${HOST}/update-recipe`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'rxjs-custom-header': 'Rxjs'
      },
      body: action.payload
    }).pipe(
      map(res => updateRecipeSuccess(res)),
      map(() => getRecipe()),
      catchError(err => of(updateRecipeFail(err)))
    )
  })
);