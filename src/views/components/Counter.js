class Counter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = /*html*/`
            <button>Compteur de clics : ${count}</button>
        `;
        const btn = this.querySelector("button");
        btn.onclick = () => btn.innerHTML = `Compteur de clics : ${++count}`;   
        
    }
}

let count = 0;

customElements.define("click-counter", Counter);//on définit notre custom element de type HTMLElement sur click-counter et ont lui rattache ses fonctionnalités via Counter.

export default Counter;