import { deleteRecipeSuccess, deleteRecipeFail, getRecipe } from '../actions';
import { ofType } from 'redux-observable';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const HOST = 'https://culinary-site.herokuapp.com';

export const requestDeleteRecipeEpic = action$ => action$.pipe(
  ofType('DELETE_RECIPE_REQUEST'),
  switchMap((action) => {
    return ajax({
      url: `${HOST}/delete-recipes/${action.payload}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'rxjs-custom-header': 'Rxjs'
      }
    }).pipe(
      map(res => deleteRecipeSuccess(res)),
      map(() => getRecipe()),
      catchError(err => of(deleteRecipeFail(err)))
    )
  })
);