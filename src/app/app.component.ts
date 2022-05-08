import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAppRed from './store/app.reducer';
import * as fromAuthActions from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<fromAppRed.AppState>,
    @Inject(PLATFORM_ID) private platformId
  ) {}
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.store.dispatch(new fromAuthActions.AutoLogin());
    }
  }
}
