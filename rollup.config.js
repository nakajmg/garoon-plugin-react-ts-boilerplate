import packageJson from "./package.json";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/desktop.tsx",
    output: {
      name: packageJson.name,
      file: `dist/js/desktop.js`,
      format: "iife",
      extend: true,
      globals: {
        react: "React",
        "react-dom": "ReactDOM,",
      },
    },
    plugins: [
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
      }),
      resolve({
        browser: true,
      }),
      babel({
        exclude: ["node_modules/**"],
        presets: ["@babel/preset-react"],
      }),
      typescript(),
      commonjs({
        extensions: [".ts", ".tsx", ".js"],
      }),
      // terser(),
    ],
  },
  {
    input: "src/config.tsx",
    output: {
      name: packageJson.name,
      file: `dist/js/config.js`,
      format: "iife",
      extend: true,
      globals: {
        react: "React",
        "react-dom": "ReactDOM,",
      },
    },
    plugins: [
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
      }),
      resolve({
        browser: true,
      }),
      babel({
        exclude: ["node_modules/**"],
        presets: ["@babel/preset-react"],
      }),
      typescript(),
      commonjs({
        extensions: [".ts", ".tsx", ".js"],
      }),
      // terser(),
    ],
  },
];
