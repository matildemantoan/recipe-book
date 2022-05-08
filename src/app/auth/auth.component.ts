import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as fromAppRed from '../store/app.reducer';
import * as fromAuthActions from '../auth/store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit, OnDestroy {
  public isLoginMode = true;
  public isLoading = false;
  public error: string = null;
  private closeSubscr: Subscription;
  private storeSubscr: Subscription;

  constructor(private store: Store<fromAppRed.AppState>) {}

  ngOnInit(): void {
    this.storeSubscr = this.store.select('auth').subscribe((authState) => {
      this.isLoading = authState.loading;
      this.error = authState.authError;
    });
  }

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {
      this.store.dispatch(
        new fromAuthActions.LoginStart({ email: email, password: password })
      );
    } else {
      this.store.dispatch(
        new fromAuthActions.SignUpStart({ email: email, password: password })
      );
    }
    form.reset();
  }

  onCloseError() {
    this.store.dispatch(new fromAuthActions.ClearError());
  }

  ngOnDestroy() {
    if (this.closeSubscr) {
      this.closeSubscr.unsubscribe();
    }
    if (this.storeSubscr) {
      this.storeSubscr.unsubscribe();
    }
  }
}
