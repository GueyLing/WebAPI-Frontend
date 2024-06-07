import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CrudPlayersComponent } from './crud-players/crud-players.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrudPlayersComponent,
    AddPlayerComponent,
    EditPlayerComponent,
    RegisterComponent,
    UserDashboardComponent,
    PlayerDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
