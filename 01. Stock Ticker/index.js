const name = document.getElementById("Name");
const symbol = document.getElementById("Symbol");
const price = document.getElementById("Price");
const time = document.getElementById("Time");

// data array
let data = [{ name: "QtechAI", data: [], sum: 250 }];

// generate new data
function getStockData() {
  let date = new Date();
  let change = Number((Math.random() * 6 - 3).toFixed(3));
  console.log("change",change)
  return {
    name: "QtechAI",
    symbol: "QTA",
    price: change,
    time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
  };
}
// render the data
function renderStockTicker(stockData) {
  console.log("inside render", stockData);
  const lastIndex = stockData.data.length - 1;
  // update stock text
  name.innerHTML = `Name: ${stockData.data[lastIndex].name}`;
  symbol.innerHTML = `Symbol: ${stockData.data[lastIndex].symbol}`;
  price.innerHTML = `Price: ${stockData.sum} <span class="percentage">(${(stockData.data[lastIndex].price/stockData.sum*100).toFixed(3)}%)</span>`;
  time.innerHTML = `Time: ${stockData.data[lastIndex].time}`;
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
  price.appendChild(indicator);
}

// update the data
function updateData() {
  // filter for QtechAI
  let qTechAIData = data.find((comp) => comp.name === "QtechAI");
  qTechAIData.data.push(getStockData());
  qTechAIData.sum = Number((qTechAIData.sum + qTechAIData.data[qTechAIData.data.length - 1].price).toFixed(3));
  console.log(qTechAIData);
  renderStockTicker(qTechAIData);
}
updateData();
let update = setInterval(updateData, 3000);
