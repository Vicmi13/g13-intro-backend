const retrieveData = () => {
  return new Promise((resolve, reject) => {
    resolve("EJECUTANDO en promesa");
  });
};

async function main() {
  console.log("INICIO");
  try {
    const resultPromise = await retrieveData();
    console.log(resultPromise);
  } catch (error) {
    console.log(error);
  }
  console.log("FIN");
}

main();
