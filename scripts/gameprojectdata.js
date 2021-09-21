//constructor (name, images, summary, externalLink, internalLink, id)
import ProjectClass from "./project.js";

//List projects with the oldest being at the top/front of the array, and the most recent at the bottom/end of the array. This is because they must be prepended to the HTML in that order.

const hexPerplexGame = new ProjectClass (

    "The Hex Perplex",

    ['./images/hex/Hex480x120.jpg','./images/hex/Hex960x240.jpg','./images/hex/Hex1440x360.jpg','./images/hex/Hex1920x480.jpg','./images/hex/Hex2560x640.jpg'],
    
    "A roguelike platformer about mastering powerful spells released for web browser. Made with David Queiroga over the span of two months. As our technical artist I coded in Unity and drew assets in Aseprite.",

    "https://danielnarvaezart.itch.io/hexperplex",

    "./gamesProjects/game0.html",

    "Project_0"

);

const clockOutGame = new ProjectClass (

    "Clock Out!!",

    ['./images/clock/Clock480x120.jpg','./images/clock/Clock960x240.jpg','./images/clock/Clock1440x360.jpg','./images/clock/Clock1920x480.jpg','./images/clock/Clock2560x640.jpg'],
    
    "An arcade-style fighter about an unpaid intern fighting their bosses. Released for iOS and Android. Made with Team Crème at MassDigi SIP 2021. I was the team's designer, and worked in both Machinations.io and Unity.",

    "https://danielnarvaezart.itch.io/clockout",

    "./gamesProjects/game1.html",

    "Project_1"

);

// The array with all of the project information. This gets exported to scripts/mapgamesdata.js to be reiterated into the html.
const gamesData = [hexPerplexGame, clockOutGame]

export default gamesData;