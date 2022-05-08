import { User } from '../user.model';
import * as fromAuthActions from './auth.actions';

export interface authState {
  user: User;
  authError: string;
  loading: boolean;
}

const initialState: authState = {
  user: null,
  authError: null,
  loading: false,
};

export function authReducer(
  state = initialState,
  action: fromAuthActions.authActionsType
) {
  // console.log(state);
  switch (action.type) {
    case fromAuthActions.AUTH_SUCCESS:
      const newUser = new User(
        action.payload.email,
        action.payload.userId,
        action.payload.token,
        action.payload.expirationDate
      );
      return {
        ...state,
        user: newUser,
        authError: null,
        loading: false,
      };
    case fromAuthActions.LOGOUT:
      return {
        ...state,
        user: null,
      };
    case fromAuthActions.AUTH_SUCCESS:
    case fromAuthActions.SIGNUP_START:
      return {
        ...state,
        authError: null,
        loading: true,
      };
    case fromAuthActions.AUTH_FAIL:
      return {
        ...state,
        user: null,
        authError: action.payload,
        loading: false,
      };
    case fromAuthActions.CLEAR_ERROR:
      return {
        ...state,
        user: null,
        authError: null,
      };
    default:
      return state;
  }
}
