const themeSwitch = document.querySelector('input');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

const ToggleProjectInfo = function(element) {
    let projectInfo = element.nextElementSibling;
    projectInfo.classList.toggle("active-box")
}