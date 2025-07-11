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
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=${dateAujourdHui}&release_date.lte=${dateDans7Jours}/${apiKey}`, options)
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            // Test de l'affichage du JSON ! C'est bon !!!! :) :) :) :)
            console.log(json);

            // Vrai affichage des données
            for (let i = 0; i < json.results.length; i++) {
                document.getElementById("listeFilms").innerHTML += `
            <div class="mb-5">
                <div class="d-flex justify-content-center">
                    <p id="nom-film"><b>${json.results[i].original_title}</b></p>
                </div>
                <img id="img-film" class="tailleImageTest mb-4" src="https://media.themoviedb.org/t/p/w220_and_h330_face/${json.results[i].poster_path}"
                    alt="${json.results[i].poster_path}">
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <p id="note-film"><i class="bi bi-star-fill">Avis : </i>${json.results[i].vote_average.toFixed(1)} /10</p>
                        </div>
                        <div class="col">
                            <p id="date-film">Date de sortie : ${json.results[i].release_date}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <button class="btn bg-primary text-white" onclick="window.location.href = 'descriptionFilm.html?id=${json.results[i].id}';" >Voir les informations</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
            }
        })
        .catch(err => console.error(err));
}
afficherListeFilmsSemaine();