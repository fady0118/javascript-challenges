// api calling function
async function checkContrast(fcolor, bcolor,element) {
    let url = `https://webaim.org/resources/contrastchecker/?fcolor=${fcolor}&bcolor=${bcolor}&api`;
    console.log(`checking: ${url}`)
    try {
        let response  = await fetch(url);
        if(!response.ok){
            throw new Error(response.status);
        }
        let result = await response.json();
        console.log(result);
        element.textContent = `contrast ratio: ${result.ratio} - ${(result.AA)==='pass'?'AA ✅':'AA ❌'}`;
    } catch (error) {
        console.log(error)
    }
}

async function checkAll() {
  console.log("check all fn");
  const elements = document.querySelectorAll("main>p");

  elements.forEach((element) => {
    const computedStyles = window.getComputedStyle(element);
    const bcolor = standardize_color(computedStyles.backgroundColor);
    const fcolor = standardize_color(computedStyles.color);
    checkContrast(fcolor, bcolor, element);
  });
}

// change format to hex
function standardize_color(str) {
  let ctx = document.createElement("canvas").getContext("2d");
  ctx.fillStyle = str; // '#FFFFFF'
  let code = ctx.fillStyle.slice(1); // remove '#' -> FFFFFF
  return code.toUpperCase();
}

document.getElementById('checkAll').addEventListener('click',checkAll)