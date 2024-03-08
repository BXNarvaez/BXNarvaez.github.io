//constructor (name, bannerImages, summary, linkAddresses, linkTexts, readMore, id)
import GameProject from "./project.js";

//List projects with the oldest being at the top/front of the array, and the most recent at the bottom/end of the array. This is because they must be prepended to the HTML in that order.
const almaGame = new GameProject (

    "Alma and the Cave of Breaths",

    ['./images/alma/Alma480.jpg', './images/alma/Alma960.jpg', './images/alma/Alma1920.jpg'],

    "A handdrawn 2D platformer. My first game exhibited to the public at Wonderville NYC. As a solo developer I processed all of the art and designed the game in Unity.",

    ["https://danielnarvaezdesign.itch.io/alma"],

    ["Play on Itch.io"],

    "./gamesProjects/alma.html",

    "Project_0"

);

const trackGame = new GameProject (

    "Track",

    ['./images/track/Track480.jpg', './images/track/Track960.jpg', './images/track/Track1920.jpg'],

    "An experimental walking simulator exploring the cause & effect relationship between enactive realism and user engagement in games. Developed in Unity, I modeled the 3D assets and composed the soundtracks.",

    ["https://danielnarvaezdesign.itch.io/track"],

    ["Play on Itch.io"],

    "./gamesProjects/track.html",

    "Project_1"
)

const hexPerplexGame = new GameProject (

    "The Hex Perplex",

    ['./images/hex/Hex480x120.jpg','./images/hex/Hex960x240.jpg','./images/hex/Hex1920x480.jpg'],
    
    "A roguelike platformer about mastering powerful spells released for web browser. Made with David Queiroga over the span of two months. As our technical artist I coded in Unity and illustrated in Aseprite.",

    ["https://danielnarvaezdesign.itch.io/hexperplex"],

    ["Play on Itch.io"],

    "./gamesProjects/hexPerplex.html",

    "Project_2"

);

const clockOutGame = new GameProject (

    "Clock Out!!",

    ['./images/clock/Clock480x120.jpg','./images/clock/Clock960x240.jpg','./images/clock/Clock1920x480.jpg'],
    
    "An arcade-style fighter about an unpaid intern fighting their bosses. Released for iOS and Android. Made with Team Crème at MassDigi SIP 2021. I was the team's designer, and worked in both Machinations and Unity.",

    ["https://play.google.com/store/apps/details?id=com.MassDiGI.Creme", "https://apps.apple.com/us/app/clock-out/id1570676915"],

    ["Download for Android", "Download for iOS"],

    "./gamesProjects/clockOut.html",

    "Project_3"

);

const boricuasGame = new GameProject (

    'Project "Boricuas"',

    ['./images/bori/Bori480x120.jpg','./images/bori/Bori960x240.jpg','./images/bori/Bori1920x480.jpg'],

    "My senior thesis project. A 2D experimental platformer about a diasporan who journeys to her motherland to discover the ways of her culture. Released for web browser. I hired and led a team during this project.",

    ["https://danielnarvaezdesign.itch.io/project-boricuas"],

    ["Play on Itch.io"],

    "./gamesProjects/boricuas.html",

    "Project_4"

);

const starGame = new GameProject (

    'Star Sweepers',

    ['./images/star/Star480x120.jpg','./images/star/Star960x240.jpg','./images/star/Star1920x480.jpg'],

    "Description here",

    ["https://danielnarvaezdesign.itch.io/star-sweepers"],

    ["Play on Itch.io"],

    "./gamesProjects/star.html",

    "Project_5"

)

// The array with all of the project information. This gets exported to scripts/mapgamesdata.js to be reiterated into the html.
const gamesData = [starGame, boricuasGame, clockOutGame, hexPerplexGame, trackGame, almaGame]

export default gamesData;