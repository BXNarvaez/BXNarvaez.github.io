import cdstudioData from "./cdstudiodata.js";

const projectContent = cdstudioData.map((project) => {

    // The article wraps both the project-banner and collapsible-box elements into one for an easier prepend. Because of this, the game ID goes on the outer article.
    let projectArticle = document.createElement('article');
    projectArticle.setAttribute("id", project.id)
    projectArticle.style.backgroundColor = "transparent";

    projectArticle.innerHTML = `
        <section class="project-banner">

            <h2 class="round-box abs-heading">${project.name}</h2>

            <img class="round-box" 
            src=${project.bannerImages[0]} 
            alt="Banner image of ${project.name}"
            srcset="${project.bannerImages[0]} 480w,
            ${project.bannerImages[1]} 960w,
            ${project.bannerImages[2]} 1440w,
            ${project.bannerImages[3]} 1920w,
            ${project.bannerImages[4]} 2560w"
            sizes="(max-width: 640px) 480px,
            (max-width: 1920px) 960px, 1440px,
            (min-width: 1921px) 1920px, 2560px"
            >

        </section>

        <section class="round-box collapsible-box">

            <p class="desc-project">${project.summary}</p>

            <nav class="nav-project">

                <a class="flex-item link" href=${project.readMore}>Project Page</a>

            </nav>

        </section>
    `;

    return projectArticle;
});

const centerColumn = document.querySelector('.centerColumn');

projectContent.forEach( function(project) {
    centerColumn.prepend(project);
});