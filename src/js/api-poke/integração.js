function loadpk() {
    console.clear()
    console.log("Estou na função")
    let url = 'https://pokeapi.co/api/v2/pokemon/1';

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.clear();
            console.log(data);
            document.getElementById('nome').innerHTML = data['botao-carregar-pokemon5'];

        })
        .cath((erro) => {
            console.log("Erro: " + erro);
        })
}
document.getElementById('botao-carregar-pokemon1').onclick = loadpk;
