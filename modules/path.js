const path = require('path')

// Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Nome do Diretório atual
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename))

// Criar objetos Path
console.log(path.parse(__filename))

// Juntar camihos de arquivos
console.log(path.join(__dirname, "test", "test.html"))