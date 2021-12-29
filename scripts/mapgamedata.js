import gamesData from "./gameprojectdata.js";

const gameContent = gamesData.map((game) => {

    // The article wraps both the project-banner and collapsible-box elements into one for an easier prepend. Because of this, the game ID goes on the outer article.
    let gameArticle = document.createElement('article');
    gameArticle.setAttribute("id", game.id)
    gameArticle.style.backgroundColor = "transparent";

    gameArticle.innerHTML = `
        <section class="round-box project-banner">

            <h2 class="round-box project-title">${game.name}</h2>

            <img  
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

            <div class="description-wrap">

                <p class="desc-project">${game.summary}</p>

            </div>

            <nav class="nav-project">

                <a class="link" href=${game.readMore}>Read More</a>
                <a class="link" target="_blank" href=${game.website}>Website</a>

            </nav>

        </section>
    `;

    return gameArticle;
});

const centerColumn = document.querySelector('.centerColumn');

gameContent.forEach( function(game) {
    centerColumn.prepend(game);
});