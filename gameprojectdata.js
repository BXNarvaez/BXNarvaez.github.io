//constructor (name, images, summary, externalLink, internalLink)
import GameProject from "./project.js";

//List projects with the most recent being at the top, and the oldest at the bottom. This is because they must be appended to the HTML in that order.

const clockOutGame = new GameProject (

    "Clock Out!!",

    ['./images/clock/Clock480x120.jpg','./images/clock/Clock960x240.jpg','./images/clock/Clock1440x360.jpg','./images/clock/Clock1920x480.jpg','./images/clock/Clock2560x640.jpg'],
    
    "summary",

    "./gamesProjects/game1.html",

    "https://danielnarvaezart.itch.io/clockout",

);

const hexPerplexGame = new GameProject (

    "The Hex Perplex",

    ['./images/hex/Hex480x120.jpg','./images/hex/Hex960x240.jpg','./images/hex/Hex1440x360.jpg','./images/hex/Hex1920x480.jpg','./images/hex/Hex2560x640.jpg'],
    
    "summary",

    "./gamesProjects/game0.html",

    "https://danielnarvaezart.itch.io/hexperplex",

);

const gamesData = [clockOutGame, hexPerplexGame]

export default gamesData;