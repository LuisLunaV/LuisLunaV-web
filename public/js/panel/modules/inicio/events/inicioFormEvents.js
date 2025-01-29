export const inicioFormEvents=()=>{
    const formInicioPost = document.querySelector("#formInicioPost");
    const formInicioLista = document.querySelector("#formInicioLista");

    formInicioPost.addEventListener('submit',( event )=>{
        event.preventDefault();
        console.log('agregar')
    })
    formInicioLista.addEventListener('change',({ target })=>{
        const typeElemnt = target.tye;
        console.log(typeElemnt)
    })
}