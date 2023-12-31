"use strict";

import Utils from "../../services/Utils.js"

let isLog, viewActive = false;
const Secret = {
    render : async () => {
        isLog = JSON.parse(Utils.getSStrg('isLoggedIn'));//si le user est logué alors il accède au contenu secret.
        console.log('Autorisation status avant rendu : ',isLog)
        const view =  {viewLogin: `<section class="section">
                <h1 class="has-text-white is-size-1"> Vous êtes désormais sur la page secréte. </h1>
            </section>
        ` , viewLogOut:  `
        <section class="section">
        <h1 class="has-text-white is-size-1"> Vous N'avez pas l'autorisation pour accèder à cette page. </h1>
            </section>
        `};
        viewActive = (isLog) ? Object.keys(view)[0] : Object.keys(view)[1];//On affiche la vue adéquate en fonction de l'état du log.
        return  (isLog) ? view.viewLogin : view.viewLogOut
    },
    after_render: async () => {
        (!isLog && viewActive === "viewLogIn" || isLog && viewActive === "viewLogOut") && render();//Le rendu est déclanché lors du chagement de routes.
    }    
}

export default Secret;