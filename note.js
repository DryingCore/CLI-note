const fs = require("fs-extra");
const readline = require("readline");
const path = require("path");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function criarNota() {
	rl.question("Digite o título: ", (titulo) => {
		rl.question("Digite sua anotação: ", (nota) => {
			rl.question("Digite um caminho (pressione Enter para usar o padrão): ", (caminho_pasta) => {
				const pasta = caminho_pasta || "C:/Users/lein0/OneDrive/Documentos/Anotações";
				// Gerar um arquivo com o título passado e na pasta de destino definida.
				const nome_arquivo = path.join(pasta, `${titulo}.txt`);

				// Escrever nota no arquivo
				fs.writeFile(nome_arquivo, nota, (error) => {
					if (error) {
						console.error(error);
					} else {
						console.log(`Anotação salva: ${nome_arquivo}`);
						rl.close();
					}
				});
			});
		});
	});
}

criarNota();
