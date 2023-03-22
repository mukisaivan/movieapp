const APILINK = 'https://api.themoviedb.org/3/movie?sort_by=popularity.desc&api_key=f3468a15d122a9ac6f3e46ec79c49862&page=1';
const IMG_PATH = 'http://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/movie/550?api_key=f3468a15d122a9ac6f3e46ec79c49862&query=";


const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK);

function returnMovies(url) { //note: "res" stands for response
    fetch(url)
        .then(res => res.json())
        .then(function(data) {
            console.log(data.results);
            data.results.forEach(element => {
                const div_card = document.createElement("div");
                div_card.setAttribute("class", "card"); // these are given attributes so that the attributes work as the css files

                const div_row = document.createElement("div");
                div_row.setAttribute("class", "row");

                const div_column = document.createElement("div");
                div_column.setAttribute("class", "column");

                const image = document.createElement("image");
                image.setAttribute("class", "thumbnail");
                image.setAttribute("id", "image");

                const title = document.createElement("h3");
                title.setAttribute("id", "title");

                const centre = document.createElement("center");

                title.innerHTML = `${element.title}`;
                image.src = IMG_PATH + element.poster_path;

                centre.appendChild(image); //this allows us to add an element onto another element in this case the image to centre
                div_card.appendChild(centre);
                div_card.appendChild(title);
                div_column.appendChild(div_card);
                div_row.appendChild(div_column);

                main.appendChild(div_row);
            });
        });


}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = ""; // helps to remove all the movies that were initially there any replaces them with the movie being searched for

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = ""; // this clears the value that was input by the user in the searchbar
    }
});