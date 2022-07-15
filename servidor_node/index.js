const http = require("http");
const fs = require("fs");
const { resolveNaptr } = require("dns");

// CLIENTE
// localhost:3001
// axios.get('localhost:3000')   => index.html

// SERVIDOR
// localhost:3000

// localhost:3000/ root path /  => index.html
// localhost:3000/compras  path compras/ => compras.html

// localhost:3000/login path login/ => login.html

const server = http.createServer((req, res) => {
  //  console.log("method", req.method);

  // Se define como un pseudonimo
  const { url: urlReq } = req;
  const baseURL = req.protocol + "://" + req.headers.host + "/";
  const urlPath = new URL(urlReq, baseURL);

  console.log("url parse ", urlPath.pathname);

  const pageError = (res) => {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.write("<h3> Error en el servidor </h3>");
    res.end();
    return res;
  };
  if (urlPath.pathname === "/" && req.method === "GET") {
    fs.readFile("pages/index.html", (err, data) => {
      if (err) {
        return pageError(res);
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(data);
        res.end();
      }
    });
  } else if (urlPath.pathname === "/compras") {
    fs.readFile(`pages/${urlPath.pathname}.html`, (err, data) => {
      if (err) {
        return pageError(res);
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(data);
        res.end();
      }
    });
  } else if (urlPath.pathname === "/login") {
    fs.readFile(`pages/${urlPath.pathname}.html`, (err, data) => {
      if (err) {
        return pageError(res);
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(data);
        res.end();
      }
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<h3> Recurso no encontrado <h3/> ");
  }
});

server.listen(3000, "localhost", () => {
  console.log("Servidor arriba 🔥");
});
