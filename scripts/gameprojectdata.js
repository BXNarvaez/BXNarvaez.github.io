//constructor (name, images, summary, externalLink, internalLink)
import GameProject from "./project.js";

//List projects with the oldest being at the top/front of the array, and the most recent at the bottom/end of the array. This is because they must be prepended to the HTML in that order.

const hexPerplexGame = new GameProject (

    "The Hex Perplex",

    ['./images/hex/Hex480x120.jpg','./images/hex/Hex960x240.jpg','./images/hex/Hex1920x480.jpg'],
    
    "A roguelike platformer about mastering powerful spells released for web browser. Made with David Queiroga over the span of two months. As our technical artist I coded in Unity and drew assets in Aseprite.",

    "https://danielnarvaezdesign.itch.io/hexperplex",

    "./gamesProjects/hexPerplex.html",

    "Project_0"

);

const clockOutGame = new GameProject (

    "Clock Out!!",

    ['./images/clock/Clock480x120.jpg','./images/clock/Clock960x240.jpg','./images/clock/Clock1920x480.jpg'],
    
    "An arcade-style fighter about an unpaid intern fighting their bosses. Released for iOS and Android. Made with Team Crème at MassDigi SIP 2021. I was the team's designer, and worked in both Machinations and Unity.",

    "https://danielnarvaezdesign.itch.io/clockout",

    "./gamesProjects/clockOut.html",

    "Project_1"

);

const boricuasGame = new GameProject (

    'Project "Boricuas"',

    ['./images/bori/Bori480x120.jpg','./images/bori/Bori960x240.jpg','./images/bori/Bori1920x480.jpg'],

    "My senior thesis project. A 2D experimental platformer about a diasporan who journeys to her motherland to discover the ways of her culture. Released for web browser. I hired and led a team during this project.",

    "https://danielnarvaezdesign.itch.io/project-boricuas",

    "./gamesProjects/boricuas.html",

    "Project_2"

);

// The array with all of the project information. This gets exported to scripts/mapgamesdata.js to be reiterated into the html.
const gamesData = [hexPerplexGame, clockOutGame, boricuasGame]

export default gamesData;