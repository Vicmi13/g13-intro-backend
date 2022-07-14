sum = (a, b) => a + b;

const subs = (a, b) => a - b;

const mult = (a, b) => a * b;

const split = (a, b) => a / b;

// CUANDO SE EXPORTA UNA SOLA FUNCTION
module.exports = sum;

// CUANDO SE EXPORTA MAS DE UNA FUNCTION
// module.exports = {
//   sum,
//   subs,
//   mult,
//   split,
// };
