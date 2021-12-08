const listingEl = document.getElementById("listing");

async function fetchCoinMarketCap() {
  let cryptoListing = await fetch("http://127.0.0.1:8000/crypto/listing");
  cryptoListing = await cryptoListing.json();

  return cryptoListing.data.data;
}

const displayListing = async () => {
  const coinData = await fetchCoinMarketCap();

  coinData.forEach((coin) => {
    console.log(coin);
    const card = `<div class ='list-item'>
    <h2>Name: ${coin.name}</h2>
    <span>symbol: ${coin.symbol}</span>
    <div>Total supply :${coin.total_supply}</div>
    <div>USD/${coin.name}: ${coin.quote?.USD.price}<div>
    </div>`;
    listingEl.innerHTML += card;
  });
};

document.querySelector('.load-btn').addEventListener('click', displayListing)