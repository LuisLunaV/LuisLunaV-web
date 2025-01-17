    import { loginUser } from '../services/api-post.js';
    import { userError } from '../components/userError.js';
    import { passwordError } from '../components/passwordError.js';
    export const formLoginEvent=()=>{
        const formLogin = document.querySelector('#formularioLogin');

        formLogin.addEventListener('submit', async( e )=>{
            e.preventDefault();

            const formData = new FormData( e.target );
            const data = Object.fromEntries(formData.entries());
            
                const result = await loginUser(data)
                .catch(err =>{
                (err.campo != 'password' ) ?
                userError( err ):
                passwordError( err );
                });
        
        
        });
    }