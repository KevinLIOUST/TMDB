let apiKey = "9b8f522efb6085d6ee17d3eecaf4b954";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjhmNTIyZWZiNjA4NWQ2ZWUxN2QzZWVjYWY0Yjk1NCIsIm5iZiI6MTc1MTk1OTc2Ny43MTI5OTk4LCJzdWIiOiI2ODZjYzhkN2U5MDkxYjI5ZGE5YTQ1MDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.d4IATkrfCWbY6xYnKdbcJmzbxCBGBgsu3wU3SrKmsos'
    }
};

fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=2025-07-07&release_date.lte=2025-07-14/${apiKey}`, options)
    .then((res) => {
        return res.json();
    })
    .then((json) => {
        console.log(json);
    })
    .catch(err => console.error(err));