// api calling function
async function checkContrast(fcolor, bcolor) {
  let url = `https://webaim.org/resources/contrastchecker/?fcolor=${fcolor}&bcolor=${bcolor}&api`;
  console.log(`checking: ${url}`);
  try {
    let response = await fetch(url);
    let result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
const elements = document.querySelectorAll("main>p");
const computedStyles = window.getComputedStyle(elements[0]);
const bcolor = standardize_color(computedStyles.backgroundColor);
const fcolor = standardize_color(computedStyles.color);
checkContrast(fcolor, bcolor);

// change format to hex
function standardize_color(str) {
  let ctx = document.createElement("canvas").getContext("2d");
  ctx.fillStyle = str; // '#FFFFFF'
  let code = ctx.fillStyle.slice(1); // remove '#' -> FFFFFF
  return code.toUpperCase();
}
