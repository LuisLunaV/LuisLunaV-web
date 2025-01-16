import { initLogin } from './auth/login/initLogin.js';
const RUTA_LOGIN    = '/auth/login';
const RUTA_REGISTER = '/auth/register';


const manejoDeRutas=( ventanaActual )=>{
    
    switch ( ventanaActual ) {
        case RUTA_LOGIN:
             initLogin()
            break;
        case RUTA_REGISTER:
            console.log('register')
        break;
    
        default:
            break;
    }
}

window.onload=()=>{
    const ventanaActual = window.location.pathname;
    manejoDeRutas( ventanaActual );
}