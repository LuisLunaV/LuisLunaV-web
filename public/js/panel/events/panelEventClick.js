import { inicioFormEvents } from './inicio/inicioFormEvents.js';
export const panelEventClick =()=>{
    const menuPanel = document.querySelector('#navAside');
    
    menuPanel.addEventListener('click',( event )=>{
       
        const option = event.target.id;

        switch( option ){
        case "inicio":
            inicioFormEvents();
            break;
        case "sobreMi":
            break;
        case "servicios":
            break;
        case "tecnologias":
            break;
        case "companias":
            break;
        case "puestos":
            break;
        case "proyectos":
            break;
        case "mensajes":
            break;
        }
    });
}