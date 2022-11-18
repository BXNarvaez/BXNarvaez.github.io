import gamesData from "./gameprojectdata.js";

const gameContent = gamesData.map((game) => {

    // The article wraps both the project-banner and collapsible-box elements into one for an easier prepend. Because of this, the game ID goes on the outer article.
    let gameArticle = document.createElement('article');
    gameArticle.setAttribute("id", game.id);
    gameArticle.style.backgroundColor = "transparent";

    gameArticle.innerHTML = `
        <section class="round-box project-banner">

            <h2 class="round-box project-title">${game.name}</h2>

            <img  
            src=${game.bannerImages[0]} 
            alt="Banner image of ${game.name}"
            srcset="${game.bannerImages[0]} 480w,
            ${game.bannerImages[1]} 960w,
            ${game.bannerImages[2]} 1920w"
            sizes="(max-width: 640px) 480px,
            (max-width: 1920px) 960px,
            (min-width: 1921px) 1920px"
            >

        </section>

        <section class="round-box collapsible-box">

            <div class="description-wrap">

                <p class="desc-project">${game.summary} <a class="link" href=${game.readMore}>Read more</a></p>

            </div>

        </section>
    `;

    let linkMenu = document.createElement('nav')
    linkMenu.setAttribute("class", "menu")
    
    for (let index = 0; index < game.linkAddresses.length; index++) {
        let _link = document.createElement('a');
        _link.setAttribute("class", "link");
        _link.setAttribute("href", game.linkAddresses[index])
        _link.innerHTML = `${game.linkTexts[index]}`;

        linkMenu.append(_link);
    }

    gameArticle.lastElementChild.append(linkMenu);

    return gameArticle;
});

const centerColumn = document.querySelector('.centerColumn');

gameContent.forEach( function(game) {
    centerColumn.prepend(game);

});

//Foreach loop to populate the links, each one can be different.
