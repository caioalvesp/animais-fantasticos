export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  tooltips.forEach(item => {
    item.addEventListener('mouseover', onMouseOver);
  });

  function onMouseOver(event) {
    const tooltipBox = createTooltipBox(this);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;

    this.addEventListener('mouseleave', onMouseLeave);
  }

  // aqui não podemos usar uma simples função para remoção pq a variável só
  // existe dentro do escopo da função inicial. há duas opções:
  // 1 - criar a função de remoção dentro da função inicial
  // 2 - criar a função dentro de um objeto com o método handleEvent(), assim
  // o objeto vai se passar como função callback
  // referenciando esse objeto dentro da função e passando a variável como sua propriedade
  // com a segunda opção pode-se deixar o código mais organizado e aumentar a
  // sua complexidade conforme necessário

  // há como otimizar ainda mais a função retirando ela da memória de execução
  // quando o mouse sair de cima do elemento

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListenet('mouseleave', onMouseLeave);
      this.element.removeEventListenet('mouseleave', onMouseMove);
    }
  };

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + 'px';
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }
  };

  function createTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
