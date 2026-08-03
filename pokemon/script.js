let pokemonNormal = "";
let pokemonShiny = "";
let estaShiny = false;


function callAPI() {

    const numero = Number(document.getElementById("numero").value);

    const imagem = document.getElementById("imagem");
    const nome = document.getElementById("nome");
    const tipo = document.getElementById("tipo");
    const erro = document.getElementById("erro");
    const botaoShiny = document.getElementById("shiny");


    if (!Number.isInteger(numero) || numero < 1 || numero > 1025) {

        alert("Digite um número entre 1 e 1025.");

        return;
    }


    erro.textContent = "";


    fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)

        .then(response => {

            if (!response.ok) {
                throw new Error("Pokémon não encontrado.");
            }

            return response.json();

        })

        .then(data => {

            nome.textContent = data.name;

            pokemonNormal = data.sprites.front_default;

            pokemonShiny = data.sprites.front_shiny;

            imagem.src = pokemonNormal;

            estaShiny = false;

            botaoShiny.textContent = "Mostrar Shiny";

            // Mostra apenas o primeiro tipo
            tipo.textContent = "Tipo: " + data.types[0].type.name;

            botaoShiny.style.display = "inline-block";

        })

        .catch(error => {

            console.error(error);

            erro.textContent =
                "Não foi possível carregar os dados do Pokémon.";

            nome.textContent = "";

            imagem.src = "";

            tipo.textContent = "";

            botaoShiny.style.display = "none";

        });
}


function mostrarShiny() {

    const imagem = document.getElementById("imagem");
    const botaoShiny = document.getElementById("shiny");


    if (!estaShiny) {

        imagem.src = pokemonShiny;

        botaoShiny.textContent = "Mostrar Normal";

        estaShiny = true;

    } else {

        imagem.src = pokemonNormal;

        botaoShiny.textContent = "Mostrar Shiny";

        estaShiny = false;
    }
}