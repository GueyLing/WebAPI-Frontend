import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CrudPlayersComponent } from './crud-players/crud-players.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { LoginComponent } from './login/login.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'crud_players', component: CrudPlayersComponent },
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'edit-player/:id', component: EditPlayerComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user_dashboard', component: UserDashboardComponent},
  { path:'player_details/:id', component: PlayerDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
