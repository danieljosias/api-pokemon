
//Pokémons de água
//Bulbasaur
let url1 = "https://pokeapi.co/api/v2/pokemon/1"
    
fetch(url1)
.then((response)=>{
    return response.json()
})

.then((data) =>{

    let img1 = data[`sprites`][`front_default`] 
    document.getElementById("imagem-01").setAttribute('src', img1);

    document.getElementById("nome-01").innerHTML = data[`name`];
    document.getElementById("numero-01").innerHTML = data[`id`];
})

//Ivysaur
let url2 = "https://pokeapi.co/api/v2/pokemon/2"
    
fetch(url2)
.then((response)=>{
    return response.json()
})

.then((data) =>{

    let img2 = data[`sprites`][`front_default`] 
    document.getElementById("imagem-02").setAttribute('src', img2);

    document.getElementById("nome-02").innerHTML = data[`name`];
    document.getElementById("numero-02").innerHTML = data[`id`];
})

//Venusaur
let url3 = "https://pokeapi.co/api/v2/pokemon/3"
    
fetch(url3)
.then((response)=>{
    return response.json()
})

.then((data) =>{

    let img3 = data[`sprites`][`front_default`] 
    document.getElementById("imagem-03").setAttribute('src', img3);

    document.getElementById("nome-03").innerHTML = data[`name`];
    document.getElementById("numero-03").innerHTML = data[`id`];
})

//Squirtle
let url4 = "https://pokeapi.co/api/v2/pokemon/7"
    
fetch(url4)
.then((response)=>{
    return response.json()
})

.then((data) =>{

    let img4 = data[`sprites`][`front_default`] 
    document.getElementById("imagem-04").setAttribute('src', img4);

    document.getElementById("nome-04").innerHTML = data[`name`];
    document.getElementById("numero-04").innerHTML = data[`id`];
})

//Wartortle
let url5 = "https://pokeapi.co/api/v2/pokemon/8"
    
fetch(url5)
.then((response)=>{
    return response.json()
})

.then((data) =>{

    let img5 = data[`sprites`][`front_default`] 
    document.getElementById("imagem-05").setAttribute('src', img5);

    document.getElementById("nome-05").innerHTML = data[`name`];
    document.getElementById("numero-05").innerHTML = data[`id`];
})

//Pokémons de fogo
//Charmander
let url6 = "https://pokeapi.co/api/v2/pokemon/4"
    
fetch(url6)
.then((response)=>{
    return response.json()
})

.then((data) =>{

    let img6 = data[`sprites`][`front_default`] 
    document.getElementById("imagem-06").setAttribute('src', img6);

    document.getElementById("nome-06").innerHTML = data[`name`];
    document.getElementById("numero-06").innerHTML = data[`id`];
})

//Charmeleon
let url7 = "https://pokeapi.co/api/v2/pokemon/5"
    
fetch(url7)
.then((response)=>{
    return response.json()
})

.then((data) =>{
    console.log(data)
    let img7 = data[`sprites`][`front_default`] 
    document.getElementById("imagem-07").setAttribute('src', img7);

    document.getElementById("nome-07").innerHTML = data[`name`];
    document.getElementById("numero-07").innerHTML = data[`id`];
})

//Charizard
let url8 = "https://pokeapi.co/api/v2/pokemon/6"
    
fetch(url8)
.then((response)=>{
    return response.json()
})

.then((data) =>{
    console.log(data)
    let img8 = data[`sprites`][`front_default`] 
    document.getElementById("imagem-08").setAttribute('src', img8);

    document.getElementById("nome-08").innerHTML = data[`name`];
    document.getElementById("numero-08").innerHTML = data[`id`];
})

//Vulpix
let url9 = "https://pokeapi.co/api/v2/pokemon/37"
    
fetch(url9)
.then((response)=>{
    return response.json()
})

.then((data) =>{
    console.log(data)
    let img9 = data[`sprites`][`front_default`] 
    document.getElementById("imagem-09").setAttribute('src', img9);

    document.getElementById("nome-09").innerHTML = data[`name`];
    document.getElementById("numero-09").innerHTML = data[`id`];
})

//Ninetales
let url10 = "https://pokeapi.co/api/v2/pokemon/38"
    
fetch(url10)
.then((response)=>{
    return response.json()
})

.then((data) =>{
    console.log(data)
    let img10 = data[`sprites`][`front_default`] 
    document.getElementById("imagem-010").setAttribute('src', img10);

    document.getElementById("nome-010").innerHTML = data[`name`];
    document.getElementById("numero-010").innerHTML = data[`id`];
})

//Metapod
let url11 = "https://pokeapi.co/api/v2/pokemon/11"
    
fetch(url11)
.then((response)=>{
    return response.json()
})

.then((data) =>{
    console.log(data)
    let img11 = data[`sprites`][`front_default`] 
    document.getElementById("imagem-011").setAttribute('src', img11);

    document.getElementById("nome-011").innerHTML = data[`name`];
    document.getElementById("numero-011").innerHTML = data[`id`];
})

//Butterfree
let url12 = "https://pokeapi.co/api/v2/pokemon/12"
    
fetch(url12)
.then((response)=>{
    return response.json()
})

.then((data) =>{
    console.log(data)
    let img12 = data[`sprites`][`front_default`] 
    document.getElementById("imagem-012").setAttribute('src', img12);

    document.getElementById("nome-012").innerHTML = data[`name`];
    document.getElementById("numero-012").innerHTML = data[`id`];
})

//Weedle
let url13 = "https://pokeapi.co/api/v2/pokemon/13"
    
fetch(url13)
.then((response)=>{
    return response.json()
})

.then((data) =>{
    console.log(data)
    let img13 = data[`sprites`][`front_default`] 
    document.getElementById("imagem-013").setAttribute('src', img13);

    document.getElementById("nome-013").innerHTML = data[`name`];
    document.getElementById("numero-013").innerHTML = data[`id`];
})

//kakuna
let url14 = "https://pokeapi.co/api/v2/pokemon/14"
    
fetch(url14)
.then((response)=>{
    return response.json()
})

.then((data) =>{
    console.log(data)
    let img14 = data[`sprites`][`front_default`] 
    document.getElementById("imagem-014").setAttribute('src', img14);

    document.getElementById("nome-014").innerHTML = data[`name`];
    document.getElementById("numero-014").innerHTML = data[`id`];
})

//beedrill
let url15 = "https://pokeapi.co/api/v2/pokemon/15"
    
fetch(url15)
.then((response)=>{
    return response.json()
})

.then((data) =>{
    console.log(data)
    let img15 = data[`sprites`][`front_default`] 
    document.getElementById("imagem-015").setAttribute('src', img15);

    document.getElementById("nome-015").innerHTML = data[`name`];
    document.getElementById("numero-015").innerHTML = data[`id`];
})