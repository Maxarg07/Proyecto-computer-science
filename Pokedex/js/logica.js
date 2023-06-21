let pokemon = [];

function getDataFromJson(){
    fetch('..\\js\\pokedex.json')
        .then(response => response.json())
        .then(data => normalizeData(data.results))
}

function normalizeData(data) {
    for (let i=0; i<=data.length-1; i++) {
        const poke = {
            pokemon: data[i].name,
            api: data[i].url
        }
        pokemon.push(poke);
    }
    fillList(pokemon);
    return(pokemon);
}

