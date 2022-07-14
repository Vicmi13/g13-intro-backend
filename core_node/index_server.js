const http = require("http");

// NODE correr por default 3000

const port = 3001;
const host = "localhost";

// req = request | res = response

// ES un callback y se va a ejecutar al finalizar el
// método createServer
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(
    "<!DOCTYPE html> <html lang='en'><head><meta charset='UTF-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Document</title></head><body><h3>Nuestro primer backend con Node 💻😺</h3></body></html>"
  );
});

server.listen(port, host, () => {
  console.log("server up 👆🏽");
});
