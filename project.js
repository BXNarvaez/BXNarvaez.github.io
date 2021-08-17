class GameProject {
    constructor (
        //Defining the parameters
        name, 
        bannerImages,
        summary,
        externalLink,
        internalLink
    ) {
        //Defining the properties

        //The name of the project
        this.name = name;

        //An array of the srcset images for the games page
        this.bannerImages = bannerImages;

        //Short summary about the entire project. Acts as a hook for the viewer.
        this.summary = summary;

        //Link to an external webpage
        this.externalLink = externalLink;

        //Link to the game's page within the website
        this.internalLink = internalLink;
    }
}

export default GameProject;