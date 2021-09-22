//constructor (name, images, summary, externalLink, internalLink)
import ProjectClass from "../../scripts/project.js";

//List projects with the oldest being at the top/front of the array, and the most recent at the bottom/end of the array. This is because they must be prepended to the HTML in that order.

const Magic8BallProject = new ProjectClass (

    "Project 1: Magic 8 Ball",

    ["./images/magic8ball/magic8ball480x120.jpg", "./images/magic8ball/magic8ball960x240.jpg", "./images/magic8ball/magic8ball1440x360.jpg", "./images/magic8ball/magic8ball1920x480.jpg", "./images//magic8ball/magic8ball2560x640.jpg"],

    "The Magic 8-Ball is a plastic sphere, made to look like an eight-ball, that is used for fortune-telling or seeking advice. It was invented in 1950 by Albert C. Carter and Abe Bookman and is currently manufactured by Mattel. The user asks a yes–no question to the ball, then turns it over to reveal an answer in a window on the ball. We will use HTML, CSS, and JavaScript to recreate this real world object as a functional website.",

    null,

    "./projects/cdstudio0.html",

    "Project_0"

)

// The array with all of the project information. This gets exported to scripts/mapcdstudiodata.js to be reiterated into the html.
const cdstudioData = [Magic8BallProject]

export default cdstudioData;