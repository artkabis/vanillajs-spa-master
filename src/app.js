"use strict";

import Home         from './views/pages/Home.js'
import About        from './views/pages/About.js'
import Error404     from './views/pages/Error404.js'
import PostShow     from './views/pages/PostShow.js'
import Register     from './views/pages/Register.js'
import Secret       from './views/pages/Secret.js'

import Navbar       from './views/components/Navbar.js'
import Bottombar    from './views/components/Bottombar.js' 

import Utils        from './services/Utils.js'

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/'             : { title: "Home", path: "/", route: Home }
    , '/about'      : { title: "About", path: "/about", route: About }
    , '/p/:id'      : { title: "Post show", path: "/p/:id", route: PostShow }
    , '/register'   : { title: "Register", path: "/register", route: Register }
    , '/secret'     : { title: "Secret page", path: "/secret", route: Secret }
};


// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {

    // Lazy load view element:
    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('page_container');
    const footer = null || document.getElementById('footer_container');
    
    // Render the Header and footer of the page
    header.innerHTML = await Navbar.render();
    await Navbar.after_render();
    footer.innerHTML = await Bottombar.render();
    await Bottombar.after_render();


    // Get the parsed URl from the addressbar
    const request = Utils.parseRequestURL()

    // Parse the URL and if it has an id part, change it with the string ":id"
    const parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')

    console.log('router utilisé via : ',parsedURL);
    
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    // const page = routes[parsedURL] ? routes[parsedURL] : Error404
    // content.innerHTML = await page.render();
    // await page.after_render();
    const routeInfo = routes[parsedURL] ? routes[parsedURL] : { title: "Error 404", path: "/404", route: Error404 };
    document.title = routeInfo.title;

    // Render the page
    content.innerHTML = await routeInfo.route.render();
    await routeInfo.route.after_render();
  
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
