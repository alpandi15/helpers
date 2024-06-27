// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import typescript from "@rollup/plugin-typescript";
// import dts from "rollup-plugin-dts";

// // To handle css files
// import postcss from "rollup-plugin-postcss";

// import { terser } from "rollup-plugin-terser";
// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import image from '@rollup/plugin-image';

const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const typescript = require('@rollup/plugin-typescript')
const postcss = require('rollup-plugin-postcss')
const terser = require('@rollup/plugin-terser')
const image = require('@rollup/plugin-image')
const dts = require('rollup-plugin-dts').default
const peerDepsExternal = require('rollup-plugin-peer-deps-external')

const packageJson = require("./package.json");

module.exports = [
  {
    input: "./src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
      
      terser(),
      image()
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],

    external: [/\.css$/], // telling rollup anything that is .css aren't part of type exports 
  },
]