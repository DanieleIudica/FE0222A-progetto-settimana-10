import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// creazione rotte
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CompletatiComponent } from './components/completati/completati.component';
import { FormsModule } from '@angular/forms';

// creazione rotte
const routes: Route[]=[
  {
    path: '',
    component: HomeComponent,
},
{
  path: 'completati',
  component: CompletatiComponent,
}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CompletatiComponent
  ],
  imports: [
    BrowserModule,
    // creazione rotte
    RouterModule.forRoot(routes),
    // importo formsModule
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
