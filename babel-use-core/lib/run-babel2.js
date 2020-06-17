const babel = require("@babel/core");
const fs = require("fs");

const filename = "./src/code.js";
const source = fs.readFileSync(filename, "utf-8");
const presets = [
  "@babel/preset-react",
];
const plugins1 = [
  "@babel/plugin-transform-arrow-functions",
];
const plugins2 = [
  "@babel/plugin-transform-template-literals",
];
const {
  ast,
} = babel.transformSync(source, {
  filename,
  ast: true,
  code: false,
  presets,
  configFile: false,
});
const {
  code: code1,
} = babel.transformFromAstSync(ast, source, {
  filename,
  presets,
  plugins: plugins1,
  configFile: false,
});
const {
  code: code2,
} = babel.transformFromAstSync(ast, source, {
  filename,
  presets,
  plugins: plugins2,
  configFile: false,
});

console.log("code1:\n", code1)
console.log("code2:\n", code2)
