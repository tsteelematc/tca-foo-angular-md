import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public gameSvc: GameService) { }

  ngOnInit() {
    this.loadGames();
  }


  gamesPlayed = 0;
  shortestGameDuration = 0;
  
  leaderboardData: any[] = [];
  leaderboardColumns = ["wins", "losses", "winningPercentage", "name"];

  emailAddressForEditing = "";

  saveEmailAddress = () => {
    this.gameSvc.saveEmailAddress(this.emailAddressForEditing);
    this.loadGames();
  };

  resetEmailAddress = () => {
    this.gameSvc.saveEmailAddress("");
    this.loadGames();
  };

  loadGames = async () => {
    await this.gameSvc.loadEmailAddress();
    await this.gameSvc.loadGameResults();

    
    this.gamesPlayed = this.gameSvc.gameResults.length;
    this.shortestGameDuration = this.gameSvc.calculateShortestGame() / 1000 / 60;
    this.leaderboardData = this.gameSvc.calculateLeaderBoard();
    console.log(this.leaderboardData);

  };

}
