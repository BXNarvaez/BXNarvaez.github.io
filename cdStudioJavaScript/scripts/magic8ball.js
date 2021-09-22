//MAGIC 8 BALL RESPONSE SCRIPT
class Breakfast{
    constructor(
        name,
        image
    )   {
        this.name = name;
        this.image = image;
    }
}

const BaconEggCheese = new Breakfast (
    'A Bacon Egg & Cheese on a roll with salt, pepper, and ketchup.',
    '../images/breakfast/BaconEggandCheese.jpeg'
)

const ChoppedCheese = new Breakfast (
    'A Chopped Cheese on a roll with ketchup, mayo, lettuce, and tomatoes.',
    '../images/breakfast/ChoppedCheese.jpeg'
)

const BLT = new Breakfast (
    'A BLT on white toast with mayo.',
    '../images/breakfast/BLT.jpg'
)

const PhillyCheesesteak = new Breakfast (
    'A Philly Cheesesteak on a hero with onions.',
    '../images/breakfast/PhillyCheesesteak.jpeg'
)

const HamCheeseLT = new Breakfast (
    'A Ham, Cheese, Lettuce & Tomato on a hero with mayo, salt, and pepper.', 
    '../images/breakfast/HamCheeseLT.jpeg'
)

const breakfastData = [BaconEggCheese, ChoppedCheese, BLT, PhillyCheesesteak, HamCheeseLT]

var randomResult = breakfastData[Math.floor(Math.random() * breakfastData.length)];

let Result = document.createElement('div');

Result.innerHTML = `

    <img class="round-box" 
    src=${randomResult.image} 
    alt="Banner image of ${randomResult.name}"
    >

    <p class="desc-project" style="text-align: center">
        ${randomResult.name}
    </p>

`;

document.querySelector('#display').prepend(Result)

//Create an ARRAY of possible responses. Separate each 'string' with a comma.
var responses = [
    'A Sausage Egg & Cheese on a bagel.',
    'A Butter Roll.',
    'A Ham, Egg & Cheese on a roll with salt, pepper, and ketchup.',
    'A Grilled Cheese with pepper.',
    '2 Eggs, scrambled, with salt, pepper and Home Fries on the side.',
    'A Veggie Omelette with red & green peppers, onions, salt, and pepper.',
    'Nothing. Have nothing today.'
]

