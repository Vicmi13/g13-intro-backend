// fs File system
const fs = require("fs");

const nameFile = "./archivo_ejemplo.txt";
const data = " archivo desde Node numero 2 💻";

fs.writeFile(nameFile, data, (err) => {
  if (err) {
    console.log(err, "Error al procesar archivo");
  } else console.log("Aarchivo creado exitosamente");
});

fs.readFile(nameFile, (err, data) => {
  if (err) {
    console.log(err, `error al leer el archivo ${nameFile}`);
  } else console.log("contenido", data.toString());
});
