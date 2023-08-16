import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `
    <h3>${animal.specie}</h3>
    <span data-numero>${animal.total}</span> 
    `;

    return div;
  }

  // Preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Anima os números de cada animal
  function animaAnimaisNumero() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Puxa os animais através de um arquivo JSON
  // e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      // Fetch e espera a resposta
      const animaisResponse = await fetch(url);
      // Transforma a resposta em json
      const animaisJSON = await animaisResponse.json();
      // Como a API está hospedada em repositório gratuito
      // ele faz umas modificações no arquivo, inserindo metadados,
      // por isso o acesso a propriedade record.
      animaisJSON.record.forEach(animal => preencherAnimais(animal));
      animaAnimaisNumero();
    } catch (erro) {
      console.log(erro);
    }
  }

  // Cria a div contendo informacões
  // com o total de animais

  return criarAnimais();
}
