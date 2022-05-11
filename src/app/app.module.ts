import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { LoginNgxsComponent } from "./components/login-ngxs/login-ngxs.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";
import { NavBarComponent } from "./components/static/nav-bar/nav-bar.component";
import { NgxsModule } from "@ngxs/store";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { AuthState } from "./state/auth-state";
import { AuthenticationService } from "./services/authentication.service";

import { ContactListComponent } from "./components/contact-list/contact-list.component";
import { CardComponent } from "./components/card/card.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginNgxsComponent,
    NavBarComponent,
    ContactListComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxsModule.forRoot([AuthState]),
    NgxsStoragePluginModule.forRoot({
      key: ["auth.username", "auth.loggedIn"],
    }),
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
