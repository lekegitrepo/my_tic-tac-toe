export class UI {

  constructor(){
  }

  tileMarker(tile, token){
    if(tile.textContent == ''){
      tile.textContent = token;
    }
  }
}