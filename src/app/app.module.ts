import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiModule} from '@kikstart/ui'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
