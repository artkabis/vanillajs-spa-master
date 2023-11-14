let Bottombar = {
    render: async () => {
        let view =  /*html*/`
        <footer class="footer has-background-black has-text-white">
            <div class="content has-text-centered pt-6">
                <p>
                    SPA App Artkabis - 2023
                </p>
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => { }

}

export default Bottombar;