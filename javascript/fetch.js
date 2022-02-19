let contentBody = document.getElementById("contentBody");

getMovies();

async function getMovies() {
    await fetch("https://ghibliapi.herokuapp.com/films")
        .then(result =>  {return result.json()})
        .then(json => {
            console.log(json);
            displayMovies(json);
        })
        .catch(console.log("Something came up"));
}

function displayMovies(json){
    for (let i= 0; i < json.length; i++){ 
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

        let originalName = document.createElement("h2");
        card.appendChild(originalName);
        originalName.innerText = `${json[i].original_title}`;

        let director = document.createElement("h3");
        card.appendChild(director);
        director.innerText = `Director: ${json[i].director}`;

        let producer = document.createElement("h3");
        card.appendChild(producer);
        producer.innerText = `Producer: ${json[i].producer}`;

        let descript = document.createElement("h3");
        card.appendChild(descript);
        descript.innerText = `Release: ${json[i].release_date}`
    }
} 






