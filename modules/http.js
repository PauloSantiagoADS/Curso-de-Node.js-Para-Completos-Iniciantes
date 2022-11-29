const http = require("http");

//definindo uma porta para o servidor
const port = 8080;

//servidor
const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>home page</h1>");
  }
  // Segunda página mandando um json
  // Rota do usuário
  if (req.url === "/users") {
    const users = [
      {
        name: "john Doe",
        email: "john@doe.com",
      },
      {
        name: "jane Doe",
        email: "jane@doe.com",
      },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

// Colocando o server online
server.listen(port, () => console.log(`Rodando na porta ${port}!`));
