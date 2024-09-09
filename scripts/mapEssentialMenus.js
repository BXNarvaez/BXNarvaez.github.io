const mainMenu = document.createElement('header');
mainMenu.setAttribute('id', 'main-menu');
mainMenu.setAttribute('class', 'round-box');
mainMenu.innerHTML = `

    <h1>Daniel Narvaez</h1>
            
    <nav class="menu" role="navigation" aria-label="main menu">

        <a class="link" href="/index.html">Games</a>
        <a class="link" href="/about.html">About</a>
        <a class="link" href="/resume.html">Resume</a>
        
    </nav>
        
    `
        // <a class="link" href="/systems.html">Systems</a>

const contactMenu = document.createElement('section');
contactMenu.setAttribute('id', 'contact-menu');
contactMenu.setAttribute('class', 'round-box');
contactMenu.innerHTML = `

    <h2 style="text-align: center;">Let's connect.</h2>

    <nav class="menu">

        <a class="link" target="_blank" href="https://www.linkedin.com/in/dan-narvaez/">LinkedIn</a>
        <a class="link" target="_blank" href="https://twitter.com/BXNarvaez">Twitter</a>
        <a class="link" href="mailto:hello@daniel-narvaez.com">Email</a>
        
    </nav>
        
    `
        // <a class="link" target="_blank" href="https://machinations.io/community/danielnarvaezdesign/">Machinations</a>

const themeMenu = document.createElement('section');
themeMenu.setAttribute('id', 'theme-menu');
themeMenu.setAttribute('class', 'round-box');
themeMenu.innerHTML = `

    <div class="switch">
            
    <p class="settings">Dark</p>

    <input type="checkbox" id="theme-switch"><label class="switch-bg" for="theme-switch">
    </label>

    <p class="settings">Light</p>

    </div>

`

const copyright = document.createElement('footer');
copyright.setAttribute('id', 'copyright');
copyright.innerHTML = `

    <p class="copyright">&copy; Daniel Narvaez. All content and trademarks property of their respective owners.</p>

`

function setupPage() {

    //Main menu at the top
    document.body.prepend(mainMenu);

    //Contact menu goes first at the bottom
    document.querySelector('.centerColumn').append(contactMenu);

    //Theme menu goes second at the bottom
    document.querySelector('.centerColumn').append(themeMenu);

    //Copyright goes at the very bottom
    document.body.append(copyright);

}

window.onload = setupPage();