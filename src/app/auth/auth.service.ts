import { Injectable } from '@angular/core';
import * as fromAppRed from '../store/app.reducer';
import { Store } from '@ngrx/store';
import * as fromAuthActions from './store/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenExpTimer: any;

  constructor(private store: Store<fromAppRed.AppState>) {}

  autoLogOut(expDuration: number) {
    console.log(expDuration);
    this.tokenExpTimer = setTimeout(() => {
      this.store.dispatch(new fromAuthActions.Logout());
    }, expDuration);
  }

  clearLogoutTimer() {
    if (this.tokenExpTimer) {
      clearTimeout(this.tokenExpTimer);
      this.tokenExpTimer = null;
    }
  }
}
