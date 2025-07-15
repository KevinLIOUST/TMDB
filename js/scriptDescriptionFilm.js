// Ma clé d'API
let apiKey = "9b8f522efb6085d6ee17d3eecaf4b954";

let url = `https://api.themoviedb.org/3/movie/id`;

let urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get('id');
console.log(id);

let newUrl = `https://api.themoviedb.org/3/movie/${id}?language=fr-FR`;

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjhmNTIyZWZiNjA4NWQ2ZWUxN2QzZWVjYWY0Yjk1NCIsIm5iZiI6MTc1MTk1OTc2Ny43MTI5OTk4LCJzdWIiOiI2ODZjYzhkN2U5MDkxYjI5ZGE5YTQ1MDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.d4IATkrfCWbY6xYnKdbcJmzbxCBGBgsu3wU3SrKmsos'
    }
};

fetch(newUrl, options)
    .then((res) => {
        return res.json();
    })
    .then((json) => {
        // Test de l'affichage du JSON ! C'est bon !!!! :) :) :) :)
        console.log(json);

        // Affichage des données
        document.getElementById("nomFilm").innerText = json.original_title;

        document.getElementById("imgFilm").innerHTML = `<img class="tailleImageTest mb-3" src="https://image.tmdb.org/t/p/w500${json.poster_path}" alt="${json.poster_path}">`;

        document.getElementById("noteFilm").innerHTML = `<p><i class="bi bi-star-fill">Avis : </i>${json.vote_average.toFixed(1)} /10</p>`;
        document.getElementById("dateFilm").innerText = `Date de sortie :\n ${json.release_date}`;

        document.getElementById("descriptionFilm").innerText = json.overview;
    })
    .catch(err => console.error(err));