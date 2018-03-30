import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isSelected = false;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isSelected = !this.isSelected;
    this.change.emit( {newValue: this.isSelected} ); //notifying others that something has happened.
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
