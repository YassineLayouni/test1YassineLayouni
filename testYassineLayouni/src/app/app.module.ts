import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LegumeComponent } from './legume/legume.component';
import { ListLegumesComponent } from './list-legumes/list-legumes.component';

@NgModule({
  declarations: [
    AppComponent,
    LegumeComponent,
    ListLegumesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
