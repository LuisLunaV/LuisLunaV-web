export const inicialHTML=()=>{
    const mainInicio = document.querySelector('#panel-main');
    mainInicio.innerHTML = '';

    const divInicialContainer = document.createElement('div');
    divInicialContainer.className = 'd-flex flex-row w-100';
    divInicialContainer.appendChild( formInicialHtml() );
    divInicialContainer.appendChild( formListInicioHtml() );

    mainInicio.appendChild( divInicialContainer );
}

function formInicialHtml(){

    const divInicioRigth = document.createElement('div')
    divInicioRigth.className = 'inicio-main-rigth w-50 mx-3';

    const formInicial = document.createElement('form');
    formInicial.className = 'form-login';
    formInicial.method ='POST';
    formInicial.id = 'formInicioPost';

    const divHomeInitialGreeting = crearInputDiv('Home_InitialGreeting', 'Saludo inicial');
    const divHomeProfesionName   = crearInputDiv('Home_ProfesionName','Saludo secundario');

    const divHomeSubmit = document.createElement('div');
    divHomeSubmit.className = 'd-grid gap-2';
    const inputHomeSubmit = document.createElement('input');
    inputHomeSubmit.className = 'btn btn-outline-warning';
    inputHomeSubmit.type = 'submit';
    inputHomeSubmit.value = 'Agregar';
    divHomeSubmit.appendChild( inputHomeSubmit );

    formInicial.appendChild( divHomeInitialGreeting );
    formInicial.appendChild( divHomeProfesionName );
    formInicial.appendChild( divHomeSubmit );

    divInicioRigth.appendChild( formInicial );
    
    return divInicioRigth;

}

function formListInicioHtml(){
    const divListInicioLeft = document.createElement('div');
    divListInicioLeft.className = 'inicio-main-left w-50 mx-3';
    
    const formListInicial = document.createElement('form');
    formListInicial.method = 'POST';
    formListInicial.id = 'formInicioLista';

    divListInicioLeft.appendChild( formListInicial );

    return divListInicioLeft;

}

function crearInputDiv( name, placeholder){

    const div = document.createElement('div');
    div.className = 'mb-3';
    const input = document.createElement('input');
    input.className = 'form-control';
    input.type = 'text';
    input.name = `${ name }`;
    input.placeholder = `${ placeholder }`;
    input.required = true;
    div.appendChild( input );
    return div;

}

{/* <div class="div-inicial py-2 px-3 my-2">
    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio">
    <div class="mx-2">
    <label class="form-check-label" for="firstRadio">First radio -</label>
    <label class="form-check-label" for="firstRadio">Second radio</label>
  </div> */}