console.log(movies);

// Functie om films aan de html toe te voegen
const addMoviesToDom = (movies) => {

    // Itereer over alle movies
    movies.forEach((movie) => {

        // Nieuwe li aanmaken
        const movieItem = document.createElement("li");

        // img maken, src = movie.Poster
        const movieImg = document.createElement("img");
        movieImg.setAttribute('src', movie.Poster);

        // ul waar de movies (li's) in worden gezet
        const allMovies = document.getElementById("all-movies");

        // Listitem (li) vastmaken aan lijst (ul)
        allMovies.appendChild(movieItem);

        // Image (img) vastmaken aan listitem (li)
        movieItem.appendChild(movieImg);

    })
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
            console.log(event.target);
            console.log(event.target.value);
            switch (event.target.value) {
                case "latest-films":
                    message = "Laatste Films, 2014 of nieuwer";
                    console.log("hey ik ben", message, "film");
                    break;
                case "avengers-films":
                    message = "Avengers Films";
                    console.log("hey ik ben", message, "film");
                    break;
                case "x-men-films":
                    message = "X-Men Films";
                    console.log("hey ik ben", message, "film");
                    break;
                case "princess-films":
                    message = "Princess Films";
                    console.log("hey ik ben", message, "film");
                    break;
                case "batman-films":
                    message = "Batman Films";
                    console.log("hey ik ben", message, "film");
                    break;
            }
        }));

    })
};

addEventListeners(filmFilters);