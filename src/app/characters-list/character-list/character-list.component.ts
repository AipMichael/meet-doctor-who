import { Component, OnInit } from '@angular/core';

export interface CharacterStructure {
  id: string;
  name: string;
  description: string;
  status: CharacterStatusEnum;
  species: string;
  gender: string;
  placeOfOrigin: PlaceOfOriginStructure;
  jobs: string[];
  relationsWithTheDoctor: relationsWithTheDoctorEnum;
  actors: string[];
  image: string;
}

export enum CharacterStatusEnum {
  Alive = 'Alive',
  Dead = 'Dead',
}

export interface PlaceOfOriginStructure {
  name: string;
  link: string;
}

export enum relationsWithTheDoctorEnum {
  Companion = 'Companion',
  Friend = 'Friend',
  Fow = 'Foe',
  Neutral = 'Neutral',
  Self = 'Self',
}

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  public characters: CharacterStructure[] = [];
  ngOnInit(): void {
    this.characters = [];
  }
}
