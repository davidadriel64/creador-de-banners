
// Funciones

Swal.fire('Bienvenid@s al creador de banners', 'Para comenzar a crear un banner, debes seleccionar un tamaño de banner (por defecto esta en 600x600)', 'info');

let id = 1;
const coordenadas = [];

setInterval(function(){
  document.getElementById('btnGuardar').click();
  document.getElementById('automatico').innerText = "Guardardado automatico a las "+new Date().toLocaleTimeString();
  cambiarColorGuardadoAutomatico();
}, 120000);


function cambiarColorGuardadoAutomatico(){
  setTimeout(function(){
    document.getElementById("automatico").className= "badge text-bg-light mx-2";
  }, 5000);
  document.getElementById("automatico").className = "badge text-bg-dark mx-2";
}


function MoverLibrementeConElMouse(e) {
  let posicionX = 0;
  let posicionY = 0;

  let elemento = document.getElementById(e);
      elemento.addEventListener('mousedown', presionar, false);
      window.addEventListener('mouseup', soltar, false);
        function presionar(e) {
          let zoom = document.getElementById("contenido").style.zoom;
          zoom = zoom.replace("%", "");
          posicionX = e.clientX - elemento.offsetLeft * zoom / 100;
          posicionY = e.clientY - elemento.offsetTop * zoom / 100;
          window.addEventListener('mousemove', mover, true);
        }
      function soltar() {
        window.removeEventListener('mousemove', mover, true);
      }
  function mover(e) {
    let zoom = document.getElementById("contenido").style.zoom;
    zoom = zoom.replace("%", "");
    elemento.style.position = 'absolute';
    elemento.style.top = (e.clientY - posicionY) / zoom * 100 + 'px';
    elemento.style.left = (e.clientX - posicionX) / zoom * 100 + 'px';
    elemento.style.right = - (e.clientX - posicionX) / zoom * 100 + 'px';
  }
}

function colocarFondo(){
  let archivo = document.getElementById("fileFondo").files[0];
  let reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo );
    reader.onloadend = function () {
      document.getElementById("contenido").style.backgroundImage = 'url("'+reader.result+'")';
      mensaje("Fondo actualizado");
    }
  }
}

  function crearImagen(){
    let elemento = id+1;
    let archivo = document.getElementById("file").files[0];
    let reader = new FileReader();
    if (file) {
      reader.readAsDataURL(archivo );
      reader.onloadend = function () {
        let div1 = document.createElement("div");
        div1.id = "divImg"+elemento;
        let img = document.createElement("img");
        img.src = reader.result;
        img.width = 300;
        img.id = elemento;
        img.className = "imagen"+elemento;
        img.style.zIndex = elemento;
        document.getElementById("contenido").appendChild(div1);
        document.getElementById("divImg"+elemento).appendChild(img);
        MoverLibrementeConElMouse(elemento);
        id = elemento;

        let div = document.createElement("div");
          div.id = "divImagen"+elemento;
          div.innerHTML = `
          <div class='input-group mb-3'><span class='input-group-text text-bg-dark' id='basic-addon1' ><i class="bi bi-card-image"></i></span><input type='text' class='form-control text-bg-dark' value='Imagen' name='' id='imagen`+id+`' disabled >
          <button class='btn btn-dark mx-1' id='imagenE`+id+`' type='button'><i class='bi bi-trash'></i></button>
          <button class='btn btn-dark' id='imagenEdit`+id+`' type='button' data-bs-toggle="offcanvas" data-bs-target="#offcanvasImagenid`+id+`" aria-controls="offcanvasImagenid`+id+`"><i class='bi bi-pen'></i></button>`;
          
        document.getElementById("input").appendChild(div);
        document.getElementById("imagenE"+id).addEventListener("click", eliminarImagen);
        document.getElementById(id).addEventListener("dblclick", abrirEditor);
      
      function abrirEditor() {
        document.getElementById("imagenEdit"+elemento).click();
      }
        
        let off = document.getElementById("offcanvasImagenid");
            off = document.createElement("div");
            off.innerHTML = `
            <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasImagenid`+id+`" aria-labelledby="offcanvasImagenid`+id+`">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasImagenid`+id+`"><i class='bi bi-pen'></i> Editar Imagen</h5>
            <button type="button" class="btn-close " data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">   
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center mt-4 mb-3 text-muted text-uppercase">
            <span>Tamaño</span>
            </h6>
            <input type='range' value='0'  class='form-range'  id='imagenT`+id+`' style="background-color: #ffffff12;border-radius: 4px;padding: 11px; "></div>
          </div>
          </div>
          </div> 
          `;
          off.id = "offcanvasImagenContenedor"+id;
            document.getElementById("offcanvasImagenid").appendChild(off); 
            document.getElementById("imagenT"+id).addEventListener("input", tamañoImagen);
        mensaje("Elemento imagen creado");
      }
    }
    
  }

  function crearTexto(){

  let elemento = id+1;
  let div1 = document.createElement("div");
      div1.id = "div"+elemento;
  let texto = document.createElement("p");
      texto.id = elemento;
      texto.style.padding = "10px";
      texto.style.fontSize = "30px";
      texto.innerHTML = "Texto";
      texto.className = "texto"+elemento;
      texto.style.position = "absolute";
      texto.style.zIndex = elemento;

      document.getElementById("contenido").appendChild(div1);
      div1.appendChild(texto);
      document.getElementById("div"+elemento).addEventListener("dblclick", abrirEditor);
      
      function abrirEditor() {
        document.getElementById("textoEdit"+elemento).click();
      }

      MoverLibrementeConElMouse("div"+elemento);
      id = elemento;

        let div = document.createElement("div");
          div.id = "divTexto"+elemento;
          div.className = "input-group";
          div.innerHTML = ` 
          <div class='input-group mb-3'>
          <span class='input-group-text text-bg-dark id='basic-addon1'><i class='bi bi-fonts'></i></span>
          <input type='text' class='form-control text-bg-dark texto`+id+`' value='Texto' id='inputTexto`+id+`' disabled>
          <button class='btn btn-dark mx-1' id='textoE`+id+`' type='button'><i class='bi bi-trash'></i></button> 
          <button class='btn btn-dark' id='textoEdit`+id+`' type='button' data-bs-toggle="offcanvas" data-bs-target="#offcanvasTextoid`+id+`" aria-controls="offcanvasTextoid`+id+`"><i class='bi bi-pen'></i></button>`;

          document.getElementById("input").appendChild(div);
          document.getElementById("textoE"+id).addEventListener("click", eliminar);
  
            let off = document.getElementById("offcanvasTextoid");
            off = document.createElement("div");
            off.innerHTML = `<div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasTextoid`+id+`" aria-labelledby="offcanvasTextoid`+id+`">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasTextoid`+id+`"><i class='bi bi-pen'></i> Editar texto</h5>
            <button type="button" class="btn-close " data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">   
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center mt-4 mb-3 text-muted text-uppercase">
            <span>Orden</span>
            </h6>
            <button class='btn btn-outline-light' id='textoI`+id+`' type='button'><i class='bi bi-justify-left'></i></button>
            <button class='btn btn-outline-light' id='textoC`+id+`' type='button'><i class='bi bi-justify'></i></button>
            <button class='btn btn-outline-light' id='textoD`+id+`' type='button'><i class='bi bi-justify-right'></i></button>
            <button class='btn btn-outline-light dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>Tamaño</button>
            <ul class='dropdown-menu dropdown-menu-dark'>
            <li><a class='dropdown-item ' href='#' id='textoTP`+id+`'>Pequeño</a></li>
            <li><a class='dropdown-item ' id='textoTC`+id+`' >Chico</a></li>
            <li><a class='dropdown-item ' id='textoTM`+id+`' >Mdiano</a></li>
            <li><a class='dropdown-item ' id='textoTG`+id+`' >Grande</a></li>
            <li><a class='dropdown-item ' id='textoTEG`+id+`' >Extra Grande</a></li>
            <li><a class='dropdown-item ' id='textoTSG`+id+`' >Super Grande</a></li>
            </ul>
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center mt-4 mb-3 text-muted text-uppercase">
            <span>Estilos</span>
            </h6>
            <div class="d-flex gap-1">
            <button class='btn btn-outline-light' id='textoB`+id+`' type='button'><i class='bi bi-type-bold'></i></button>
            <button class='btn btn-outline-light' id='textoS`+id+`' type='button'><i class='bi bi-type-strikethrough'></i></button>
            <button class='btn btn-outline-light' id='textoU`+id+`' type='button'><i class='bi bi-type-underline'></i></button>
            <button class='btn btn-outline-light' id='textoIT`+id+`' type='button'><i class='bi bi-type-italic'></i></button>
            </div>
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center mt-4 mb-3 text-muted text-uppercase">
            <span>Seleccionar color</span>
            </h6>
            <input type='color' class='form-control form-control-color' id='colorInput`+id+`' value='#000000' title='Color' style='max-width: 50px;'>
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center mt-4 mb-3 text-muted text-uppercase">
            <span>Tipografia</span>
            </h6>
            <div class="d-flex">
            <select class="form-select text-bg-dark" aria-label="" id='textoF`+id+`'>
            <option selected>Seleccione una fuente</option>
            <option value="Roboto">Roboto</option>
            <option value="Poppins">Poppins</option>
            <option value="Lato">Lato</option>
            <option value="Oswald">Oswald</option>
            <option value="Raleway">Raleway</option>
            <option value="Open Sans">Open Sans</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Lobster">Lobster</option>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Verdana">Verdana</option>
            <option value="Georgia">Georgia</option>
            <option value="Impact">Impact</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Trebuchet MS">Trebuchet MS</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
            <option value="Lucida Console">Lucida Console</option>
            <option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
            <option value="Palatino Linotype">Palatino Linotype</option>
            <option value="Book Antiqua">Book Antiqua</option>
            <option value="Garamond">Garamond</option>
            <option value="MS Sans Serif">MS Sans Serif</option>
            <option value="MS Serif">MS Serif</option>
            <option value="Symbol">Symbol</option>
            <option value="Webdings">Webdings</option>
            <option value="Wingdings">Wingdings</option>
            </select>
            </div>
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center mt-4 mb-3 text-muted text-uppercase">
            <span>Editar texto</span>
            </h6>
            <textarea class="form-control text-bg-dark" placeholder="Texto" id="texto`+id+`" style="height: 100px"></textarea>
          </div>
          </div>
          </div>`;
          off.id = "offcanvasTextoContenedor"+id;
            document.getElementById("offcanvasTextoid").appendChild(off); 

            document.getElementById("textoIT"+id).addEventListener("click", italic);
            document.getElementById("textoS"+id).addEventListener("click", textoTachado);
            document.getElementById("textoU"+id).addEventListener("click", textoSubrayado);
            document.getElementById("texto"+id).addEventListener("keyup", escribirTexto);
            document.getElementById("colorInput"+id).addEventListener("change", colorTexto);
            document.getElementById("textoI"+id).addEventListener("click", izquierda);
            document.getElementById("textoC"+id).addEventListener("click", centrar);
            document.getElementById("textoD"+id).addEventListener("click", derecha);
            document.getElementById("textoB"+id).addEventListener("click", negrita);
            document.getElementById("textoTP"+id).addEventListener("click", textoPequeno);
            document.getElementById("textoTC"+id).addEventListener("click", textoChico);
            document.getElementById("textoTM"+id).addEventListener("click", textoMediano);
            document.getElementById("textoTG"+id).addEventListener("click", textoGrande);
            document.getElementById("textoTEG"+id).addEventListener("click", textoExtraGrande);
            document.getElementById("textoTSG"+id).addEventListener("click", textoSuperGrande);
            document.getElementById("textoF"+id).addEventListener("change", cambiarFuente);

        mensaje("Elemento Texto creado");
  
  }

  function italic(){
    let id = this.id.substring(7);
    if(document.getElementById(id).style.fontStyle == "oblique"){
      document.getElementById(id).style.fontStyle = "normal";
    }else{
      document.getElementById(id).style.fontStyle = "oblique";
    }
  }
  function textoTachado(){
    let id = this.id.substring(6);
    if(document.getElementById(id).style.textDecoration == "line-through"){
      document.getElementById(id).style.textDecoration = "none";
    }else{
      document.getElementById(id).style.textDecoration = "line-through";
    }
  }

  function textoSubrayado(){
    let id = this.id.substring(6);
    if(document.getElementById(id).style.textDecoration == "underline"){
      document.getElementById(id).style.textDecoration = "none";
    }else{
      document.getElementById(id).style.textDecoration = "underline";
    }
  }

  function escribirTexto(){
    let id = this.id.substring(5);
    document.getElementById(id).innerHTML = this.value.replace(/\n|\r/g, "<br>");;
    document.getElementById("inputTexto"+id).value = this.value;
  }

  function tamañoImagen(){
    let id = this.id.replace("imagenT","");
    document.getElementById(id).style.width = this.value +2+"px";
  }

  function negrita(){
    let id = this.id.substring(6);
    if(document.getElementById(id).style.fontWeight == "bold"){
      document.getElementById(id).style.fontWeight = "normal";
    }else{
      document.getElementById(id).style.fontWeight = "bold";
    }
  }

  function eliminar(){
    let elemento = this.id;
    let id = elemento.replace("textoE", "");
    document.getElementById(id).remove();
    document.getElementById("divTexto"+id).remove();
    eliminarMensaje();
  }

  function eliminarImagen(){
    let elemento = this.id;
    let id = elemento.replace("imagenE", "");
    document.getElementById(id).remove();
    document.getElementById("divImagen"+id).remove();
    eliminarMensaje();
  }



  function izquierda(){
    let elemento = this.id;
    let id = elemento.replace("textoI", "");
    document.getElementById(id).style.textAlign = "left";
  }

  function centrar(){
    let elemento = this.id;
    let id = elemento.replace("textoC", "");
    document.getElementById(id).style.textAlign = "center";
  }

  function derecha(){
    let elemento = this.id;
    let id = elemento.replace("textoD", "");
    document.getElementById(id).style.textAlign = "right";
  }

  function textoPequeno(){
    let elemento = this.id;
    let id = elemento.replace("textoTP", "");
    document.getElementById(id).style.fontSize = "10px";
  }

  function textoChico(){
    let elemento = this.id;
    let id = elemento.replace("textoTC", "");
    document.getElementById(id).style.fontSize = "25px";
  }

  function textoMediano(){
    let elemento = this.id;
    let id = elemento.replace("textoTM", "");
    document.getElementById(id).style.fontSize = "50px";
  }

  function textoGrande(){
    let elemento = this.id;
    let id = elemento.replace("textoTG", "");
    document.getElementById(id).style.fontSize = "85px";
  }

  function textoExtraGrande(){
    let elemento = this.id;
    let id = elemento.replace("textoTEG", "");
    document.getElementById(id).style.fontSize = "120px";
  }

  function textoSuperGrande(){
    let elemento = this.id;
    let id = elemento.replace("textoTSG", "");
    document.getElementById(id).style.fontSize = "150px";
  }

  function colorTexto(){
    let elemento = this.id;
    let id = elemento.replace("colorInput", "");
    document.getElementById(id).style.color = document.getElementById("colorInput"+id).value;
  }

function medidas(){
  let ancho = document.getElementById("ancho").value;
  let alto = document.getElementById("alto").value;
  document.getElementById("contenido").style.width = ancho+"px";
  document.getElementById("contenido").style.height = alto+"px";
  mensaje("Medidas cambiadas");
}

function mensaje(e){  
  Toastify({
    text: e,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, rgb(98 75 226),rgb(98 75 226))",
    },
    onClick: function(){} // Callback after click
  }).showToast();
}

function eliminarMensaje(){
    Toastify({
      text: "Elemento eliminado",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #c50000,#c50000)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
  }

 function guardarTransparente(){
  document.getElementById("contenido").style.background = "transparent";
  html2canvas(document.querySelector("#contenido"),{backgroundColor: null}).then(canvas => {
    canvas.toBlob(function(blob) {
      saveAs(blob, "banner(sinfondo).png");
  });
  Swal.fire({
    title: 'Imagen guardada',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
});
contenido = document.getElementById("contenido").style.background = colorFondo.value;
}


  function guardarFondo(){
        html2canvas(document.querySelector("#contenido")).then(canvas => {
            canvas.toBlob(function(blob) {
                saveAs(blob, "banner(con fondo).png");
            });
            Swal.fire({
              title: 'Imagen guardada',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })
        });
  }

  function guardarCanvaEnJpg(){
    html2canvas(document.querySelector("#contenido")).then(canvas => {
      canvas.toBlob(function(blob) {
      saveAs(blob, "banner(con fondo).jpg");
    }, "image/jpeg", 1);

      Swal.fire({
        title: 'Imagen guardada',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    });
}


function cambiarFuente(){
  let elemento = this.id;
  let id = elemento.replace("textoF", "");
  let fuente = document.getElementById("textoF"+id).value;
  document.getElementById(id).style.fontFamily = fuente;
}

function eliminarFondo(){
  document.getElementById("contenido").style.backgroundImage = "none";
}

function preset1(){
  document.getElementById("contenido").style.backgroundImage = "url('./img/preset1.png')";
  mensaje("Preset 1 cargado");
}

function preset2(){
  document.getElementById("contenido").style.backgroundImage = "url('./img/preset2.png')";
  mensaje("Preset 2 cargado");
}

function preset3(){
  document.getElementById("contenido").style.backgroundImage = "url('./img/preset3.png')";
  mensaje("Preset 3 cargado");
}

function guardarCoordenadasElementosPlantilla(){
  coordenadas.splice(0, coordenadas.length);
  let elementos = document.getElementById("contenido").children;
  for (let i = 0; i < elementos.length; i++) {
    let elemento = elementos[i];
    let id = elemento.id;
    let x = elemento.style.left;
    let y = elemento.style.top;
    let ancho = elemento.style.width;
    let alto = elemento.style.height;
    let color = elemento.style.color;
    let fuente = elemento.style.fontFamily;
    let tamano = elemento.style.fontSize;
    let texto = elemento.innerHTML;
    let coordenadasElemento = {
      id: id,
      x: x,
      y: y,
      ancho: ancho,
      alto: alto,
      color: color,
      fuente: fuente,
      tamano: tamano,
      texto: texto
    }
    coordenadas.push(coordenadasElemento);
  }
  console.log(coordenadas);
  document.getElementById('automatico').innerText = "Guardaste tus datos a las "+new Date().toLocaleTimeString();
}

  
function cargarCoordenadasElementosPlantilla(){
  if(document.getElementById("contenido").children.length > 0){
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Se eliminarán todos los elementos de la plantilla",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cargar'
    }).then((result) => {
      if (result.isConfirmed) {

        eliminarHijos("contenido");
        eliminarHijos("offcanvasTextoid");
        eliminarHijos("offcanvasImagenid");
        eliminarHijos("input");
        document.getElementById("contenido").style.backgroundImage = "none";
        document.getElementById("contenido").style.backgroundColor = "#fff";  

  for (let i = 0; i < coordenadas.length; i++) {
    const element = coordenadas[i];
    const elemento = element.id;
    const idok = elemento.replace("div", "");
    const x = element.x;
    const y = element.y;
    const texto = element.texto;
    const div2 = document.createElement("div");
    div2.innerHTML = texto;
    div2.id = elemento;
    div2.style.position = "absolute";
    div2.style.left = x;
    div2.style.top = y;
    document.getElementById("contenido").appendChild(div2);
    document.getElementById(elemento).addEventListener("dblclick", abrirEditor);
    function abrirEditor() {
      document.getElementById("textoEdit"+idok).click();
    }
    MoverLibrementeConElMouse(elemento);
    let id = idok;

      let div = document.createElement("div");
        div.id = "divTexto"+id;
        div.className = "input-group";
        div.innerHTML = ` 
        <div class='input-group mb-3'>
        <span class='input-group-text text-bg-dark id='basic-addon1'><i class='bi bi-fonts'></i></span>
        <input type='text' class='form-control text-bg-dark texto`+id+`' value='Texto' id='inputTexto`+id+`' disabled>
        <button class='btn btn-dark mx-1' id='textoE`+id+`' type='button'><i class='bi bi-trash'></i></button> 
        <button class='btn btn-dark' id='textoEdit`+id+`' type='button' data-bs-toggle="offcanvas" data-bs-target="#offcanvasTextoid`+id+`" aria-controls="offcanvasTextoid`+id+`"><i class='bi bi-pen'></i></button>`;

        document.getElementById("input").appendChild(div);
        document.getElementById("textoE"+id).addEventListener("click", eliminar);

          let off = document.getElementById("offcanvasTextoid");
          off = document.createElement("div");
          off.innerHTML = `<div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasTextoid`+id+`" aria-labelledby="offcanvasTextoid`+id+`">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasTextoid`+id+`"><i class='bi bi-pen'></i> Editar texto</h5>
          <button type="button" class="btn-close " data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">   
          <h6 class="sidebar-heading d-flex justify-content-between align-items-center mt-4 mb-3 text-muted text-uppercase">
          <span>Orden</span>
          </h6>
          <button class='btn btn-outline-light' id='textoI`+id+`' type='button'><i class='bi bi-justify-left'></i></button>
          <button class='btn btn-outline-light' id='textoC`+id+`' type='button'><i class='bi bi-justify'></i></button>
          <button class='btn btn-outline-light' id='textoD`+id+`' type='button'><i class='bi bi-justify-right'></i></button>
          <button class='btn btn-outline-light dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>Tamaño</button>
          <ul class='dropdown-menu dropdown-menu-dark'>
          <li><a class='dropdown-item ' href='#' id='textoTP`+id+`'>Pequeño</a></li>
          <li><a class='dropdown-item ' id='textoTC`+id+`' >Chico</a></li>
          <li><a class='dropdown-item ' id='textoTM`+id+`' >Mdiano</a></li>
          <li><a class='dropdown-item ' id='textoTG`+id+`' >Grande</a></li>
          <li><a class='dropdown-item ' id='textoTEG`+id+`' >Extra Grande</a></li>
          <li><a class='dropdown-item ' id='textoTSG`+id+`' >Super Grande</a></li>
          </ul>
          <h6 class="sidebar-heading d-flex justify-content-between align-items-center mt-4 mb-3 text-muted text-uppercase">
          <span>Estilos</span>
          </h6>
          <div class="d-flex gap-1">
          <button class='btn btn-outline-light' id='textoB`+id+`' type='button'><i class='bi bi-type-bold'></i></button>
          <button class='btn btn-outline-light' id='textoS`+id+`' type='button'><i class='bi bi-type-strikethrough'></i></button>
          <button class='btn btn-outline-light' id='textoU`+id+`' type='button'><i class='bi bi-type-underline'></i></button>
          <button class='btn btn-outline-light' id='textoIT`+id+`' type='button'><i class='bi bi-type-italic'></i></button>
          </div>
          <h6 class="sidebar-heading d-flex justify-content-between align-items-center mt-4 mb-3 text-muted text-uppercase">
          <span>Seleccionar color</span>
          </h6>
          <input type='color' class='form-control form-control-color' id='colorInput`+id+`' value='#000000' title='Color' style='max-width: 50px;'>
          <h6 class="sidebar-heading d-flex justify-content-between align-items-center mt-4 mb-3 text-muted text-uppercase">
          <span>Tipografia</span>
          </h6>
          <div class="d-flex">
          <select class="form-select text-bg-dark" aria-label="" id='textoF`+id+`'>
          <option selected>Seleccione una fuente</option>
          <option value="Roboto">Roboto</option>
          <option value="Poppins">Poppins</option>
          <option value="Lato">Lato</option>
          <option value="Oswald">Oswald</option>
          <option value="Raleway">Raleway</option>
          <option value="Open Sans">Open Sans</option>
          <option value="Montserrat">Montserrat</option>
          <option value="Lobster">Lobster</option>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Verdana">Verdana</option>
          <option value="Georgia">Georgia</option>
          <option value="Impact">Impact</option>
          <option value="Tahoma">Tahoma</option>
          <option value="Trebuchet MS">Trebuchet MS</option>
          <option value="Comic Sans MS">Comic Sans MS</option>
          <option value="Lucida Console">Lucida Console</option>
          <option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
          <option value="Palatino Linotype">Palatino Linotype</option>
          <option value="Book Antiqua">Book Antiqua</option>
          <option value="Garamond">Garamond</option>
          <option value="MS Sans Serif">MS Sans Serif</option>
          <option value="MS Serif">MS Serif</option>
          <option value="Symbol">Symbol</option>
          <option value="Webdings">Webdings</option>
          <option value="Wingdings">Wingdings</option>
          </select>
          </div>
          <h6 class="sidebar-heading d-flex justify-content-between align-items-center mt-4 mb-3 text-muted text-uppercase">
          <span>Editar texto</span>
          </h6>
          <textarea class="form-control text-bg-dark" placeholder="Texto" id="texto`+id+`" style="height: 100px"></textarea>
        </div>
        </div>
        </div>`;
        off.id = "offcanvasTextoContenedor"+id;
          document.getElementById("offcanvasTextoid").appendChild(off); 

          document.getElementById("textoIT"+id).addEventListener("click", italic);
          document.getElementById("textoS"+id).addEventListener("click", textoTachado);
          document.getElementById("textoU"+id).addEventListener("click", textoSubrayado);
          document.getElementById("texto"+id).addEventListener("keyup", escribirTexto);
          document.getElementById("colorInput"+id).addEventListener("change", colorTexto);
          document.getElementById("textoI"+id).addEventListener("click", izquierda);
          document.getElementById("textoC"+id).addEventListener("click", centrar);
          document.getElementById("textoD"+id).addEventListener("click", derecha);
          document.getElementById("textoB"+id).addEventListener("click", negrita);
          document.getElementById("textoTP"+id).addEventListener("click", textoPequeno);
          document.getElementById("textoTC"+id).addEventListener("click", textoChico);
          document.getElementById("textoTM"+id).addEventListener("click", textoMediano);
          document.getElementById("textoTG"+id).addEventListener("click", textoGrande);
          document.getElementById("textoTEG"+id).addEventListener("click", textoExtraGrande);
          document.getElementById("textoTSG"+id).addEventListener("click", textoSuperGrande);
          document.getElementById("textoF"+id).addEventListener("change", cambiarFuente);

            mensaje("Elemento Texto creado");
          }
        }

      });

      } else {
        mensaje("No guardaste ningun dato en el editor");
      }

}

function eliminarHijos(id){
  var elemento = document.getElementById(id);
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}

// Eventos

// Eventos de los botones

document.getElementById("btnGuardar").addEventListener("click", guardarCoordenadasElementosPlantilla);

document.getElementById("btnCargar").addEventListener("click", cargarCoordenadasElementosPlantilla);

let eliminarF = document.getElementById("eliminarFondo").addEventListener("click", eliminarFondo);

let texto = document.getElementById("crearT").addEventListener("click", crearTexto);

let cambiarMedidas = document.getElementById("cambiarMedidas").addEventListener("click", medidas);

let botonGuardarFondo = document.getElementById("guardarFondo").addEventListener("click", guardarFondo);

let botonGuardarTransparente = document.getElementById("guardarTransparente").addEventListener("click", guardarTransparente);

let botonGuardarJpg = document.getElementById("guardarJpg").addEventListener("click", guardarCanvaEnJpg);

let botonPreset1 = document.getElementById("preset1").addEventListener("click", preset1);

let botonPreset2 = document.getElementById("preset2").addEventListener("click", preset2);

let botonPreset3 = document.getElementById("preset3").addEventListener("click", preset3);

colorFondo.oninput = function() {
  document.getElementById("contenido").style.background = this.value;
};


customRange2.addEventListener('input', (e) => {
  document.getElementById("contenido").style.backgroundPositionY = e.target.value + "%";
});

customRange1.addEventListener('input', (e) => {
  document.getElementById("contenido").style.backgroundPositionX = e.target.value + "%";
});

zoom.addEventListener('input', (e) => {
  document.getElementById("contenido").style.zoom = e.target.value + "%";
});

fondoRadio1.addEventListener('change', function() {
  document.getElementById("contenido").style.backgroundRepeat = "repeat";
});
fondoRadio2.addEventListener('change', function() {
  document.getElementById("contenido").style.backgroundRepeat = "no-repeat";
});

fondoRadio4.addEventListener('change', function() {
  document.getElementById("contenido").style.backgroundSize = "cover";
});
fondoRadio5.addEventListener('change', function() {
  document.getElementById("contenido").style.backgroundSize = "contain";
});




