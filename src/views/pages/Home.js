"use strict";


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
        // console.log(json)
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
                <ul class="columns mt-6 mb-6 is-flex is-flex-wrap-wrap is-justify-content-flex-end is-align-content-space-between">
                    ${ posts.map(post => 
                        /*html*/`<li class="column bg-dark text-dark"><a class="button is-primary" href="#/p/${post.id}">${post.name}</a></li>`
                        ).join('\n ')
                    }
                </ul>
            </section>
        `
        return view
    }
    , after_render: async () => {
    }

}

export default Home;