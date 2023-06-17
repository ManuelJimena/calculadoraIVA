// Función para calcular el IVA
function calcularIVA() {
  // Obtiene el valor del importe sin IVA del elemento con id 'importe'
  var importeSinIVA = parseFloat(document.getElementById('importe').value);
  // Obtiene el valor del país del elemento con id 'pais'
  var pais = document.getElementById('pais').value;
  var iva;

  // Calcula el IVA basado en el país
  if (pais === 'espana') {
      iva = importeSinIVA * 0.21;
  } else if (pais === 'andorra') {
      iva = importeSinIVA * 0.045;
  } else {
      iva = 0;
  }

  // Calcula el total con IVA
  var totalConIVA = importeSinIVA + iva;

  // Muestra el total con IVA en el elemento con id 'importe-iva'
  document.getElementById('importe-iva').textContent = "El importe con IVA es: " + totalConIVA.toFixed(2) + " €";
  // Muestra el elemento con id 'resultado'
  document.getElementById('resultado').style.display = "block";
}

// Obtiene el elemento con id 'checkbox'
const checkbox = document.getElementById('checkbox');

// Añade un event listener al checkbox para cambiar el tema de la página web cuando se cambia el estado del checkbox
checkbox.addEventListener('change', () => {
  // Cambia el tema de la página web
  document.body.classList.toggle('dark');
});
