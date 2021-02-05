import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AppComponent }  from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    SignupFormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
