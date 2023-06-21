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

function getDataPokemon(url){
    fetch(url)
    .then(response => response.json())
    .then(data => fillData(data))
}

function fillData(data){
    
    let name = data.species.name;
    let numDex = data.id;
    let type1 = data.types[0].type.name;
    if(data.types.length>1){
        let type2 = data.types[1].type.name;
        let tipo2 = document.getElementById('type2');
        tipo2.innerHTML = type2;
    }

    let sprite = data.sprites.front_default
    let shinySprite = data.sprites.front_shiny

    let nombre = document.getElementById('name');
    nombre.innerHTML = name;

    let num = document.getElementById('num');
    num.innerHTML = numdex;

    let type1 = document.getElementById('type1');
    tipo1.innerHTML = type1;

    let imagen = document.getElementById('sprite')
    imagen.setAttribute("src", sprite);

    let imagenShiny = document.getElementById('Shinysprite')
    imagenShiny.setAttribute("src", shinySprite);
    
}

function changeSprite(){
    let imagen = document.getElementById('sprite')
    let imagenShiny = document.getElementById('Shinysprite')

    if (imagenShiny.style.display === "block") {
        imagenShiny.style.display = "none";
    } else {
        imagenShiny.style.display = "block";
    }

    if (imagen.style.display === "none") {
        imagen.style.display = "block";
    } else {
        imagen.style.display = "none";
    }
}

function search(){
    let box = document.getElementById('searchbar');

    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("pokedex");
    li = ul.getElementsByTagName("li");
    if (input.value){
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
    for (i = 0; i < li.length; i++) {
        txtValue = li[i].innerHTML;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display ="none";
        }
    }

}

function fillList(pokes){
    let ul = document.getElementById('pokedex');

    for (let i=0; i <=pokes.length-1; i++){
        let poke = document.createElement("LI");

        let name = pokes[i].pokemon;
        let api = pokes[i].api;
        let data = `a class='dropdown-item' onclick='getDataPokemon("${api}")' >${name}</a>`;
        poke.innerHTML = data
        ul.appendChild(poke);
    }
}



document.addEventListener("DOMContentLoaded", function(event) {
    getDataFromJson();
    let box = document.getElementById('searchbar');
    input = document.getElementById("myInput").value;
})