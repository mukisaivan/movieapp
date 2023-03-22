const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f01346285fmsha3bae899a812a69p1fad40jsn4a0b282b1fde',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
};

fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
    .then(response => response.json())
    .then(response => console.log(response[2]))
    .catch(err => console.error(err));