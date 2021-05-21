console.log(movies);

// Functie om films aan de html toe te voegen
const addMoviesToDom = (movies) => {

    const allMovies = document.getElementById("all-movies");
    // allMovies.querySelectorAll("*").forEach(n => n.remove());
    // minder zware manier om de lijst leeg te maken is:
    allMovies.innerHTML = '';

    // Itereer over alle movies
    movies.forEach((movie) => {

        const movieItem = document.createElement("li");

        // img maken, src = movie.Poster
        const movieImg = document.createElement("img");
        movieImg.setAttribute('src', movie.Poster);

        // Listitem (li) vastmaken aan lijst (ul)
        allMovies.appendChild(movieItem);

        // Link (a) vastmaken aan listitem (li)
        const movieA = document.createElement("a");
        movieA.setAttribute('href', "https://www.imdb.com/title/" + movie.imdbID);
        movieA.setAttribute('target', "_blank");
        movieItem.appendChild(movieA);

        // Image (img) vastmaken aan de link (a)
        movieA.appendChild(movieImg);

    });
};

addMoviesToDom(movies);

// Selecteer alle radiobuttons 
const filmFilters = document.getElementsByName("film-filter");

// Functie filteren met de radiobuttons
const addEventListeners = (filmFilters) => {

    // Itereer over de elementen
    filmFilters.forEach((filmFilter) => {

        // Maak er een event aan vast
        // Functie met als argument 'event' die afgevuurd wordt als er een change heeft plaatsgevonden bij een van de radiobuttons
        filmFilter.addEventListener("change", (function handleOnChangeEvent(event) {

            // console.log(event.target);
            // console.log(event.target.value);

            let message;
            switch (event.target.value) {
                case "laatste-films":
                    message = "Laatste Films, 2014 of nieuwer";
                    console.log("Hey ik ben", message);
                    filterLatestMovies();
                    break;
                case "avengers":
                    message = "Avengers Films";
                    console.log("Hey ik ben", message);
                    filterMovies("Avengers");
                    break;
                case "x-men":
                    message = "X-Men Films";
                    console.log("Hey ik ben", message);
                    filterMovies("X-Men");
                    break;
                case "princess":
                    message = "Princess Films";
                    console.log("Hey ik ben", message);
                    filterMovies("Princess");
                    break;
                case "batman":
                    message = "Batman Films";
                    console.log("Hey ik ben", message);
                    filterMovies("Batman");
                    break;
            };
        }));
    });
};

addEventListeners(filmFilters);

// Maak functie filterMovies
const filterMovies = (wordInMovieTitle) => {
    const filteredTitles = movies.filter((movie => movie.Title.includes(wordInMovieTitle)));
    console.log(filteredTitles);
    addMoviesToDom(filteredTitles);
};

// Aparte functie filterLatestMovies
const filterLatestMovies = () => {
    const filteredLatestMovies = movies.filter((movie => movie.Year >= 2014));
    console.log(filteredLatestMovies);
    addMoviesToDom(filteredLatestMovies);
};

// Functie Searchbar
const searchBar = document.getElementById("searchBar");

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    console.log(searchString);
    const filteredMoviesSearch = movies.filter((movie) => {
        return (
            movie.Title.toLowerCase().includes(searchString)
        );
    });
    addMoviesToDom(filteredMoviesSearch);
});