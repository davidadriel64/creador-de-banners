
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


input.oninput = function() {
  titulo.innerHTML = input.value;
};
input2.oninput = function() {
  subtitulo.innerHTML = input2.value;
};
input3.oninput = function() {
  codigo.innerHTML = input3.value;
};

function mostrar(){
let archivo = document.getElementById("file").files[0];
let reader = new FileReader();
if (file) {
  reader.readAsDataURL(archivo );
  reader.onloadend = function () {
    document.getElementById("img").src = reader.result;
  }
}
}
function mostrarFondo(){
let archivo = document.getElementById("fileFondo").files[0];
let reader = new FileReader();
if (file) {
  reader.readAsDataURL(archivo );
  reader.onloadend = function () {
    document.getElementById("contenido").style.backgroundImage = 'url("'+reader.result+'")';
  }
}
}

