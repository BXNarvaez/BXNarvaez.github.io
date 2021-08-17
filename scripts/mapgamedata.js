import gamesData from "./gameprojectdata.js";

const gameContent = gamesData.map((game) => {

    let gameArticle = document.createElement('article');
    gameArticle.setAttribute("id", game.id)
    gameArticle.style.backgroundColor = "transparent";

    gameArticle.innerHTML = `
        <section class="project-box">

            <h2 class="round-box abs-heading">${game.name}</h2>

            <img class="round-box" 
            src=${game.bannerImages[0]} 
            alt="Banner image of ${game.name}"
            srcset="${game.bannerImages[0]} 480w,
            ${game.bannerImages[1]} 960w,
            ${game.bannerImages[2]} 1440w,
            ${game.bannerImages[3]} 1920w,
            ${game.bannerImages[4]} 2560w"
            sizes="(max-width: 640px) 480px,
            (max-width: 1920px) 960px, 1440px,
            (min-width: 1921px) 1920px, 2560px"
            >

        </section>

        <section class="round-box collapsible-box">

            <p class="desc-project">${game.summary}</p>

            <nav class="nav-project">

                <a class="flex-item link" href=${game.readMore}>Read More</a>
                <a class="flex-item link" target="_blank" href=${game.website}>Website</a>

            </nav>

        </section>
    `;

    return gameArticle;
});

const centerColumn = document.querySelector('.centerColumn');

gameContent.forEach( function(game) {
    centerColumn.prepend(game);
});