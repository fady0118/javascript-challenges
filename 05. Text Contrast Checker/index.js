// api calling function
async function checkContrast(fcolor, bcolor) {
    let url = `https://webaim.org/resources/contrastchecker/?fcolor=${fcolor}&bcolor=${bcolor}&api`;
    console.log(`checking: ${url}`)
    try {
        let response  = await fetch(url);
        let result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}
const elements = document.querySelectorAll("main>p");
const computedStyles = window.getComputedStyle(elements[0]);
checkContrast(fcolor, bcolor);