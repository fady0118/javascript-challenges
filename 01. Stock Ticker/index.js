const name = document.getElementById('Name');
const symbol = document.getElementById('Symbol');
const price = document.getElementById('Price');
const time = document.getElementById('Time');
// .toString().padStart(2)
let data = [{name:'QtechAI',data:[]}]

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
    const lastIndex = stockData.data.length-1;
    let changeIndicator = (stockData.data[lastIndex].price>stockData.data[lastIndex-1].price)?'<':(stockData.data[lastIndex].price<stockData.data[lastIndex-1].price)?'>':'>>';
    console.log(stockData)
    
    name.textContent = `Name: ${stockData.data[lastIndex].name}`;
    symbol.textContent = `Symbol: ${stockData.data[lastIndex].symbol}`;
    price.textContent = `Price: ${stockData.data[lastIndex].price} ${changeIndicator}`;
    time.textContent = `Time: ${stockData.data[lastIndex].time}`;
}

let update = setInterval(()=>{
    let qTechAIData = data.find((comp)=>comp.name === 'QtechAI');
    qTechAIData.data.push(getStockData());
    renderStockTicker(qTechAIData)
},5000)