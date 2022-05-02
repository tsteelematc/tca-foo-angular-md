import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayGameComponent } from './play-game/play-game.component';
import { SetupGameComponent } from './setup-game/setup-game.component';

const routes: Routes = [
  { path: "", component: HomeComponent}
  , { path: "setup", component: SetupGameComponent}
  , { path: "play", component: PlayGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
