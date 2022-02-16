let searchResults = document.getElementById("results");
const searchInput = document.getElementById("searchInput");
let searchOptions = document.getElementsByClassName("movie");
const clearButton = document.getElementById("clear");

getMovies();

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

clearButton.addEventListener("click", (event) => { //event listener declared for clear button
    for (let title of searchOptions){ //itterates through search results and hides them all
        title.style.display = "none";
    }
})

async function getMovies() { //function for fetching movies
    await fetch("https://ghibliapi.herokuapp.com/films")
        .then(result =>  {return result.json()}) //jsonifies results
        .then(json => {
            console.log(json); //ouput: json data
            listMovies(json); //Invokes function declared below parsing the json through
        })
        .catch(console.log("Something came up"));
}

function listMovies(json) {
    for (let i = 0; i < json.length; i++){ //for loop to itterate through the json objects
        let list = document.createElement("li");
        searchResults.appendChild(list);
        list.className = "movie"
        list.innerText = `${json[i].title}`;
        list.style.display = "none";
    }
}