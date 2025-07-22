const diccionario = [
  {
    palabra_es: "agua",
    palabra_ny: "Yu'",
    tipo: "sustantivo",
    ejemplo_es: "El agua está fría.",
    ejemplo_ny: "Yu'a' fxize'"
  },
  {
    palabra_es: "comer",
    palabra_ny: "Ũ'",
    tipo: "verbo",
    ejemplo_es: "Quiero comer.",
    ejemplo_ny: "Ũ'wẽt"
  },
  {
    palabra_es: "caminar",
    palabra_ny: "U'h",
    tipo: "verbo",
    ejemplo_es: "Yo camino todos los días.",
    ejemplo_ny: "Anxa eenxisa't u'hjwe'"
  }
];

document.getElementById("buscar").addEventListener("input", function () {
  const input = this.value.trim().toLowerCase();
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (input.length === 0) return;

  const palabra = diccionario.find(item => item.palabra_es.toLowerCase() === input);

  if (palabra) {
    resultado.innerHTML = `
      <div class="nasa-word">${palabra.palabra_ny}</div>
      <div><strong>Tipo:</strong> ${palabra.tipo}</div>
      <div><em>${palabra.ejemplo_es}</em></div>
      <div><em>${palabra.ejemplo_ny}</em></div>
    `;
  } else {
    resultado.innerHTML = "<p>No se encontró esta palabra.</p>";
  }
});
