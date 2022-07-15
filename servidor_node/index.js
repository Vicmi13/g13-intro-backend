const http = require("http");
const url = require("url");

// CLIENTE
// localhost:3001
// axios.get('localhost:3000')   => index.html

// SERVIDOR
// localhost:3000

// localhost:3000/ root path /  => index.html
// localhost:3000/compras  path compras/ => compras.html

// localhost:3000/login path login/ => login.html

const server = http.createServer((req, res) => {
  console.log("method", req.method);

  // Se define como un pseudonimo
  const { url: urlReq } = req;
  const baseURL = req.protocol + "://" + req.headers.host + "/";
  const urlPath = new URL(urlReq, baseURL);

  if (urlPath.pathname === "/" && req.method === "GET") {
    console.log("url parse ", urlPath.pathname);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>hola </h1> ");
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("regreso texto plano ");
  }
});

server.listen(3000, "localhost", () => {
  console.log("Servidor arriba 🔥");
});
