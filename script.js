const date = {
  day: 4,
  month: 8,
}
const fechaCumpleanos = new Date(new Date().getFullYear(), date.month, date.day);
const imagen =   document.getElementById("imagen") 
imagen.classList.add("dis")

function actualizarCuentaRegresiva() {
    const ahora = new Date();
    var diferencia = fechaCumpleanos - ahora;

    if (ahora.getDay()  == fechaCumpleanos.getDay() && ahora.getMonth() == fechaCumpleanos.getMonth() && diferencia <= 0) {
        document.getElementById('countdown').innerHTML = '¡Feliz Cumpleaños! 🎉🎈';
    } else {
      
      if ((ahora.getMonth() >= date.month)) {
        document.getElementById('countdown').innerHTML = 'Ya pasó el cumpleaños xd';
      }
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = 
        `
        ${dias > 0 ? `${dias}d `: ""
        }${horas > 0 ? `${horas}h `: ""
        }${minutos > 0 ? `${minutos}m ` : ""
        }${segundos}s`;
    }
}
setInterval(actualizarCuentaRegresiva, 1000); // Actualizar cada segundo
actualizarCuentaRegresiva(); // Actualizar al cargar la página

function researchMeme() {
  fetch(URL("https://meme-api.com/gimme/maau"))  .then(response => response.text())
  .then(data => JSON.parse(data))
  .then(asd => {
    if (asd.nsfw)
      return researchMeme();
imagen.classList.remove("dis")
imagen.classList.remove("appear")

   imagen.src = asd.url;
   imagen.href = asd.postLink;
   imagen.onclick = a => {
      window.open(asd.postLink);
   }
    console.log(asd);
    
  }).catch(e => {
    console.log(e);
    researchMeme();
  });
}
function URL(url) {
  return "https://universal-cors-proxy.glitch.me/" + encodeURIComponent(url)
}
researchMeme();