import Utils from '../../services/Utils.js';

class Counter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = /*html*/`
            <div class="sparkle-button">
            <a class="button is-warning mt-6 counterBtn">Compteur de clics : ${Utils.getSStrg('counterValue') ? Number(Utils.getSStrg('counterValue')) : 0}</a>
            </div>
        `;
        const btn = this.querySelector(".counterBtn");
        btn.onclick = () => btn.innerHTML = `Compteur de clics : ${addCounter()}`;   
        
    }
}

const addCounter = () =>{
    Utils.getSStrg('counterValue') ? Utils.setSStrg('counterValue', Number(Utils.getSStrg('counterValue'))+1) : Utils.setSStrg('counterValue',1);
    return Number(Utils.getSStrg('counterValue'));
}

customElements.define("click-counter", Counter);//on définit notre custom element de type HTMLElement sur click-counter et ont lui rattache ses fonctionnalités via Counter.

export default Counter;

