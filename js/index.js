document.getElementById("loadTitles").addEventListener("click", () => fetchFilms("titles"));
document.getElementById("loadDates").addEventListener("click", () => fetchFilms("release_dates"));

function fetchFilms(type) {
    const endpoint = "https://www.swapi.tech/api/films";
    
    fetch(endpoint)
        .then(response => response.json())
        .then(data => displayFilms(data.result, type))
        .catch(error => {
            document.getElementById("dataDisplay").innerHTML = "<p>Error loading films.</p>";
            console.error("Error fetching films:", error);
        });
}

function displayFilms(films, type) {
    const displayArea = document.getElementById("dataDisplay");
    displayArea.innerHTML = ""; // Clear previous content

    films.forEach(film => {
        const filmCard = document.createElement("div");
        filmCard.className = "card";

        if (type === "titles") {
            filmCard.innerHTML = `<h3>${film.properties.title}</h3>`;
        } else if (type === "release_dates") {
            filmCard.innerHTML = `<p>Release Date: ${film.properties.release_date}</p>`;
        }

        displayArea.appendChild(filmCard);
    });
}
