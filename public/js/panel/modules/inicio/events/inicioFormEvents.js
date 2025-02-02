import { postInformation} from '../../../services/api-post.js';
import { apiEndPoints } from '../../../config/apiEndPoints.js';
import { clearInput } from '../../../utils/formUtils.js';
import { imprimirHome } from '../components/inicial.js';
export const inicioFormEvents=()=>{

    const formInicioPost = document.querySelector("#formInicioPost");
    const formInicioLista = document.querySelector("#formInicioLista");

    if( !formInicioPost )return;
        formInicioPost.addEventListener('submit', async( e )=>{
        e.preventDefault();
        const formData = new FormData( e.target );
        const payload = Object.fromEntries( formData.entries());

        try {
             await postInformation(payload, apiEndPoints.apiHome )
             imprimirHome.getSaludos(); 
             clearInput( formInicioPost );

        } catch (error) {
            console.log(error)
        }
    });

    if( !formInicioLista )return;
    formInicioLista.addEventListener('change',({ target })=>{
        const typeElemnt = target.tye;
        console.log(typeElemnt)
    });
}


