const botaoConselho = document.getElementById('conselho');
const tituloConselho = document.querySelector('.titulo');
const textoConselho = document.querySelector('.texto');

async function buscarConselho() {
    try {
        const resposta = await fetch('https://api.adviceslip.com/advice');
        const dados = await resposta.json();

        tituloConselho.innetText = `ADVICE #${dados.slip.id}`;
        textoConselho.innerText = `"${dados.slip.advice}"`;

    } catch (erro) {
        console.error('Erro ao buscar o conselho:', erro);
    }
}


botaoConselho.addEventListener('click', buscarConselho);