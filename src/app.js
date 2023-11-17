"use strict";

import Home         from './views/pages/Home.js'
import Todo         from './views/pages/Todo.js';
import About        from './views/pages/About.js'
import Error404     from './views/pages/Error404.js'
import PostShow     from './views/pages/PostShow.js'
import Register     from './views/pages/Register.js'
import Secret       from './views/pages/Secret.js'

import Navbar       from './views/components/Navbar.js'
import Bottombar    from './views/components/Bottombar.js' 

import Utils        from './services/Utils.js'

// Routes existantes en dehors de la view error404 qui est gérée depuis le Router
const routes = {
    '/'             : { title: "Home", path: "/", route: Home }
    ,'/todo'         : { title: "Todo", path: "/todo", route: Todo }
    , '/about'      : { title: "About", path: "/about", route: About }
    , '/p/:id'      : { title: "Post show", path: "/p/:id", route: PostShow }
    , '/register'   : { title: "Register", path: "/register", route: Register }
    , '/secret'     : { title: "Secret page", path: "/secret", route: Secret }
};


// Gestion des routes de notre SPA
const router = async () => {

    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('page_container');
    const footer = null || document.getElementById('footer_container');
    
    // Rendu des éléments de base des pages
    header.innerHTML = await Navbar.render();
    await Navbar.after_render();
    footer.innerHTML = await Bottombar.render();
    await Bottombar.after_render();


    // Récupération de l'url via location (split des différents éléments [0],[1],[2])
    const request = Utils.parseRequestURL()

    // Gestion de l'url en fonction d'une une de page standard ou de page utilsant l'api (id:)
    const parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')

    console.log('router utilisé via : ',parsedURL);
    
    // Récupération des informations les à l'object "routes"
    const routeInfo = routes[parsedURL] ? routes[parsedURL] : { title: "Erreur 404", path: "/404", route: Error404 };
    document.title = routeInfo.title;

    // Rendu de la page
    content.innerHTML = await routeInfo.route.render();
    await routeInfo.route.after_render();   
  
}

// Ecouteur lié au changement d'url
window.addEventListener('hashchange', router);

// Ecouteur lié au chargement de la page
window.addEventListener('load', router);
