let searchResults = document.getElementById("results");
const searchInput = document.getElementById("searchInput");
let searchOptions = document.getElementsByClassName("movie");
const clearButton = document.getElementById("clear");
const containers = document.getElementsByClassName("container");
let searchSide = document.getElementById("resultsContainer");


getMovies();

for (let i = 0; i < containers.length; i++){
    containers[i].addEventListener("dragover", e => {
        e.preventDefault(); //allows drop cursor to appear
        let draggable = document.querySelector(".dragging");// references element with class dragging
        containers[i].appendChild(draggable); 
    })
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

clearButton.addEventListener("click", (event) => { //event listener declared for clear button
    for (let title of searchOptions){ //itterates through search results and hides them all
        title.style.display = "none";
    }
    searchInput.value = "";
    location.reload();
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
        let list = document.createElement("p");
        searchSide.appendChild(list);
        list.className = "movie" //gives a class for styling and DOM manipulation
        list.draggable= "true"; //makes element draggable
        list.innerText = `${json[i].title}`; //pulls title from json for content
        // list.style.display = "none"; //Loads the element in hidden
        list.addEventListener("dragstart", () =>{ //decleration of an event listener for each element made
            list.classList.add("dragging"); //adds class to item being dragged for more dynamic styling
        })
        list.addEventListener("dragend", () => {
            list.classList.remove("dragging"); //removes class from item when dragging stops to remove styling
        })
    }

}

