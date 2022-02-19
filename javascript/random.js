let button = document.getElementById("randomizer"); //puts the random button into variable
let selection = false;

button.addEventListener("click", event => getMovies());//attaches a click event listener to button

async function getMovies() { //fetches the ghibli api
    await fetch("https://ghibliapi.herokuapp.com/films")
        .then(result =>  {return result.json()})
        .then(json => {
            console.log(json);
            randomMovie(json); //calls function using json as an arguement 
        })
        .catch(console.log("Something came up"));
}
function getRandomInt(max) { //Creates a random number to use for square bracket notation to pull random movie
    return Math.floor(Math.random()* max);
}
function randomMovie(json){ //decleration for using the random number to get pull random movie
    let i = getRandomInt(json.length - 1); //invokes random number function, setting the max number 1 less than the length of the movie list
    let card = document.createElement("div"); //creates all html necessary for content card with css
    card.className = "contentCard";
    contentBody.appendChild(card);

    let imgTag = document.createElement("div"); //all html necessary for image to appear on card
    imgTag.className = "contentImage randomCard";
    card.appendChild(imgTag);
    imgTag.style.backgroundImage = `url(${json[i].image})`

    let title = document.createElement("h2"); //all html for title to appear
    card.appendChild(title);
    title.innerText = `${json[i].title}`

    let descript = document.createElement("p"); //all html for description
    card.appendChild(descript);
    descript.innerText = `${json[i].description}`
}