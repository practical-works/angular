import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root/root.component';
import { ChampionComponent } from './champion/champion.component';
import { HighlightDirective } from './highlight.directive';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    RootComponent,
    ChampionComponent,
    HighlightDirective,
    FilterPipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {}
