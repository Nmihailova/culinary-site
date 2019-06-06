import { getRecipeSuccess, getRecipeFail } from '../actions';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

const HOST = 'https://culinary-site.herokuapp.com';

export const requestGetRecipesEpic = action$ => action$.pipe(
  ofType('GET_RECIPE_LIST_REQUEST'),
  switchMap(() => {
    return ajax.getJSON(`${HOST}/get-recipes`).pipe(
      map(res => getRecipeSuccess(res)),
      catchError(error => of(getRecipeFail(error)))
    )
  })
);