"use strict";

import Utils from "../../services/Utils.js";

const Register = {

    render: async () => {
        return /*html*/ `
            <section class="section">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" id="email_input" type="email" placeholder="Enter your Email">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" id="pass_input" type="password" placeholder="Enter a Password">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" id="repeat_pass_input" type="password" placeholder="Enter the same Password again">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button is-primary" id="register_submit_btn">
                        Register
                        </button>
                    </p>
                </div>

            </section>
        `
        
    }
    
    //Gestion du login et de l'autorisation d'accès à la page secréte
    , after_render: async () => {
        Utils.setSStrg('isLoggedIn',false);
        document.getElementById("register_submit_btn").addEventListener ("click",  () => {
            const email       = document.getElementById("email_input");
            const pass        = document.getElementById("pass_input");
            const repeatPass  = document.getElementById("repeat_pass_input");
            if (pass.value != repeatPass.value) {
                alert (`The passwords dont match`);
                Utils.setSStrg('isLoggedIn',false);
            } else if (email.value =='' | pass.value == '' | repeatPass == '') {
                alert (`The fields cannot be empty`);
                Utils.setSStrg('isLoggedIn',false);
            } 
            else {
                alert(`User with email ${email.value} was successfully submitted!`)
                Utils.setSStrg('isLoggedIn',true)
            }   
            console.log('Etat des autorisation du loggin : ',Utils.getSStrg('isLoggedIn')); 

        })
    }
}

export default Register;