"use strict";


const Error404 = {

    render : async () => {
        const view =  /*html*/`
            <section class="section">
                <h1 class="has-text-white"> Erreur 404 : cette page n'est pas disponnible</h1>
                <br>
                <a class="linkHome404 button is-primary is-hovered" href="/">Revenir ver l'accueil</a> 
            </section>
        `
        return view
    }
    , after_render: async () => {
    }
}
export default Error404;