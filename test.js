import GameProject from "./project.js";
//constructor (name, images, summary, externalLink, internalLink)

const hexPerplexGame = new GameProject (

    "The Hex Perplex",

    [],
    
    "summary",

    "gamesProjects/game0.html",

    "https://danielnarvaezart.itch.io/hexperplex",

);

const clockOutGame = new GameProject (

    "Clock Out!!",

    [],
    
    "summary",

    "gamesProjects/game1.html",

    "https://danielnarvaezart.itch.io/clockout",

);

const projectTemplate = `
    <section class="project-box" onclick="ToggleProjectInfo(this)">

        <h2 class="round-box abs-heading"></h2>

        <picture>

            <source media="(min-width:1280px)"
                    srcset="images/clock/Clock1920x480.jpg 1920w,
                            images/clock/Clock2560x640.jpg 2560w" >
            <source srcset="images/clock/Clock960x240.jpg 960w" >
            <img class="round-box" src="images/clock/Clock960x240.jpg" alt="Clock Out!!">

        </picture>

    </section>

    <section class="round-box collapsible-box">

        <p class="desc-project"></p>

        <nav class="nav-project">

            <a class="flex-item" href="">Read More</a>
            <a class="flex-item" target="_blank" href="">Website</a>

        </nav>

    </section>
`;

const content = `
    <header class="round-box" style="margin-top: 0px; border-radius: 0px 0px 10px 10px;">

    <h1>Daniel Narvaez</h1>

    <div class="menu" role="navigation" aria-label="main menu">

        <a href="/index.html">Games</a>
        <a href="/art.html">Art</a>
        <a href="/about.html">About</a>
        <a href="/resume.html">Resume</a>

    </div>

    </header>

    <div class="centerColumn">

    <section class="project-box" onclick="ToggleProjectInfo(this)">

        <h2 class="round-box abs-heading">Clock Out!!</h2>

        <picture>

            <source media="(min-width:1280px)"
                    srcset="images/clock/Clock1920x480.jpg 1920w,
                            images/clock/Clock2560x640.jpg 2560w" >
            <source srcset="images/clock/Clock960x240.jpg 960w" >
            <img class="round-box" src="images/clock/Clock960x240.jpg" alt="Clock Out!!">

        </picture>

    </section>

    <section class="round-box collapsible-box">

        <p class="desc-project">Fight your bosses (literally) as an unpaid intern in Clock Out!!, an arcade-style fighting game. Wreck chaos, climb the corporate ladder, and fight the system! Square up against unique bosses from different departments, from catty coworkers to slothful supervisors. Upgrade your resume and improve your skills as you climb up. Liquidate the company and bosses as you take down the higher-ups one by one!
        </p>

        <nav class="nav-project">

            <a class="flex-item" href="gamesProjects/game1.html">Read More</a>
            <a class="flex-item" target="_blank" href="https://danielnarvaezart.itch.io/clockout">Website</a>

        </nav>

    </section>

    <section class="project-box" onclick="ToggleProjectInfo(this)">

        <h2 class="round-box abs-heading">The Hex Perplex</h2>

        <picture>

            <source media="(min-width:1280px)"
                    srcset="images/hex/Hex1920x480.jpg 1920w,
                            images/hex/Hex2560x640.jpg 2560w">
            <source srcset="images/hex/Hex960x240.jpg 960w">
            <img class="round-box" src="images/hex/Hex960x240.jpg" alt="The Hex Perplex">

        </picture>

    </section>

    <section class="round-box collapsible-box" id="projectInfo_0">

        <p class="desc-project">Welcome to the Hex Perplex! Can you defeat the unstoppable power that lurks among these walls? Master the power of the spell books and vanquish the curse that holds the castle! Use them to fight enemies and alter your terrain! It will surely be a difficult journey!</p>

        <nav class="nav-project">

            <a class="flex-item" href="gamesProjects/game0.html">Read More</a>
            <a class="flex-item" target="_blank" href="https://danielnarvaezart.itch.io/hexperplex">Website</a>

        </nav>

    </section>

    <div class="round-box">

        <div class="switch">

            <p class="settings">Dark</p>

            <input type="checkbox" id="theme-switch"><label class="switch-bg" for="theme-switch">
            </label>

            <p class="settings">Light</p>

        </div>

    </div>

    </div>

    <footer>

    <p class="copyright">&copy; Daniel Narvaez. All content and trademarks property of their respective owners.</p>

    </footer>
`;

document.body.innerHTML = content;