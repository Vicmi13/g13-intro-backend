// require() nos sirve para importar
// const { mult, split, subs, sum } = require("./operations");

const singleFunction = require("./operations");

const main = () => {
  const number1 = 20;
  const number2 = 10;

  //   const a = mult(number1, number2);
  //   const b = split(number1, number2);
  //   const c = subs(number1, number2);
  const d = singleFunction(number1, number2);

  //   console.log(a);
  //   console.log(b);
  //   console.log(c);
  console.log(d);
};

main();
