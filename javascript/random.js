let button = document.getElementById("randomizer");

button.addEventListener("click", event => getMovies());

async function getMovies() {
    await fetch("https://ghibliapi.herokuapp.com/films")
        .then(result =>  {return result.json()})
        .then(json => {
            console.log(json);
            randomMovie(json);
        })
        .catch(console.log("Something came up"));
}
function getRandomInt(max) {
    return Math.floor(Math.random()* max);
}
function randomMovie(json){
    let i = getRandomInt(json.length - 1);
    let card = document.createElement("div");
        card.className = "contentCard";
        contentBody.appendChild(card);

        let imgTag = document.createElement("div");
        imgTag.className = "contentImage";
        card.appendChild(imgTag);
        imgTag.style.backgroundImage = `url(${json[i].image})`

        let title = document.createElement("h2");
        card.appendChild(title);
        title.innerText = `${json[i].title}`

        let descript = document.createElement("p");
        card.appendChild(descript);
        descript.innerText = `${json[i].description}`
}