import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchBitcoin from './modules/fetchBitcoin.js';
import fetchAnimais from './modules/fetchAnimais.js';
import ScrollAnima from './modules/scroll-anima.js';

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

initDropdownMenu();
initMenuMobile();
initFuncionamento();

initAnimacaoScroll();

fetchAnimais('https://api.jsonbin.io/v3/b/64dccf398e4aa6225ed0e290', '.numeros-grid');
fetchBitcoin('https://economia.awesomeapi.com.br/json/daily/BTC-BRL/0', '.btc-preco');
