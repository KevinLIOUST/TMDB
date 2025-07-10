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

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjhmNTIyZWZiNjA4NWQ2ZWUxN2QzZWVjYWY0Yjk1NCIsIm5iZiI6MTc1MTk1OTc2Ny43MTI5OTk4LCJzdWIiOiI2ODZjYzhkN2U5MDkxYjI5ZGE5YTQ1MDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.d4IATkrfCWbY6xYnKdbcJmzbxCBGBgsu3wU3SrKmsos'
    }
};

fetch(`https://api.themoviedb.org/3/movie/${idFilm}?language=fr-FR/${apiKey}`, options)
    .then((res) => {
        return res.json();
    })
    .then((json) => {
        // Test de l'affichage du JSON ! C'est bon !!!! :) :) :) :)
        console.log(json);
    })
    .catch(err => console.error(err));