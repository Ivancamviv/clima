let clima = {
  apiKey: "01734c284dbfd6a977044c653339c098",
  fetchClima: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&&units=metric&appid=${this.apiKey}&lang=sp`
    )
      .then((response) => response.json())
      .then((data) => this.mostrarInfo(data));
  },
  mostrarInfo: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    let nombre = document.getElementById("nombre");
    nombre.innerHTML = name;

    let descripcion = document.getElementById("descripcion");
    descripcion.innerHTML = description;

    let temperatura = document.getElementById("temperatura");
    temperatura.innerHTML = `Temperatura: ${Math.round(temp)}º`;

    let humedad = document.getElementById("humedad");
    humedad.innerHTML = `Humedad: ${humidity}%`;

    let viento = document.getElementById("viento");
    viento.innerHTML = `Velocidad de viento: ${speed} km/h`;

    let imagen = document.getElementById("icon");
    imagen.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    let fondo = document.querySelector(".container");
    fondo.style.backgroundImage = ` url('https://source.unsplash.com/1600x1000/?${name}')`;
  },

  buscar: function () {
    event.preventDefault();
    let formulario = event.currentTarget;
    let ciudadBuscar = formulario.elements.ciudad.value;
    this.fetchClima(ciudadBuscar);
    formulario.elements.ciudad.value = "";
  },
};

function ciudad(e) {
  clima.buscar();
}

let formulario = document.getElementById("principal");
formulario.addEventListener("submit", ciudad);
