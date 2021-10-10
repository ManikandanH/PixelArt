import { DEFAULT_COLUMNS } from "./constants.js";
import { gridCreator, getElementById } from "./utils.js";

export class Grid {
  constructor(store, rows = 8) {
    this.store = store;
    this.rows = rows;
    this.columns = DEFAULT_COLUMNS;
    this.gridWrapper = getElementById("pixel-grid");
  }

  gridWrapperHandler = (event) => {
    if (
      event.target.style.backgroundColor ===
      this.store().getStore().currentColor
    ) {
      event.target.style.backgroundColor = "";
    } else {
      if (
        event.target.style.backgroundColor === "" &&
        event.target.className.includes("cell")
      ) {
        event.target.style.backgroundColor =
          this.store().getStore().currentColor;
      }
    }
  };

  init = () => {
    const rows = {
      length: this.rows,
      elementType: "div",
      props: {
        class: "row",
      },
      listeners: [
        {
          type: "click",
          eventHandler: this.gridWrapperHandler,
        },
      ],
    };
    const columns = {
      length: this.columns,
      elementType: "div",
      props: {
        class: "cell",
      },
      listeners: []
    };
    return this.gridWrapper.appendChild(gridCreator(rows, columns));
  };
}
