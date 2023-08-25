import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input()
	id:string = "0"

	gameCover:string = ""
	gameLabel:string=""
	gameType:string =""
	gamePrice:string = ""

  constructor() { }

  ngOnInit(): void {
	this.setValuesToComponent(Number(this.id))
  }

  setValuesToComponent(id:number){
    const result = dataFake.filter(game => game.id == id)[0]

    console.log(result)
    this.gameCover = result.image
    this.gameLabel = result.game
    this.gameType = result.gameType
	this.gamePrice = 'R$ ' + result.price.toString()
  }

}
