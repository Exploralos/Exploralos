function mostrarInfo(lugar) {
  const info = {
    tepoztlan: `
      <h3>Tepoztlán</h3>
      <p>Pueblo mágico con misticismo y vistas hermosas del Tepozteco.</p>
      <iframe src="https://www.google.com/maps?q=tepoztlán&output=embed" width="100%" height="300"></iframe>
    `,
    cuernavaca: `
      <h3>Cuernavaca</h3>
      <p>La ciudad de la eterna primavera, ideal para el descanso y cultura.</p>
      <iframe src="https://www.google.com/maps?q=cuernavaca&output=embed" width="100%" height="300"></iframe>
    `
  };

  document.getElementById("contenidoLugar").innerHTML = info[lugar];
  document.getElementById("infoLugar").classList.add("info-activa");
}

function cerrarInfo() {
  document.getElementById("infoLugar").classList.remove("info-activa");
  document.getElementById("contenidoLugar").innerHTML = "";
}
