const basic_url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const div = document.querySelector("div");
div.classList.add("pokemon");

let userInputInteger = 1;
let numberInteger = 1;

const putNewPrompt = document.querySelector("#clickMe");
putNewPrompt.addEventListener('click', function () {
    /*
    let userInput = document.getElementById(numberOfPokemons)
    userInputInteger = parseInt(userInput.value);
    */

    let number = prompt("number of pokemons?")
    numberInteger = parseInt(number)
    for (let i = 1; i <= numberInteger; i++) {
        const label = document.createElement("button");
        label.classList.add("spanClass");
        label.innerText = `#${i}`
        const image = document.createElement('img');
        image.classList.add("imageEffect");
        image.src = `${basic_url}${i}.png`
        div.append(image);
        div.append(label);
    }
    const pokemonButtons = document.querySelectorAll("button");
    let colorpok = "";
    for (let pokbutton of pokemonButtons) {
        pokbutton.addEventListener('click', function () {
            function changeColor() {
                let rpok = generatingRandom();
                let gpok = generatingRandom();
                let bpok = generatingRandom();
                return colorpok = `rgb(${rpok},${gpok},${bpok})`;
            }
            pokbutton.style.backgroundColor = changeColor();
        })
    }
})

const btn = document.querySelector("#b2");
btn.onclick = function () {
    console.log("you clicked me!")
    console.log("I hope it worked")
}

btn.onmouseenter = function () {
    console.log("Ahhhhh")
}

const btn3 = document.querySelector("#b3");

btn3.addEventListener('click', function () {
    alert("clicked")
});




//so we cannot add two things together with the second method

// we can pass more options and would have more flexibility when we use the eventListeners.


function generatingRandom() {
    return Math.floor((Math.random() * 255));
}
function changeColor() {
    const body = document.querySelector('body');
    let r = generatingRandom();
    let g = generatingRandom();
    let b = generatingRandom();
    let color = `rgb(${r},${g},${b})`;
    body.style.backgroundColor = color;
}

const newButton = document.querySelector('#b4');
newButton.addEventListener('click', changeColor);


const tweetForm = document.querySelector("#tweetForm");
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    //const username = document.querySelectorAll('input')[0];
    //const userTweet = document.querySelectorAll('input')[1];

    const newUsername = tweetForm.elements.username.value;
    const newTweet = tweetForm.elements.tweet.value;
    addTweet(newUsername, newTweet);
    tweetForm.elements.username.value = '';
    tweetForm.elements.tweet.value = '';


})

const tweetContainer = document.querySelector("#AddingNewtweets")

const addTweet = (username, tweet) => {

    const newTweet = document.createElement('li');
    const boldTagUsername = document.createElement('b');
    boldTagUsername.append(username);
    newTweet.append(boldTagUsername);
    newTweet.append(`- ${tweet}`)
    tweetContainer.append(newTweet);
}


const form = document.querySelector('#shoppingList');

const refreshThePage = form.addEventListener('submit', function (e) {
    e.preventDefault();

    const product = form.elements.product.value;
    const quantity = form.elements.qty.value;

    addToShoppingList(product, quantity)
    form.elements.product.value = "";
    form.elements.qty.value = "";
})

const shopListContainer = document.querySelector('#list')

const addToShoppingList = (product, quantity) => {
    const newProduct = document.createElement('li');
    newProduct.textContent = `${quantity} ${product}`
    shopListContainer.appendChild(newProduct)
}



shopListContainer.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove();
})

const input = document.querySelector('#typeBox')

//instead of input we could also use 'change'
input.addEventListener('input', function (e) {
    e.preventDefault();
    console.log("Hello Buddy we are using input as our addEventListener")
    const h3 = document.querySelector('#liveTextChange')
    h3.innerText = input.value;
})



const pointDisplay = document.querySelector("#pointDisplay");



const points = document.querySelector("#totalPoints");
let totalPoint = 0;
points.addEventListener('change', function (e) {
    e.preventDefault();
    totalPoint = points.value;
})

//const playerOneScoreDisplay = document.querySelector("#playerOneScoreDisplay")
//const playerTwoScoreDisplay = document.querySelector("#playerTwoScoreDisplay")


function displayingPoints() {

    if (playerOne == totalPoint) {
        //playerOneScoreDisplay.innerText = totalPoint;
        //playerOneScoreDisplay.style.color = "green";
        //playerTwoScoreDisplay.style.color = "red";
        pointDisplay.innerText = "Game over"
        reset();
    } else if (playerTwo == totalPoint) {
        //playerOneScoreDisplay.style.color = "red";
        //playerTwoScoreDisplay.style.color = "green";
        pointDisplay.innerText = "Game over"

        reset();
    } else {
        pointDisplay.innerText = `${playerOne} to ${playerTwo}`
    }
}


const playerOnePoints = document.querySelector("#playerOne");

let playerOne = 0;
playerOnePoints.addEventListener('click', function (e) {
    e.preventDefault();
    playerOne++;
    console.log(`player 1: ${playerOne} player 2: ${playerTwo}`)
    displayingPoints();

})

let playerTwo = 0;
const playerTwoPoints = document.querySelector("#playerTwo")
playerTwoPoints.addEventListener('click', function (e) {
    e.preventDefault();
    playerTwo++;
    console.log(`player 1: ${playerOne} player 2: ${playerTwo}`)
    displayingPoints();
})

const resetGame = document.querySelector("#resetGame");



resetGame.addEventListener('click', (e) => {
    e.preventDefault();
    reset();
    pointDisplay.innerText = `${playerOne} to ${playerTwo}`
})


function reset() {
    totalPoint = 0;
    playerOne = 0;
    playerTwo = 0;
    points.value = "";
}


const totalP = document.querySelector("#totalP");
const pOne = document.querySelector("#pOne")
const pTwo = document.querySelector("#pTwo")
const pOneDisplay = document.querySelector("#playerOneScoreDisplay")
const pTwoDisplay = document.querySelector("#playerTwoScoreDisplay")
const resetButton = document.querySelector("#reset")

let isGameOver = false;
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;

totalP.addEventListener('change', () => {
    winningScore = totalP.value;
})

pOne.addEventListener('click', (e) => {
    e.preventDefault();

    if (!isGameOver) {
        p1Score++;
        pOneDisplay.textContent = p1Score;
    }
    if (p1Score == winningScore) {
        isGameOver = true;
        pOneDisplay.classList.add('winner');
        pTwoDisplay.classList.add('loser');
    }

})

pTwo.addEventListener('click', (e) => {
    e.preventDefault();

    if (!isGameOver) {
        p2Score++;
        pTwoDisplay.textContent = p2Score;
    }
    if (p2Score == winningScore) {
        isGameOver = true;
        pTwoDisplay.classList.add('winner');
        pOneDisplay.classList.add('loser');
    }
})

resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    p1Score = 0;
    p2Score = 0;
    pOneDisplay.textContent = p1Score;
    pTwoDisplay.textContent = p2Score;
    isGameOver = false;
    totalP.value = "";
    pOneDisplay.classList.remove('winner', 'loser');
    pTwoDisplay.classList.remove('winner', 'loser');
})

setTimeout(() => {
    document.querySelector("#colorfull").style.backgroundColor = "red"
    setTimeout(() => {
        document.querySelector("#colorfull").style.backgroundColor = "orange"
        setTimeout(() => {
            document.querySelector("#colorfull").style.backgroundColor = "yellow"
        }, 2000)
    }, 2000)
}, 2000)


function delayTheColorChange(color, delay, doNext) {
    setTimeout(() => {
        document.querySelector("#colorfuller").style.backgroundColor = color
        doNext && doNext();
    }, delay)
}

delayTheColorChange("lightblue", 2000, () => {
    delayTheColorChange("teal", 2000, () => {
        delayTheColorChange("olive", 2000, () => {
        })
    })
})


const delayTheColorChangePromise = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.querySelector("#colorfullPromise").style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayTheColorChangePromise("yellow", 2000)
    .then(() => delayTheColorChangePromise("blue", 2000))
    .then(() => delayTheColorChangePromise("indigo", 2000))
    .then(() => delayTheColorChangePromise("violet", 2000))

function fakeRequest(url) {
    return new Promise((resolve, reject) => {
        const random = Math.random();

        setTimeout(() => {
            if (random < 0.5) {
                resolve('Good job the data has been received fine');
            } else {
                reject(`Bad job, we got an uncought error trying to fetch data from ${url}`);
            }
        }, 2000)
    })
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('googooly.com/page1')
        console.log(data1)
        let data2 = await fakeRequest('googooly.com/page2')
        console.log(data2)
    } catch (e) {
        console.log("caught an error!!")
        console.log(e)
    }
}


const bitcoin = async function () {
    try {
        const result = await fetch("https://api.cryptonator.com/api/ticker/btc-usd")
        const data = await result.json();
        console.log(data.ticker.price)
        bitcoinPrice.value = data.ticker.price;
    }
    catch (e) {
        console.log(e)
        bitcoinPrice.value = "data unavailable";
    }

}



const bitcoinPrice = document.querySelector("#bitCoinPrice")
bitcoinPrice.addEventListener('click', function () {
    bitcoin();
})

const ethereum = async function () {
    try {
        const res = await axios.get("https://api.cryptonator.com/api/ticker/eth-usd")
        const data = res.data.ticker.price;
        ethereumPrice.value = data;
    } catch (e) {
        console.log("invalid input", e)
    }


}

const ethereumPrice = document.querySelector("#ethereumPrice")
ethereumPrice.addEventListener('click', function () {
    ethereum();
})

const jokeSection = document.querySelector('#jokes');

const getJokes = async () => {
    const header = { headers: { Accept: 'application/json' } }
    const resultJoke = await axios.get("https://icanhazdadjoke.com/", header)
    return resultJoke.data.joke;
}

let numberOfJokes = 0;

const addJokes = async () => {
    const jokeText = await getJokes();
    const newLI = document.createElement('LI');
    newLI.classList.add('jokeList')
    newLI.append(jokeText);
    numberOfJokes++;
    jokeSection.append('joke number', numberOfJokes, ': ', newLI);
}

const jokeButton = document.querySelector('#jokeButton')

jokeButton.addEventListener('click', () => {
    addJokes();
})

const movieSection = document.querySelector("#movies")
movieSection.addEventListener('submit', function (e) {
    e.preventDefault();
    const movieName = movieSection.elements.movies.value;
    addMovies(movieName);
})

const addMovies = async function (movieName) {
    const result = await axios.get(`https://api.tvmaze.com/search/shows?q=${movieName}`)
    pasteImages(result.data)
}

const movieDisplay = document.querySelector("#movieDisplay")
const pasteImages = async function (shows) {
    for (result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG')
            img.src = result.show.image.medium;
            movieDisplay.append(img);
        }
    }
}




