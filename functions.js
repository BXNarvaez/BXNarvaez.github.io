const themeSwitch = document.querySelector('#theme-switch');

themeSwitch.addEventListener('change', () => {
  let theme = localStorage.getItem('data-theme');
  if (theme === 'dark'){
    ChangeThemeToLight();
  } else {
    ChangeThemeToDark();
  }   
});

const ChangeThemeToLight = function() {
  document.documentElement.setAttribute("data-theme", 'light');
  localStorage.setItem('data-theme', 'light');

  document.querySelector("body").classList.toggle('dark')
}

const ChangeThemeToDark = function() {
  document.documentElement.setAttribute("data-theme", 'dark');
  localStorage.setItem('data-theme', 'dark');

  document.querySelector("body").classList.toggle('dark')
}

const ToggleProjectInfo = function(element) {
    let projectInfo = element.nextElementSibling;
    projectInfo.classList.toggle("active-box")
}