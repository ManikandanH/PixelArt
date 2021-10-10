function randomColorCodeGenerator() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters.charAt(Math.floor(Math.random() * 16));
  }
  return color;
}

const alreadyGeneratedColors = [];
function setRandomColor(element) {
  const randomColor = randomColorCodeGenerator();
  if (alreadyGeneratedColors.includes(randomColor)) {
    return setRandomColor(element);
  }
  element.style.backgroundColor = randomColor;
  alreadyGeneratedColors.push(randomColor);
  return element;
}

export function createElement(elementDetails) {
  const el = document.createElement(elementDetails.elementType);
  for (let prop in elementDetails.props) {
    el.setAttribute(prop, elementDetails.props[prop]);
  }
  for (let i = 0; i < elementDetails.listeners.length; i++) {
    el.addEventListener(
      elementDetails.listeners[i].type,
      elementDetails.listeners[i].eventHandler
    );
  }

  return el;
}

export function getElementById(id) {
  return document.getElementById(id);
}

export function gridCreator(rows, columns, isColoredGrid = false) {
  const wrapper = document.createElement("div");

  for (let i = 0; i < rows.length; i++) {
    const rowElement = createElement({
      ...rows,
      props: { ...rows.props, id: `rows-${i + 1}` },
    });
    for (let j = 0; j < columns.length; j++) {
      const col = isColoredGrid
        ? setRandomColor(
            createElement({
              ...columns,
              props: { ...columns.props, id: `cell-${j + 1}` },
            })
          )
        : createElement({
            ...columns,
            props: { ...columns.props, id: `cell-${j + 1}` },
          });
      rowElement.appendChild(col);
    }
    wrapper.appendChild(rowElement);
  }
  return wrapper;
}
