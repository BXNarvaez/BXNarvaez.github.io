// Searches for the Light/Dark mode switch. Always at the bottom of the page before copyright.
const themeSwitch = document.querySelector('#theme-switch');

// projectCollection grabs an HTMLCollection of the projects and projectBanners turns that collection into an array.
const projectCollection = document.getElementsByClassName('project-banner');
const projectBanners = Array.from(projectCollection);

// Checks the current color mode theme. This is either 'light' or 'dark'.
var theme = localStorage.getItem('data-theme');

const ChangeThemeToLight = function() {
  document.documentElement.setAttribute('data-theme', 'light');
  localStorage.setItem('data-theme', 'light');
}

const ChangeThemeToDark = function() {
  document.documentElement.setAttribute('data-theme', 'dark');
  localStorage.setItem('data-theme', 'dark');
}

// On the page's load this function is called to check what the data theme currently is in localStorage. If the color mode theme is dark, the page updates to reflect that.
const CheckTheme = function() {
  if (theme !== null && theme === "dark") {
    ChangeThemeToDark();
    themeSwitch.checked = true;
  }
}

// This function is called whenever the switch is toggled. if the color mode theme is dark, light mode is activated, and vice-versa.
themeSwitch.addEventListener('change', () => {
  theme = localStorage.getItem('data-theme');
  if (theme === 'dark'){
    ChangeThemeToLight();
  } else {
    ChangeThemeToDark();
  }   
});

// The array collected by projectBanners is then given toggle functionality for activating and collapsing a project's info panel
projectBanners.forEach(panel => {
  panel.addEventListener('click', function() {
    let projectInfo = this.nextElementSibling;
    projectInfo.classList.toggle('active-box');
  })
})

window.onload = CheckTheme();