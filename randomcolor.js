function randomColorCodeGenerator() {
  const letters = "0123456789ABCDEF";
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters.charAt(Math.floor(Math.random() * 16));
  }
  return color;
}

const alreadyGeneratedColors = [];
export function setRandomColor(element) {
  const randomColor = randomColorCodeGenerator();
  if (alreadyGeneratedColors.includes(randomColor)) {
    return setRandomColor(element);
  }
  element.style.backgroundColor = randomColor;
  alreadyGeneratedColors.push(randomColor);
  return element;
}
