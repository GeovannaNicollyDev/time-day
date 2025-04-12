function mudarCenario() {
    const input = document.getElementById("definirHorário").value;
    if (!input) return alert("Por favor, insira um horário!");

    const [definirHora, definirMinuto] = input.split(":");
    const hora = parseInt(definirHora);
    const minuto = parseInt(definirMinuto);
    var imagens = window.document.getElementById('img-manha')


    if ((hora >= 0 && hora < 12)) {
      imagens.src = 'imagem-manha.jpg'
      document.body.style.background = '#ADD8E6'
    } else if (hora >= 12 && hora < 18) {
      imagens.src = 'imagem-tarde.jpg'
      document.body.style.background = '#FFD580'
    } else {
     imagens.src = 'imagem-noite.jpg'
      document.body.style.background = '#0D214F'
    }

  }


    function upload (){
      var elementoHora = window.document.getElementById('hora');
      var imagens = window.document.getElementById('img-manha')
      var data = new Date();
      var horaAtual = data.getHours();
      elementoHora.innerHTML = `A hora atual da sua máquina é ${horaAtual}`;

      if(horaAtual >= 0 && horaAtual < 12) {
        imagens.src = 'imagem-manha.jpg'
        document.body.style.background = '#ADD8E6'
        
      } else if(horaAtual >= 12 && horaAtual < 18 ) {
         imagens.src = 'imagem-tarde.jpg'
         document.body.style.background = '#FFD580'
        
      } else {
         imagens.src = 'imagem-noite.jpg'
         document.body.style.background = '#0D214F'
        
      }

      
     
  }
  
