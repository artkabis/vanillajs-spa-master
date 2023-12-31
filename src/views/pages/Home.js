"use strict";

import Counter from "../components/Counter.js";//import du composant Counter



const getPostsList = async () => {
     const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`https://6548ddfadd8ebcd4ab23c561.mockapi.io/api/artk/article`, options)
        const json = await response.json();
        return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
}

const Home = {
    render : async () => {
        const posts = await getPostsList()
        const view =  /*html*/`

            <section class="section is-full">
                <h1 class="has-text-white is-size-1"> Accueil - SPA full Vanilla </h1>
                <div class="counter_components">
                    <click-counter></click-counter>
                </div>
                <br>
                <ul class="columns mt-6 mb-6 is-flex is-flex-wrap-wrap is-justify-content-flex-start is-align-content-space-between">
                    ${ posts.map(post => 
                        /*html*/`<li class="column bg-dark text-dark is-2"><a class="button is-primary is-fullwidth" href="#/p/${post.id}">${post.name}</a></li>`
                        ).join('\n ')
                    }
                </ul>
            </section>
        `
        return view
    }
    , after_render: async () => {
        console.log('Rendering Home finished.')
    }

}

export default Home;