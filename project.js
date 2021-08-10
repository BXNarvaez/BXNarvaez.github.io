class GameProject {
    constructor (
        //Defining the parameters
        name, 
        description,
        roles,
        team,
        duration,
        tools,
        genres,
        platforms,
        status
    ) {
        //Defining the properties
        this.name = name;
        this.description = description;
        this.devInfo = {
            roles: roles,
            team: team,
            duration: duration,
            tools: tools
        }
        this.genres = genres;
        this.platforms = platforms;
        this.status = status;
    }
    //Add methods
    UpdateStatus(newStatus){
        this.status = newStatus;
    }
}

export default GameProject;