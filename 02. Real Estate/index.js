import { propertyForSaleArr } from "./properties/propertyForSaleArr.js";
import { placeholderPropertyObj } from "./properties/placeholderPropertyObj.js";
const main = document.getElementById("main");

function renderCards(propertyArr = [placeholderPropertyObj]) {

  let properties = propertyArr.map((property) => {
    let {image, propertyLocation, priceGBP, comment, roomsM2} = property;
    return `<section class="card">
            <img src="./images/${image}">
            <div class="card-right">
                <h2>${propertyLocation}</h2>
                <h3>${priceGBP}</h3>
                <p>${comment}</p>
                <h3>${roomsM2.reduce((total,acc)=>total+acc,0)} m<sup>2</sup></h3>
            </div>
        </section>
        `;
  }).join('');
  console.log(properties)
  main.innerHTML = properties;
}
renderCards(propertyForSaleArr);
