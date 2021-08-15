const themeSwitch = document.querySelector('#theme-switch');
const projectCollection = document.getElementsByClassName('project-box');
const projectPanels = Array.from(projectCollection);
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

projectPanels.forEach(panel => {
  panel.addEventListener('display', element => {
    let info = document.querySelector('#gameProject_0');
    info.classList.toggle("active-box");
  })
})

  
  
  // const ToggleProjectInfo = function() {
  //   let projectInfo = this.nextElementSibling;
  //   projectInfo.classList.toggle("active-box")
  // }
window.onload = CheckTheme();
console.log(projectPanels); 