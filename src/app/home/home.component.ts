import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private gameSvc: GameService) { }

  async ngOnInit() {
  
    this.gamesPlayed = this.gameSvc.gameResults.length;

    this.shortestGameDuration = this.gameSvc.calculateShortestGame() / 1000 / 60;

    this.leaderboardData = this.gameSvc.calculateLeaderBoard();
  }


  gamesPlayed = 0;

  shortestGameDuration = 0;

  leaderboardData: any[] = [];
  leaderboardColumns = ["wins", "losses", "winningPercent", "name"];
}
