import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookauthorComponent } from './bookauthor/bookauthor.component';
import { HttpClientModule }    from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/bookauthor.reducers';
import { EffectsModule } from '@ngrx/effects';
import { BookauthorEffects } from './store/effects/bookauthor.effects';

@NgModule({
  declarations: [
    AppComponent,
    BookauthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      bookauthor: reducer
    }),
    EffectsModule.forRoot([BookauthorEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
