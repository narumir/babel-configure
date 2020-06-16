// import "@babel/polyfill";

const obj = {
  a: 10,
  b: 20,
  c: 30,
};
const values = Object.values(obj);
const exists = values.includes(20);
console.log(exists);
