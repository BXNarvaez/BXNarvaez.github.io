import cdstudioData from "./cdstudiodata.js";

const projectContent = cdstudioData.map((project) => {

    // The article wraps both the project-banner and collapsible-box elements into one for an easier prepend. Because of this, the game ID goes on the outer article.
    let projectArticle = document.createElement('article');
    projectArticle.setAttribute("id", project.id)
    projectArticle.style.backgroundColor = "transparent";

    projectArticle.innerHTML = `
        <section class="project-banner" href=${project.readMore}>

            <h2 class="round-box abs-heading">${project.name}</h2>

            <a href=${project.readMore}>

                <img class="round-box" 
                src=${project.bannerImages[0]} 
                alt="Banner image of ${project.name}"
                srcset="${project.bannerImages[0]} 1440w,
                ${project.bannerImages[1]} 1920w,
                ${project.bannerImages[2]} 2560w"
                sizes="(max-width: 1920px) 960px, 1440px,
                (min-width: 1921px) 1920px, 2560px"
                >
            
            </a>

        </section>
    `;

    return projectArticle;
});

const centerColumn = document.querySelector('.centerColumn');

projectContent.forEach( function(project) {
    centerColumn.prepend(project);
});