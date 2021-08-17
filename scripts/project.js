class GameProject {
    constructor (
        //Defining the parameters
        name, 
        bannerImages,
        summary,
        website,
        readMore,
        id
    ) {
        //Defining the properties

        //The name of the project
        this.name = name;

        //An array of the srcset images for the games page
        this.bannerImages = bannerImages;

        //A brief description of the project as a whole
        this.summary = summary;

        //Link to an external webpage
        this.website = website;

        //Link to the game's page within the website
        this.readMore = readMore;

        //id attribute
        this.id = id;
    }
}

export default GameProject;

        // role,
        // team,
        // duration,
        // tools,

        // The primary role(s) I had in this project
        // this.role = role;

        // The team/team size of the project
        // this.team = team;

        // The time span of the project's development
        // this.duration = duration;

        // The hardware/software used to make the project
        // this.tools = tools;