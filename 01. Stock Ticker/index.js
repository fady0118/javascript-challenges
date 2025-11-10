const name = document.getElementById('Name');
const symbol = document.getElementById('Symbol');
const price = document.getElementById('Price');
const time = document.getElementById('Time');
// .toString().padStart(2)
function getStockData(){
    let date = new Date();
    return {
        name: 'QtechAI',
        symbol: 'QTA',
        price: (Math.random()*3).toFixed(3),
        time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
}
function renderStockTicker(stockData){
    name.textContent = `Name: ${stockData.name}`;
    symbol.textContent = `Symbol: ${stockData.symbol}`;
    price.textContent = `Price: ${stockData.price}`;
    time.textContent = `Time: ${stockData.time}`;
}
let update = setInterval(()=>{
    renderStockTicker(getStockData())
},5000)