"use strict";

const About = {
    render : async () => {
        const view =  /*html*/`
            <section class="section">
                <h1 class="has-text-white is-size-1"> About </h1>
            </section>
        `
        return view
    },
    after_render: async () => {
        console.log('Rendering Home finished.')
    }
        
}

export default About;