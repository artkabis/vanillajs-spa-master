"use strict";

import Utils from './../../services/Utils.js'

const getPost = async (id) => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`https://6548ddfadd8ebcd4ab23c561.mockapi.io/api/artk/article/` + id, options)
       const json = await response.json();
       // console.log(json)
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}

const PostShow = {

    render : async () => {
        const request = Utils.parseRequestURL()
        const post = await getPost(request.id)
        
        return /*html*/`
            <section class="section has-text-white is-size-5">
                <img src="${post.avatar}" alt="Avatar de ${post.name}" />
                <h1 class="mb-4"> <span class="has-text-primary">Post Id :</span> ${post.id}</h1>
                <p class="mb-4"> <span class="has-text-primary">Post Title : </span>${post.title} </p>
                <p class="mb-4"> <span class="has-text-primary">Post Content : </span>${post.article} </p>
                <p class="mb-4"> <span class="has-text-primary">Post Author : </span>${post.name} </p>
                <p class="mb-4"> <span class="has-text-primary">Date de création : </span>${post.createdAt.split('T')[0].split('-').reverse().join('/')} </p>
            </section>
        `
    }
    , after_render: async () => {
        console.log('Rendering Home finished.')
    }
}

export default PostShow;