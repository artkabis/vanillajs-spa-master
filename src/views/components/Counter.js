import Utils from '../../services/Utils.js';

class Counter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = /*html*/`
            <div class="sparkle-button">
            <a class="button is-warning mt-6 counterBtn">Compteur de clics : ${Utils.getLStrg('counterValue') ? Number(Utils.getLStrg('counterValue')) : 0}</a>
            </div>
        `;
        const btn = this.querySelector(".counterBtn");
        btn.onclick = () => btn.innerHTML = `Compteur de clics : ${addCounter()}`;   
        
    }
}

const addCounter = () =>{
    Utils.getLStrg('counterValue') ? Utils.setLStrg('counterValue', Number(Utils.getLStrg('counterValue'))+1) : Utils.setLStrg('counterValue',1);
    return Number(Utils.getLStrg('counterValue'));
}

customElements.define("click-counter", Counter);//on définit notre custom element de type HTMLElement sur click-counter et ont lui rattache ses fonctionnalités via Counter.

export default Counter;

