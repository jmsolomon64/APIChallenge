let library = document.getElementById("libraryWrapper");
let catalog = document.getElementById("libraryCatalog");
let article = document.getElementById("article");
let searchInput = document.getElementById("searchInput");
let searchOptions = document.getElementsByClassName("movie");
let movieList = [];
let libraryCard = document.querySelector(".libraryCard");

libraryCard.style.display = "none";
getMovies();

async function getMovies() { //function for fetching movies
    await fetch("https://ghibliapi.herokuapp.com/films")
        .then(result =>  {return result.json()}) //jsonifies results
        .then(json => {
            console.log(json); //ouput: json data
            movieList.push(json); //pushes json into an array declared previously
            listMovies(movieList); //invokes function passing json filled variable
        })
        .catch(console.log("Something came up"));
}

function listMovies(json) {
    console.log(json)
    let movies = json[0]
    for (let i = 0; i < movies.length; i++){ //for loop to itterate through the json objects
        console.log(movies[i]);
        let list = document.createElement("button"); //creates button for 
        catalog.appendChild(list);
        list.className = "movie" //gives a class for styling and DOM manipulation
        list.innerText = `${movies[i].title}`; //pulls title from json for content
        // console.log(list.innerText);
        list.addEventListener("click", function() { //gives each button an event listener listening for click
            console.log("button was clicked")
            let articleImg = document.querySelector(".articleImg"); //query selector necessary for selecting single node to manipulate
            let articleTitle = document.querySelector(".articleTitle");
            let libraryDate = document.querySelector(".libraryDate");
            let libraryDirector = document.querySelector(".librarydirector");
            let description = document.querySelector(".description");
            articleImg.src = `${movies[i].image}`;
            articleTitle.innerText = `${movies[i].title}`;
            console.log(movies[i].title);
            libraryDate.innerText = `${movies[i].release_date}`;
            libraryDirector.innerText = `${movies[i].director}`;
            description.innerText = `${movies[i].description}`;
            libraryCard.style.display = "grid";
        }); //uses title of the movie for function 
    }
}

searchInput.addEventListener("keyup", (event) => {
    let value = event.target.value; //sets value equal to value of search bar when keyup 
    searchQuery = value.toLowerCase(); //converts value to lower case
    for (let title of searchOptions) { //runs through the array of list items
        let name = title.textContent.toLowerCase(); //converts the array to lower case
        if (name.includes(searchQuery)){ //checks to see if value in search matches titles
            title.style.display = "block"; //displays options if true
        } else {
            title.style.display = "none"; //hides options if false
        }
    }
    
})

function populateArticle(movieTitle) {
    console.log(movieTitle);
    
}

