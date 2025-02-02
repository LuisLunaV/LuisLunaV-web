import  { getInformation } from '../../../services/api-get.js';
import { apiEndPoints } from '../../../config/apiEndPoints.js';


export class ImprimirHome{
    constructor( divRadio ){    
        this.divRadio = divRadio;
    }
    async getSaludos(){
        try {            
            const { allHomeInfo } = await getInformation( apiEndPoints.apiHome );
            this.imprimir( allHomeInfo );
        } catch (error) {
            console.error(error);
        }
    }

    imprimir( data ){
        const formList = document.querySelector('#formInicioLista');
        formList.innerHTML = '';
        data.forEach(element => {
           formList.appendChild( this.divRadio( element ));
        });
    }
}

