import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent
 ],
  imports: [
    BrowserModule,
    AppRouting
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
