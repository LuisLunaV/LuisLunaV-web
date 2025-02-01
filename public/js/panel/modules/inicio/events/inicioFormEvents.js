import { postInformation} from '../../../services/api-post.js';
import { apiEndPoints } from '../../../config/apiEndPoints.js';
import { clearInput } from '../../../utils/formUtils.js';

export const inicioFormEvents=()=>{

    const formInicioPost = document.querySelector("#formInicioPost");
    const formInicioLista = document.querySelector("#formInicioLista");

    formInicioPost.addEventListener('submit', async( e )=>{
        e.preventDefault();
        const formData = new FormData( e.target );
        const payload = Object.fromEntries( formData.entries());

        try {
            await postInformation(payload, apiEndPoints.apiHome )
            clearInput( formInicioPost );
        } catch (error) {
            console.log(error)
        }
    });

    formInicioLista.addEventListener('change',({ target })=>{
        const typeElemnt = target.tye;
        console.log(typeElemnt)
    });
}


