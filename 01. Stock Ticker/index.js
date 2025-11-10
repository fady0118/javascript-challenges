const name = document.getElementById("Name");
const symbol = document.getElementById("Symbol");
const price = document.getElementById("Price");
const time = document.getElementById("Time");

// data array
let data = [{ name: "QtechAI", data: [] }];

// generate new data
function getStockData() {
  let date = new Date();
  return {
    name: "QtechAI",
    symbol: "QTA",
    price: (Math.random() * 3).toFixed(3),
    time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
  };
}
// render the data
function renderStockTicker(stockData) {
  const lastIndex = stockData.data.length - 1;
  // update stock text
  name.textContent = `Name: ${stockData.data[lastIndex].name}`;
  symbol.textContent = `Symbol: ${stockData.data[lastIndex].symbol}`;
  price.textContent = `Price: ${stockData.data[lastIndex].price}`;
  time.textContent = `Time: ${stockData.data[lastIndex].time}`;
  // create indicator
  let indicator = document.createElement("span");
  indicator.innerHTML = "arrow_drop_up";
  indicator.classList.add("material-symbols-outlined", "arrow-icon");
  price.appendChild(indicator);
  // set indicator style
  if (stockData.data[lastIndex].price > stockData.data[lastIndex - 1].price) {
    indicator.classList.add("green-arrow");
  } else if (
    stockData.data[lastIndex].price < stockData.data[lastIndex - 1].price
  ) {
    indicator.classList.add("red-arrow");
  } else {
    indicator.classList.add("grey-arrow");
  }
}

// update the data
let update = setInterval(() => {
  // filter for QtechAI
  let qTechAIData = data.find((comp) => comp.name === "QtechAI");
  qTechAIData.data.push(getStockData());
  renderStockTicker(qTechAIData);
}, 3000);
