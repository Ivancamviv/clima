/*fetch("https://www.metaweather.com/api/location/search/?query=london")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
let divC = document.getElementById("capa1");
    let list = data.items;
    for (let index = 0; index < list.length; index++) {
      let element = list[index].aliases;
      let divP = document.createElement("p");
      divP.className = "nombresCapitulos";
      for (const x of element) {
        divP.innerHTML = x;
      }
      divC.append(divP);}*/

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

    /*let info = document.getElementById("informacion");
    let nombre = document.createElement("h1");
    nombre.innerHTML = name;
    info.append(nombre);

    let descripcion = document.createElement("h3");
    descripcion.innerHTML = description;
    info.append(descripcion);

    let divDetallada = document.createElement("div");
    divDetallada.id = "informacionDetallada";
    info.append(divDetallada);

    let temperatura = document.createElement("p");
    temperatura.innerHTML = `Temperatura: ${temp}`;
    divDetallada.append(temperatura);

    let humedad = document.createElement("p");
    humedad.innerHTML = `Humedad: ${humidity}`;
    divDetallada.append(humedad);

    let viento = document.createElement("p");
    viento.innerHTML = `Velocidad de viento: ${speed}`;
    divDetallada.append(viento);*/

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
  },
};
