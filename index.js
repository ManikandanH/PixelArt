import { ColorPalette } from "./colorpalette.js";
import { Grid } from "./grid.js";
import { store, state } from "./store.js";

class App {
  constructor(store){
    this.store = store;
    this.colorPalette = () => {};
    this.mainGrid = () => {};
    this.appMount();
  }

  appMount(){
    this.renderColorPalette();
    this.renderGrid();
  }

  renderColorPalette(){
    this.colorPalette = new ColorPalette(this.store).init
  }

  renderGrid(){
    this.mainGrid = new Grid(this.store).init
  }

  render(){
    this.colorPalette();
    this.mainGrid();
  }
}

new App(store(state)).render();