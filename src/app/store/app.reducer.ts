import * as fromSLRed from '../shopping-list/store/shopping-list.reducer';
import * as fromAuthRed from '../auth/store/auth.reducer';
import * as fromRecipesRed from '../recipes/store/recipes.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  shoppingList: fromSLRed.slState;
  auth: fromAuthRed.authState;
  recipes: fromRecipesRed.recipeState;
}

export const appReducer: ActionReducerMap<AppState> = {
  shoppingList: fromSLRed.slReducer,
  auth: fromAuthRed.authReducer,
  recipes: fromRecipesRed.recipeReducer,
};
