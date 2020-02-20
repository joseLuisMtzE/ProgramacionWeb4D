var h1 = document.getElementById("h1");
var titulo = document.getElementById("titulo");
var subtitulo = document.getElementById("subtitulo");
var banner = document.getElementById("banner"),
    fondo = document.getElementById("fondo"),
    imgBanner = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg"],
    img = document.getElementById("img"),
    contBanner = 0;

//eventos
subtitulo.addEventListener('click', hideTitulo);
h1.addEventListener('click', showTitulo)
banner.addEventListener('click', changeBanner)
fondo.addEventListener('click', changeFondo)

function hideTitulo() {
    titulo.style.display = "none"
    console.log("Se ocultó el titulo")
}

function showTitulo() {
    titulo.style.display = "";
    console.log("Se mostró el titulo")
}

function changeBanner() {
   
    if (contBanner < imgBanner.length-1) {
        contBanner++
        img.src = imgBanner[contBanner]         
    }else if(contBanner===imgBanner.length-1){
        contBanner=0;
        img.src = imgBanner[contBanner]
    }
    console.log("Banner cambiado!")
}

function changeFondo() {
    document.getElementById("body").style.backgroundColor=getRandomColor()
    console.log("Fondo cambiado")

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
