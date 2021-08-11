const ToggleMenu = function(element) {
    
}

const ToggleProjectInfo = function(element) {
    let projectInfo = element.nextElementSibling;
    projectInfo.classList.toggle("active-box")
}


const themeSwitch = document.querySelector('input');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});