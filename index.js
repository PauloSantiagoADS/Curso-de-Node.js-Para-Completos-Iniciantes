//const { Person } = require("./person");
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();

//Exemplo de introdução a modulos, já não é necessário no código atual.
//mais ficará disponivel para consultas.

// require("./modules/path");
//require("./modules/fs");
//require("./modules/http");

require("./modules/express");

//const person = new Person("Felipe");
