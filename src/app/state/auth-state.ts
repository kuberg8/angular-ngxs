import { State, Action, StateContext, Selector } from "@ngxs/store";
import {
  AuthStateModel,
  Login,
  Logout,
} from "../models/state-models";

@State<AuthStateModel>({
  name: "auth",
  defaults: {
    username: null,
    loggedIn: false,
  },
})
export class AuthState {
  @Selector()
  static isLoggedIn(state: AuthStateModel) {
    return state.loggedIn;
  }

  @Selector()
  static username(state: AuthStateModel) {
    return state.username;
  }

  @Action(Login)
  login({ patchState }: StateContext<AuthStateModel>, { payload }: Login) {
    patchState({
      username: payload.username,
      loggedIn: true,
    });
  }

  @Action(Logout)
  logpit({ patchState }: StateContext<AuthStateModel>) {
    patchState({
      username: null,
      loggedIn: false,
    });
  }
}
