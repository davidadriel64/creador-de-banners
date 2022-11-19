
// Funciones

id = 3;

function MoverLibrementeConElMouse(e) {
  let posicionX = 0;
  let posicionY = 0;
  let elemento = document.getElementById(e);
      elemento.addEventListener('mousedown', presionar, false);
      window.addEventListener('mouseup', soltar, false);
        function presionar(e) {
          posicionX = e.clientX - elemento.offsetLeft;
          posicionY = e.clientY - elemento.offsetTop;
          window.addEventListener('mousemove', mover, true);
        }
      function soltar() {
        window.removeEventListener('mousemove', mover, true);
      }
  function mover(e) {
    elemento.style.position = 'absolute';
    elemento.style.top = (e.clientY - posicionY) + 'px';
    elemento.style.left = (e.clientX - posicionX) + 'px';
  }
}



function colocarFondo(){
  let archivo = document.getElementById("fileFondo").files[0];
  let reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo );
    reader.onloadend = function () {
      document.getElementById("contenido").style.backgroundImage = 'url("'+reader.result+'")';
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
        let img = document.createElement("img");
        img.src = reader.result;
        img.width = 300;
        img.id = elemento;
        img.style.zIndex = 1;
        document.getElementById("contenido").appendChild(img);
        MoverLibrementeConElMouse(elemento);
        id = elemento;

        let div = document.createElement("div");
          div.id = "divImagen"+elemento;
          div.innerHTML = "<label for='exampleInputEmail1' class='form-label'>Imagen</label><div class='mb-3'><label  class='form-label'>Tamaño imagen</label><input type='range' class='form-range'  id='imagenT"+id+"'></div><div class='input-group mb-3'><input type='text' class='form-control' value='Este elemento es una imagen' name='' id='imagen"+id+"' aria-describedby='emailHelp' disabled ><button class='btn btn-danger' id='imagenE"+id+"' type='button'><i class='bi bi-trash'></i></button>";
        document.getElementById("input").appendChild(div);
        document.getElementById("imagenE"+id).addEventListener("click", eliminarImagen);
        document.getElementById("imagenT"+id).addEventListener("input", tamañoImagen);
        
      }
    }
  }

  function crearTexto(){

  let elemento = id+1;
  let texto = document.createElement("p");
      texto.id = elemento;
      texto.style.padding = "10px";
      texto.style.fontSize = "20px";
      texto.innerHTML = "Texto";

      document.getElementById("contenido").appendChild(texto);
      MoverLibrementeConElMouse(elemento);
      id = elemento;

        let div = document.createElement("div");
          div.id = "divTexto"+elemento;
          div.innerHTML = "<label for='exampleInputEmail1' class='form-label'>Texto</label><div class='input-group mb-3'><input type='text' class='form-control' value='Texto' name='' id='texto"+id+"' aria-describedby='emailHelp'><button class='btn btn-light' id='textoI"+id+"' type='button'><i class='bi bi-justify-left'></i></button><button class='btn btn-light' id='textoC"+id+"' type='button'><i class='bi bi-justify'></i></button><button class='btn btn-light' id='textoD"+id+"' type='button'><i class='bi bi-justify-right'></i></button><button class='btn btn-light' id='textoB"+id+"' type='button'><i class='bi bi-type-bold'></i></button><button class='btn btn-light dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>Tamaño</button><ul class='dropdown-menu'><li><a class='dropdown-item' id='textoTP"+id+"' >Chico</a></li><li><a class='dropdown-item' id='textoTM"+id+"' >Mdiano</a></li> <li><a class='dropdown-item' id='textoTG"+id+"' >Grande</a></li></ul><input type='color' class='form-control form-control-color' id='colorInput"+id+"' value='#ffffff' title='Color' style='max-width: 50px;'><button class='btn btn-danger' id='textoE"+id+"' type='button'><i class='bi bi-trash'></i></button>";
        document.getElementById("input").appendChild(div);

            document.getElementById("textoE"+id).addEventListener("click", eliminar);
            document.getElementById("textoI"+id).addEventListener("click", izquierda);
            document.getElementById("textoC"+id).addEventListener("click", centrar);
            document.getElementById("textoD"+id).addEventListener("click", derecha);
            document.getElementById("textoB"+id).addEventListener("click", negrita);
            document.getElementById("textoTP"+id).addEventListener("click", textoPeque);
            document.getElementById("textoTM"+id).addEventListener("click", textoMediano);
            document.getElementById("textoTG"+id).addEventListener("click", textoGrande);
            document.getElementById("colorInput"+id).addEventListener("change", colorTexto);
  
            document.getElementById("texto"+id).addEventListener("keyup", function(){
              document.getElementById(id).innerHTML = document.getElementById("texto"+id).value;
            });

    document.getElementById("texto").addEventListener("click", crearTexto);
  
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
  }

  function eliminarImagen(){
    let elemento = this.id;
    let id = elemento.replace("imagenE", "");
    document.getElementById(id).remove();
    document.getElementById("divImagen"+id).remove();
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

  function textoPeque(){
    let elemento = this.id;
    let id = elemento.replace("textoTP", "");
    document.getElementById(id).style.fontSize = "20px";
  }

  function textoMediano(){
    let elemento = this.id;
    let id = elemento.replace("textoTM", "");
    document.getElementById(id).style.fontSize = "40px";
  }

  function textoGrande(){
    let elemento = this.id;
    let id = elemento.replace("textoTG", "");
    document.getElementById(id).style.fontSize = "60px";
  }


  function colorTexto(){
    let elemento = this.id;
    let id = elemento.replace("colorInput", "");
    document.getElementById(id).style.color = document.getElementById("colorInput"+id).value;
  }


function medidas(an,al){
  document.getElementById("contenido").style.width = an+"px";
  document.getElementById("contenido").style.height = al+"px";
} 

document.getElementById("medida1").addEventListener("click", function(){
  document.getElementById("contenido").style.width = "600px";
  document.getElementById("contenido").style.height = "600px";
});

document.getElementById("medida2").addEventListener("click", function(){
  document.getElementById("contenido").style.width = "300px";
  document.getElementById("contenido").style.height = "300px";
});

document.getElementById("medida3").addEventListener("click", function(){
  document.getElementById("contenido").style.width = "10240px";
  document.getElementById("contenido").style.height = "600px";
});

document.getElementById("medida4").addEventListener("click", function(){
  document.getElementById("contenido").style.width = "1600px";
  document.getElementById("contenido").style.height = "600px";
});


// Eventos

let botonCrear = document.getElementById("crearT").addEventListener("click", crearTexto);


customRange2.addEventListener('input', (e) => {
  document.getElementById("contenido").style.backgroundPositionY = e.target.value + "%";
});

customRange1.addEventListener('input', (e) => {
  document.getElementById("contenido").style.backgroundPositionX = e.target.value + "%";
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

colorTexto.oninput = function() {
  document.getElementById("contenido").style.color = this.value;
};
colorFondo.oninput = function() {
  document.getElementById("contenido").style.background = this.value;
};



