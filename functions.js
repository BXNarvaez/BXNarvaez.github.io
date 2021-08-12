const themeSwitch = document.querySelector('#theme-switch');
var theme = localStorage.getItem('data-theme');

const ChangeThemeToLight = function() {
  document.documentElement.setAttribute("data-theme", 'light');
  localStorage.setItem('data-theme', 'light');
}

const ChangeThemeToDark = function() {
  document.documentElement.setAttribute("data-theme", 'dark');
  localStorage.setItem('data-theme', 'dark');
}

const CheckTheme = function() {
  const localStorageTheme = localStorage.getItem('data-theme');
  
  if (localStorageTheme !== null && localStorageTheme === "dark") {
    ChangeThemeToDark();
    themeSwitch.checked = true;
  }
}

themeSwitch.addEventListener('change', () => {
  theme = localStorage.getItem('data-theme');
  if (theme === 'dark'){
    ChangeThemeToLight();
  } else {
    ChangeThemeToDark();
  }   
});

const ToggleProjectInfo = function(element) {
  let projectInfo = element.nextElementSibling;
  projectInfo.classList.toggle("active-box")
}

window.onload = CheckTheme();