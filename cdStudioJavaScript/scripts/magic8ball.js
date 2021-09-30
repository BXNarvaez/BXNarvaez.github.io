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

const Yogurt = new Breakfast (
    "With no time to spare at all you could probably have a Greek Yogurt and that's about it.",
    '../images/breakfast/GreekYogurt.jpeg'
)

const ScrambledEggs = new Breakfast (
    "You've probably got some time for these sadly cooked scrambled eggs.",
    '../images/breakfast/ScrambledEggs.jpg'
)

const BagelCreamCheeseJelly = new Breakfast (
    "If you get ready now, you should have a bagel with cream cheese and jelly this morning",
    '../images/breakfast/BagelCreamCheeseJelly.jpeg'
)

const BaconEggCheese = new Breakfast (
    'You should have a bacon egg & cheese on a roll with salt, pepper, and ketchup.',
    '../images/breakfast/BaconEggandCheese.jpeg'
)

const ChoppedCheese = new Breakfast (
    'A good Chopped Cheese on a roll with ketchup, mayo, lettuce, and tomatoes is what you should start the day off with.',
    '../images/breakfast/ChoppedCheese.jpeg'
)

const BLT = new Breakfast (
    'I foresee you having a BLT on white toast with mayo.',
    '../images/breakfast/BLT.jpg'
)

const VeggieOmelette = new Breakfast (
    'You have enough time to make yourself a veggie omelette. Enjoy!',
    '../images/breakfast/VeggieOmelette.jpeg'
)

const HamCheeseLT = new Breakfast (
    'It would be wise to have a Ham, Cheese, Lettuce & Tomato on a hero with mayo, salt, and pepper on this fine morning.', 
    '../images/breakfast/HamCheeseLT.jpeg'
)

const breakfastData = [Yogurt, ScrambledEggs, BagelCreamCheeseJelly, BaconEggCheese, BLT, HamCheeseLT, ChoppedCheese, VeggieOmelette]

//This is where the data from the above objects are randomly selected from and prepended to the html document

var surveyValue = localStorage.getItem('results');

const display = document.querySelector('#display');

const DisplayResult = function() {
    if(display !== null)
    {
        var randomResult = breakfastData[localStorage.getItem('results')];

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

        display.prepend(Result);
    }
}

const submitButton = document.querySelector('#submit');

if(submitButton !== null)
{
    submitButton.addEventListener('click', () => {
        surveyValue = localStorage.setItem('results', '');
        if(surveyValue !== null)
        {
            UpdateResults();
        }
    })
}

const UpdateResults = function() {
    var q1 = document.getElementById('q1');
    var q2 = document.getElementById('q2');
    var q3 = document.getElementById('q3');

    var val1 = q1.options[q1.selectedIndex].value;
    var val2 = q2.options[q2.selectedIndex].value;
    var val3 = q3.options[q3.selectedIndex].value;

    var finalResult = Number(val1) + Number(val2) + Number(val3);

    localStorage.setItem('results', finalResult);
}

window.onload = DisplayResult();