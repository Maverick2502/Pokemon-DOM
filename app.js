const container = document.querySelector("#container");
const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

for (let i = 0; i <= 150; i++) {
    const pokemon = document.createElement("div")
    const span = document.createElement("span");
    span.innerHTML = `${i}`
    const img = document.createElement("img");

    img.src = `${url}${i}.png`
    pokemon.appendChild(img);
    pokemon.appendChild(span);
    container.appendChild(pokemon);
}