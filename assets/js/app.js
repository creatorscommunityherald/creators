document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-button');
    const logoImg = document.querySelector('#logo img');
    let currentTheme = 'light'; // set the initial theme to light
  
    btn.addEventListener('click', () => {
      if (currentTheme === 'light') {
        // switch to dark mode
        currentTheme = 'dark';
        logoImg.src = './assets/img/CreatorsLogo.png';
      } else {
        // switch to light mode
        currentTheme = 'light';
        logoImg.src = './assets/img/CreatorsLogoblack.png';
      }
    });
  });
  


  