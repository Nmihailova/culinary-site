import { addRecipeSuccess, addRecipeFail } from '../actions';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

const HOST = 'https://culinary-site.herokuapp.com';

export const requestAddRecipeEpic = action$ => action$.pipe(
  ofType('ADD_RECIPE_REQUEST'),
  switchMap((action) => {
    return ajax({
      url: `${HOST}/add-new-recipe`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'rxjs-custom-header': 'Rxjs'
      },
      body: action.payload
    }).pipe(
      map(res => addRecipeSuccess(res)),
      map(res => document.location.href = `/show-recipe/${res.payload.response._id}`),
      catchError(err => of(addRecipeFail(err)))
    )
  })
);

