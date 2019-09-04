import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent, UserComponent } from './components/index';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, // Módulo utilizado para fazer chamdas HTTP/HTTPS
    FormsModule, // para fazer formulários
    ReactiveFormsModule // para fazer formulários
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
