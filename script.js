function calcularIVA() {
  var importeSinIVA = parseFloat(document.getElementById('importe').value);
  var pais = document.getElementById('pais').value;
  var iva;

  if (pais === 'espana') {
    iva = importeSinIVA * 0.21;
  } else if (pais === 'andorra') {
    iva = importeSinIVA * 0.045;
  } else {
    iva = 0;
  }

  var totalConIVA = importeSinIVA + iva;

  document.getElementById('importe-iva').textContent = "El importe con IVA es: " + totalConIVA.toFixed(2) + " €";
  document.getElementById('resultado').style.display = "block";
}
