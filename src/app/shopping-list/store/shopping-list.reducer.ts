import { Ingredient } from '../../shared/ingredient.model';
import * as slActions from './shopping-list.actions';

export interface slState {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const initialState: slState = {
  ingredients: [],
  editedIngredient: null,
  editedIngredientIndex: -1,
};

export function slReducer(
  state: slState = initialState,
  action: slActions.slActionsType
) {
  switch (action.type) {
    case slActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case slActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload],
      };
    case slActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const updatedIngr = { ...ingredient, ...action.payload };
      const updatedIngrs = [...state.ingredients];
      updatedIngrs[state.editedIngredientIndex] = updatedIngr;
      return {
        ...state,
        ingredients: updatedIngrs,
        editedIngredientIndex: -1,
        editedIngredient: null,
      };
    case slActions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((ig, igIndex) => {
          return igIndex !== state.editedIngredientIndex;
        }),
        editedIngredientIndex: -1,
        editedIngredient: null,
      };

    case slActions.START_EDIT:
      return {
        ...state,
        editedIngredientIndex: action.payload,
        editedIngredient: { ...state.ingredients[action.payload] },
      };
    case slActions.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1,
      };
    default:
      return state;
  }
}
