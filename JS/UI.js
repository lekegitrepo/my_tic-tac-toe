export class UI {

  constructor(){
  }

  tileMarker(tile, token){
    if(tile.textContent == ''){
      tile.textContent = token;
    }
  }

  hideElement(element){
    element.style.display = 'none';
  }

  displayElementBlock(element){
    element.style.display = 'block';
  }

  displayElementInline(element){
    element.style.display = 'inline';
  }

  displayElementsBlock(elements){
    elements.forEach(element => {
      element.style.display = 'block'
    });
  }
}