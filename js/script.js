// Ma clé d'API
let apiKey = "9b8f522efb6085d6ee17d3eecaf4b954";

// Affichage de la date d'aujourd'hui dans la console

// On déclare un objet date pour s'en servir pour trouver la date actuelle.
let dateAujourdHui = new Date();

// On utilise la méthode padStart avec 2 en premier paramètre pour afficher deux chiffres avant le "/"
let output = String(dateAujourdHui.getDate()).padStart(2, '0') + '/' +
    String(dateAujourdHui.getMonth() + 1).padStart(2, '0') + '/' + dateAujourdHui.getFullYear();

// Affichage dans la console
console.log(output);

let dateDans7Jours = String(dateAujourdHui.getDate() + 7).padStart(2, '0') + '/' +
    String(dateAujourdHui.getMonth() + 1).padStart(2, '0') + '/' + dateAujourdHui.getFullYear();

console.log(dateDans7Jours);

// let vraiIDfilm = 0;

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjhmNTIyZWZiNjA4NWQ2ZWUxN2QzZWVjYWY0Yjk1NCIsIm5iZiI6MTc1MTk1OTc2Ny43MTI5OTk4LCJzdWIiOiI2ODZjYzhkN2U5MDkxYjI5ZGE5YTQ1MDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.d4IATkrfCWbY6xYnKdbcJmzbxCBGBgsu3wU3SrKmsos'
    }
};

function afficherListeFilmsSemaine() {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?language=fr-FR&page=1`, options)
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            // Test de l'affichage du JSON ! C'est bon !!!! :) :) :) :)
            console.log(json);

            // Vrai affichage des données
            for (let i = 0; i < json.results.length; i++) {
                document.getElementById("listeFilms").innerHTML += `
            <div class="mb-5 mx-4 ms-4">
                <p class="nomFilm" id="nom-film"><b>${json.results[i].original_title}</b></p>
                <img id="img-film" class="tailleImageTest mb-3" src="https://media.themoviedb.org/t/p/w500${json.results[i].poster_path}"
                    alt="${json.results[i].poster_path}">
                <div class="container text-center">
                    <div class="row mb-2">
                        <div class="col">
                            <p id="note-film"><i class="bi bi-star-fill">Avis : </i>${json.results[i].vote_average.toFixed(1)} /10</p>
                        </div>
                        <div class="col">
                            <p id="date-film">Date de sortie : ${json.results[i].release_date}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <button class="btn bg-primary text-white mb-5" onclick="window.location.href = 'descriptionFilm.html?id=${json.results[i].id}';" >Voir les informations</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
            }
        })
        .catch(err => console.error(err));
}

let url = `https://api.themoviedb.org/3/search/movie`;

let urlParams = new URLSearchParams(window.location.search);

let movie = urlParams.get('search');
console.log(movie);

let newUrl = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=fr-FR`;

function rechercherFilm() {
    // https://api.themoviedb.org/3/search/movie?query=Fairy%20tail&include_adult=false&language=fr-FR&page=1
    fetch(newUrl, options)
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            console.log(json);

            document.getElementById("listeFilms").innerHTML = ``;

            for (let i = 0; i < json.results.length; i++) {
                document.getElementById("listeFilms").innerHTML += `
            <div class="mb-5 mx-4 ms-4">
                <p class="nomFilm" id="nom-film"><b>${json.results[i].original_title}</b></p>
                <img id="img-film" class="tailleImageTest mb-3" src="https://media.themoviedb.org/t/p/w500${json.results[i].poster_path}"
                    alt="${json.results[i].poster_path}">
                <div class="container text-center">
                    <div class="row mb-2">
                        <div class="col">
                            <p id="note-film"><i class="bi bi-star-fill">Avis : </i>${json.results[i].vote_average.toFixed(1)} /10</p>
                        </div>
                        <div class="col">
                            <p id="date-film">Date de sortie : ${json.results[i].release_date}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <button class="btn bg-primary text-white mb-5" onclick="window.location.href = 'descriptionFilm.html?id=${json.results[i].id}';" >Voir les informations</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
            }
        })
}

if (movie == "") {
    document.getElementById("listeFilms").innerHTML = ``;
    afficherListeFilmsSemaine();
} else {
    rechercherFilm();
}