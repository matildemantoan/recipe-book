import { Action } from '@ngrx/store';

export const LOGIN_START = '[Auth] Login';
export const SIGNUP_START = '[Auth] Sign Up';
export const AUTH_SUCCESS = '[Auth] Login Start';
export const AUTH_FAIL = '[Auth] Login Fail';
export const AUTO_LOGIN = '[Auth] Auto Login';
export const CLEAR_ERROR = '[Auth] Clear Error';
export const LOGOUT = '[Auth] Logout';

export type authActionsType =
  | LoginStart
  | Logout
  | AuthSuccess
  | AuthFail
  | SignUpStart
  | ClearError
  | AutoLogin;

export class LoginStart implements Action {
  readonly type = LOGIN_START;
  constructor(
    public payload: {
      email: string;
      password: string;
    }
  ) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class AuthSuccess implements Action {
  readonly type = AUTH_SUCCESS;
  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
      redirect: boolean;
    }
  ) {}
}
export class AuthFail implements Action {
  readonly type = AUTH_FAIL;
  constructor(public payload: string) {}
}
export class SignUpStart implements Action {
  readonly type = SIGNUP_START;
  constructor(
    public payload: {
      email: string;
      password: string;
    }
  ) {}
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}
