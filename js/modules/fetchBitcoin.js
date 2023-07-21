export default function initFetchBitcoin() {
  fetch('https://economia.awesomeapi.com.br/json/daily/BTC-BRL/0')
    .then(response => response.json())
    .then(precoBtc => {
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (1000 / precoBtc[0].ask).toFixed(4);
    })
    .catch(erro => {
      console.log(Error(erro));
    });
}
