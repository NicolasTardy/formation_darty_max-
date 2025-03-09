document.addEventListener('DOMContentLoaded', () => {
    const validerBtn = document.getElementById('validerBtn');
    const identifiantInput = document.getElementById('identifiant');
    const message = document.getElementById('message');
  
    validerBtn.addEventListener('click', () => {
      const identifiant = identifiantInput.value.trim();
      
      if (identifiant) {
        localStorage.setItem('identifiant', identifiant);
        window.location.href = 'pages/modules.html';
      } else {
        message.textContent = '⚠️ Veuillez entrer un identifiant valide.';
      }
    });
  });