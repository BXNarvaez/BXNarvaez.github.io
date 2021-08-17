import gamesData from "./gameprojectdata";

const gameContent = gamesData.map((game) => {

    let bannerBox = document.createElement('section');
    bannerBox.classList.add('project-box');

    let infoBox = document.createElement('section');
    infoBox.classList.add('round-box collapsible-box');

    bannerBox.innerHTML = `
        <h2 class="round-box abs-heading">${game.name}</h2>

        <img class="round-box" 
        src=${game.bannerImages[0]} 
        alt="Banner image of ${game.name}"
        srcset='${game.bannerImages[0]} 480w,
        ${game.bannerImages[1]} 960w,
        ${game.bannerImages[2]} 1440w,
        ${game.bannerImages[3]} 1920w,
        ${game.bannerImages[4]} 2560w'
        sizes="(max-width: 640px) 480px,
        (max-width: 1920px) 960px, 1440px,
        (min-width: 1921px) 1920px, 2560px"
        >
    `;

    infoBox.innerHTML
})

let x = `
<section class="project-box">
        
    <h2 class="round-box abs-heading">Clock Out!!</h2>

    <img class="round-box" 
        src="images/clock/Clock480x120.jpg" 
        alt="Clock Out!!"
        srcset="images/clock/Clock480x120.jpg 480w,
        images/clock/Clock960x240.jpg 960w,
        images/clock/Clock1440x360.jpg 1440w,
        images/clock/Clock1920x480.jpg 1920w,
        images/clock/Clock2560x640.jpg 2560w"
        sizes="(max-width: 640px) 480px,
        (max-width: 1920px) 960px, 1440px,
        (min-width: 1921px) 1920px, 2560px"
    >

</section>

<section class="round-box collapsible-box">

    <p class="desc-project">Fight your bosses (literally) as an unpaid intern in Clock Out!!, an arcade-style fighting game. Wreck chaos, climb the corporate ladder, and fight the system! Square up against unique bosses from different departments, from catty coworkers to slothful supervisors. Upgrade your resume and improve your skills as you climb up. Liquidate the company and bosses as you take down the higher-ups one by one!
    </p>

    <nav class="nav-project">

        <a class="flex-item" href="gamesProjects/game1.html">Read More</a>
        <a class="flex-item" target="_blank" href="https://danielnarvaezart.itch.io/clockout">Website</a>

    </nav>

</section>
`;