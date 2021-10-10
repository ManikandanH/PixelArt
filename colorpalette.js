import { DEFAULT_ROWS, DEFAULT_COLUMNS } from "./constants.js";
import { getElementById, gridCreator } from "./utils.js";

export class ColorPalette {
  constructor(store, rows = DEFAULT_ROWS) {
    this.store = store;
    this.rows = rows;
    this.columns = DEFAULT_COLUMNS;
    this.colorGrid = getElementById("color-grid");
  }

  colorPaletteHandler = (event) => {
    const parentChildNodes = event.currentTarget.parentNode.childNodes;
    for (let i = 0; i < parentChildNodes.length; i++) {
      for (let j = 0; j < parentChildNodes[i].childNodes.length; j++) {
        if (parentChildNodes[i].childNodes[j].style.transform !== "") {
          parentChildNodes[i].childNodes[j].style.transform = "";
        }
      }
    }
    event.target.style.transform = "scale(1.1)";
    this.setStore(event.target.style.backgroundColor);
  };

  setStore = (bgColor) => {
    this.store().setStore({
      ...this.store().getStore(),
      currentColor: bgColor
    })
  }

  init = () => {
    const rows = {
      length: this.rows,
      elementType: 'div',
      props: {
        class: "row",
      },
      listeners: [{
        type: "click",
        eventHandler: this.colorPaletteHandler,
      }],
    };
    const columns = {
      length: this.columns,
      elementType: 'div',
      props: {
        class: "cell",
      },
      listeners: []
    };
    return this.colorGrid.appendChild(gridCreator(rows, columns, true));
  };
}
