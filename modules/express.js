// Importando um express
const express = require("express");

// Importando um SuserModel
const UserModel = require("../src/models/user.model");

// Inicializando um express
const app = express();

//Para sempre receber json nas nossas requisições
app.use(express.json());

// View Engine EJS

app.set("view engine", "ejs");
app.set("views", "src/views");

// Middlewares exemplo para referencia
app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content type: ${req.headers["content-type"]}`);
  console.log(`date: ${new Date()}`);

  next();
});

// Criando o endpoint para Views
app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({});

  res.render("index", { users });
});

// Criando o endpoint para pegar todos os usuários
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Criando o endpoint para pegar o usuário pelo Id
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Criando o endpoint para criação do usuário

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Criando um endpoint para atualizar os dados do usuário
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Criando um endpoint para deletar dados do usuário
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndRemove(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Definindo uma porta para o servidor
const port = 8080;

// Colocando o serve online com express
app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));
