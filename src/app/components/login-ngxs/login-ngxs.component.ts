import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store, Select } from "@ngxs/store";

import { Login, Logout } from "../../models/state-models";
import { AuthState } from "../../state/auth-state";
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({
  selector: "app-login-ngxs",
  templateUrl: "./login-ngxs.component.html",
  styleUrls: ["./login-ngxs.component.css"],
})
export class LoginNgxsComponent implements OnInit {
  username: string;
  password: string;
  error: string;

  @Select(AuthState.isLoggedIn) loggedIn$: Observable<boolean>;
  @Select(AuthState.username) username$: Observable<string>;

  constructor(
    private store: Store,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {}

  doLogin() {
    const payload = {
      username: this.username,
      password: this.password,
    };

    this.authService.signIn(payload).subscribe({
      next: () => {
        this.error = "";
        this.store.dispatch(new Login(payload));
      },
      error: (err) => (this.error = err),
    });
  }

  logout(): void {
    this.store.dispatch(new Logout());
  }
}
