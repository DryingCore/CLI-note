// Importando bibliotecas necessárias
const fs = require("fs-extra");
const readline = require("readline");
const path = require("path");

// Criando a interação com o usuário
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// Funções para dividir tarefas
function obterTitulo(callback) {
	rl.question("Digite o título: ", callback);
}

function obterAnotacao(callback) {
	rl.question("Digite sua anotação: ", callback);
}

function obterCaminhoPasta(callback) {
	rl.question("Digite um caminho (pressione Enter para usar o padrão): ", callback);
}

// Função que cria a nota
function criarNota() {
	obterTitulo((titulo) => {
		obterAnotacao((nota) => {
			obterCaminhoPasta((caminho_pasta) => {
				const pasta = caminho_pasta || "C:/Users/lein0/OneDrive/Documentos/Anotações";
				const nome_arquivo = path.join(pasta, `${titulo}.txt`);

				escreverArquivo(nome_arquivo, nota, titulo);
			});
		});
	});
}

// Função que cria o arquivo com os dados passados
function escreverArquivo(nome_arquivo, nota, titulo) {
	fs.writeFile(nome_arquivo, nota, (error) => {
		if (error) {
			console.error(error);
		} else {
			console.log(`Anotação "${titulo}" salva.`);
			rl.close();
		}
	});
}

// Chamada da função
criarNota();
