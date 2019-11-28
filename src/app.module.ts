import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app/app-routing.module";
import { AppComponent } from "./app/app.component";
import { HeaderBarComponent } from "./app/header-bar/header-bar.component";
import {
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatRippleModule,
  MatButtonModule,
  MatSnackBarModule
} from "@angular/material";
import { LoginCardComponent } from "./app/login-card/login-card.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HttpInfo } from "./services";
import { UserService } from "./services/user-service";

@NgModule({
  declarations: [AppComponent, HeaderBarComponent, LoginCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatRippleModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [HttpInfo, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
