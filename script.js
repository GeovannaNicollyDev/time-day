function mudarCenario() {
    const input = document.getElementById("definirHorário").value;
    if (!input) return alert("Por favor, insira um horário!");

    const [definirHora, definirMinuto] = input.split(":");
    const hora = parseInt(definirHora);
    const minuto = parseInt(definirMinuto);

    let backgroundColor;

    if ((hora >= 6 && hora < 15)) {
      
      backgroundColor = "#ADD8E6"; 
    } else if (hora >= 15 && hora < 18) {
      
      backgroundColor = "#FFD580"; 
    } else {
     
      backgroundColor = "#000000"; 
    }

    document.body.style.backgroundColor = backgroundColor;
  }