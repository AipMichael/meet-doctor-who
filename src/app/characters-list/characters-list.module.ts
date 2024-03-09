import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterListComponent } from './character-list/character-list.component';

@NgModule({
  declarations: [CharacterCardComponent, CharacterListComponent],
  imports: [CommonModule],
  exports: [CharacterListComponent],
})
export class CharactersListModule {}
