async function Animal() {
  const animais = ['cachorro', 'gato', 'urso', 'raposa', 'pato'];
  const indice = Math.floor(Math.random() * animais.length);
  const animalSorteado = animais[indice];

  const imgElement = document.getElementById('imagem-animal');
  const nomeElement = document.getElementById('nome-animal');

  nomeElement.innerText = "Carregando...";

  let urlImagem = "";

  try {
    if (animalSorteado === 'cachorro') {
      const resposta = await fetch('https://dog.ceo/api/breeds/image/random');
      const dados = await resposta.json();
      urlImagem = dados.message;
    } else if (animalSorteado === 'gato') {
      const resposta = await fetch('https://api.thecatapi.com/v1/images/search');
      const dados = await resposta.json();
      urlImagem = dados[0].url;
    } else if (animalSorteado === 'urso') {
      urlImagem = `https://placebear.com/300/300?random=${Math.random()}`;
    } else if (animalSorteado === 'raposa') {
      const resposta = await fetch('https://randomfox.ca/floof/');
      const dados = await resposta.json();
      urlImagem = dados.image;
    } else if (animalSorteado === 'pato') {
      const resposta = await fetch('https://random-d.uk/api/v2/random');
      const dados = await resposta.json();
      urlImagem = dados.url;
    }

    nomeElement.innerText = animalSorteado;
    imgElement.src = urlImagem;
    imgElement.style.display = 'block';
  } catch (erro) {
    console.error("Detalhes do erro:", erro);
    nomeElement.innerText = "Erro ao carregar!";
  }
}