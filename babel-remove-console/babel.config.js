const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        chrome: "40",
      },
      // useBuiltIns: "entry",
      useBuiltIns: "usage",
      corejs: "3.6.5",
    },
  ],
  "@babel/preset-react",
];

const plugins = [
  "@babel/plugin-transform-arrow-functions",
  "@babel/plugin-transform-template-literals",
  "./plugin-remove-console.js",
];

const env = {
  production: {
    presets: [
      "minify",
    ],
  },
};

const overrides = [
  {
    include: "./src/code.js",
    exclude: "./src/import.js",
    plugins: [
      "@babel/plugin-transform-template-literals",
    ],
  },
];

module.exports = {
  presets,
  plugins,
  env,
  overrides,
};
