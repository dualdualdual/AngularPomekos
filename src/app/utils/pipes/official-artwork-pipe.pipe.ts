import { Pipe, PipeTransform } from '@angular/core';
import {DreamWorld, Home, OfficialArtwork, OtherModel, Pokemon} from "../../interfaces";

@Pipe({
  name: 'officialArtworkPipe'
})
export class OfficialArtworkPipePipe implements PipeTransform {

  transform(value: Pokemon): string {
    let Other : OtherModel = {
      dream_world:    value.sprites.other!.dream_world,
      home:           value.sprites.other!.home,
      official_artwork: value.sprites.other!["official-artwork"]
    }

    return Other.official_artwork.front_default;
  }

}
