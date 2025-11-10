export function getStockData() {
  let date = new Date();
  let change = Number((Math.random() * 6 - 3).toFixed(3));
  console.log("change",change)
  return {
    name: "QtechAI",
    symbol: "QTA",
    price: change,
    time: date.toLocaleTimeString(),
  };
}
// export {getStockData}