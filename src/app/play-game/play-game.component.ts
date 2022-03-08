import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gameResult, GameService } from '../game.service';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {

  constructor(
    private gameSvc: GameService
    , private routerSvc: Router
  ) { }

  ngOnInit(): void {
  }

  endGame = () => {

    // Add a new game result to the service.
    this.gameSvc.addGameResult({
      start: this.gameSvc.currentGame.start
      , end: new Date().toISOString()
      , players: this.gameSvc.currentGame.players.map(x => ({
        name: x 
        , order: 0
      }))
      , winner: "Suzzie"
    });

    // Navigate back to the Home component.
    this.routerSvc.navigateByUrl("/");
  };

}
