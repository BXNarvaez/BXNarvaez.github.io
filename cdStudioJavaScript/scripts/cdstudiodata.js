//constructor (name, images, summary, externalLink, internalLink)
import ProjectClass from "../../scripts/project.js";

//List projects with the oldest being at the top/front of the array, and the most recent at the bottom/end of the array. This is because they must be prepended to the HTML in that order.

const Magic8BallProject = new ProjectClass (

    "Project 1: Magic 8 Ball",

    ["./images/magic8ball/magic8ball1440x360.jpg", "./images/magic8ball/magic8ball1920x480.jpg", "./images//magic8ball/magic8ball2560x640.jpg"],

    null,

    null,

    "./projects/cdstudio0.html",

    "Project_0"

)

const PrinterProject = new ProjectClass (

    "Project 2: Printer",

    ["./images/printer/printer1440x360.jpg", "./images/printer/printer1920x480.jpg", "./images/printer/printer2560x640.jpg"],

    null,

    null,

    "./projects/cdstudio1.html",

    "Project_1"

)

// The array with all of the project information. This gets exported to scripts/mapcdstudiodata.js to be reiterated into the html.
const cdstudioData = [Magic8BallProject, PrinterProject]

export default cdstudioData;