import { getStockData } from "./fakeStockApi.js";

const nameEl = document.getElementById("Name");
const symbolEl = document.getElementById("Symbol");
const priceEl = document.getElementById("Price");
const timeEl = document.getElementById("Time");

// data array
let data = [{ name: "QtechAI", data: [], sum: 250 }];

// render the data
function renderStockTicker(stockData) {
  const lastIndex = stockData.data.length - 1;
  console.log("inside render", stockData.data[lastIndex]);
  // update stock text
  let { name, symbol, price, time } = stockData.data[lastIndex];
  nameEl.innerHTML = `Name: ${name}`;
  symbolEl.innerHTML = `Symbol: ${symbol}`;
  priceEl.innerHTML = `Price: ${stockData.sum} <span class="percentage">(${(
    (stockData.data[lastIndex].price / stockData.sum) *
    100
  ).toFixed(3)}%)</span>`;
  timeEl.innerHTML = `Time: ${time}`;
  // create indicator
  let indicator = document.createElement("span");
  indicator.innerHTML = "arrow_drop_up";
  indicator.classList.add("material-symbols-outlined");
  // set indicator style
  if (stockData.data.length > 1) {
    if (stockData.data[lastIndex].price > 0.05) {
      indicator.classList.add("green-arrow");
    } else if (stockData.data[lastIndex].price < -0.05) {
      indicator.classList.add("red-arrow");
    } else {
      indicator.classList.add("grey-arrow");
    }
  }
  priceEl.appendChild(indicator);
}

// update the data
function updateData() {
  // filter for QtechAI
  let qTechAIData = data.find((comp) => comp.name === "QtechAI");
  qTechAIData.data.push(getStockData());
  qTechAIData.sum = Number(
    (
      qTechAIData.sum + qTechAIData.data[qTechAIData.data.length - 1].price
    ).toFixed(3)
  );
  console.log(qTechAIData);
  renderStockTicker(qTechAIData);
}
updateData();
let update = setInterval(updateData, 3000);
