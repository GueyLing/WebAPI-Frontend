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
import { AdminGuard } from './admin.guard';
import { UserGuard } from './user.guard';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'crud_players', component: CrudPlayersComponent, canActivate: [AdminGuard] },
  { path: 'add-player', component: AddPlayerComponent, canActivate: [AdminGuard] },
  { path: 'edit-player/:id', component: EditPlayerComponent, canActivate: [AdminGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'user_dashboard', component: UserDashboardComponent, canActivate: [UserGuard]},
  { path:'player_details/:id', component: PlayerDetailComponent, canActivate: [UserGuard]}
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
