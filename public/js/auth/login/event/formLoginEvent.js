    import { loginUser } from '../services/api-post.js';
    import { userError } from '../components/userError.js';
    export const formLoginEvent=()=>{
        console.log('desde form')
        const formLogin = document.querySelector('#formularioLogin');

        formLogin.addEventListener('submit', async( e )=>{
            e.preventDefault();

            const formData = new FormData( e.target );
            const data = Object.fromEntries(formData.entries());
            
                const result = await loginUser(data)
                .catch(err =>{
                userError(err.message);
                });
        
        
        });
    }