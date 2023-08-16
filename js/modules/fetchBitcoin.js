export default function fetchBitcoin(url, target) {
  fetch(url)
    .then(response => response.json())
    .then(precoBtc => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / precoBtc[0].ask).toFixed(4);
    })
    .catch(erro => {
      console.log(Error(erro));
    });
}
