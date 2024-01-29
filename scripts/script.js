const listaDeArtistas = [
    { "id": 1, "name": "Foo Fighters", "genre": "Rock", "urlImg": "https://i.scdn.co/image/ab67616100005174c884df599abc793c116cdf15" },
    { "id": 2, "name": "Michael Jackson", "genre": "Pop", "urlImg": "https://i.scdn.co/image/ab676161000051740e08ea2c4d6789fbf5cbe0aa" },
    { "id": 3, "name": "Emicida", "genre": "Hip Hop", "urlImg": "https://i.scdn.co/image/ab67616100005174908b4b4bc90e1518b68b4068" },
    { "id": 4, "name": "Chitãozinho e Xororó", "genre": "Sertanejo", "urlImg": "https://i.scdn.co/image/ab676161000051744606c59411c57f7b49588be4" },
    { "id": 5, "name": "Mc Coringa", "genre": "Funk", "urlImg": "https://i.scdn.co/image/ab67616d00001e02fe8f6dd361ad0f12b88c7f56" },
    { "id": 6, "name": "Arlindo Cruz", "genre": "Samba", "urlImg": "https://i.scdn.co/image/ab67616100005174181873f93056642d7b340839" },
    { "id": 7, "name": "Caetano Veloso", "genre": "MPB", "urlImg": "https://i.scdn.co/image/ab67616100005174e98de50f36cf1aa4bf047757" }
];

function requestApi(searchTerm) {
  // Converter o termo de busca para minúsculas
  const termoLowerCase = searchTerm.toLowerCase();
  
  // Filtrar os artistas cujos nomes contenham a substring fornecida
  const resultados = listaDeArtistas.filter(artist => artist.name.toLowerCase().includes(termoLowerCase));
  
  // Exibir os resultados
  displayResults(resultados);
  console.log(resultados);
}

function displayResults(results) {
  const resultArtist = document.getElementById("result-artist");
  const artistImage = document.getElementById("artist-img");
  const artistName = document.getElementById("artist-name");
  const resultPlaylist = document.getElementById('result-playlists');


  if (results.length > 0) {
    // Exibir o primeiro resultado encontrado
    const primeiroResultado = results[0];
    artistImage.src = primeiroResultado.urlImg;
    artistName.innerText = primeiroResultado.name;
    resultPlaylist.classList.add('hidden');
    resultArtist.classList.remove("hidden");
    console.log("primeiro resultado encontrado");
  } else {
    // Se nenhum resultado for encontrado, ocultar a seção de resultados
    resultArtist.classList.add("hidden");
    console.log("Nada encontrado");
  }
}

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.trim();

  if (searchTerm === "") {
    // Se o campo de busca estiver vazio, ocultar a seção de resultados do artista
    const resultArtist = document.getElementById("result-artist");
    resultArtist.classList.add("hidden");
    
    // Exibir a seção de resultados da playlist
    const resultPlaylist = document.getElementById('result-playlists');
    resultPlaylist.classList.remove('hidden');
    
    return;
  }

  // Realizar a busca com o termo inserido pelo usuário
  requestApi(searchTerm);
});
