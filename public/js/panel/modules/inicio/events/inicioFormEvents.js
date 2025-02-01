export const inicioFormEvents=()=>{
    const formInicioPost = document.querySelector("#formInicioPost");
    const formInicioLista = document.querySelector("#formInicioLista");

   

    formInicioPost.addEventListener('submit',( e )=>{
        e.preventDefault();
        const formData = new FormData( e.target );
        const data = Object.fromEntries( formData.entries());
        console.log(data)
        clearInput( formInicioPost );
    });

    formInicioLista.addEventListener('change',({ target })=>{
        const typeElemnt = target.tye;
        console.log(typeElemnt)
    });
}


function clearInput( formulario ){
    const inputs = formulario.querySelectorAll('input[type="text"]');
    inputs.forEach( element => element.value = '' );
}