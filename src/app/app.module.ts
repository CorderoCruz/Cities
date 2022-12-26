import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { LondonComponent } from './london/london.component';
import { ParisComponent } from './paris/paris.component';
import { TokyoComponent } from './tokyo/tokyo.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    RouterLink,
  ],
  declarations: [
    AppComponent,
    LondonComponent,
    ParisComponent,
    TokyoComponent,
    TabsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
