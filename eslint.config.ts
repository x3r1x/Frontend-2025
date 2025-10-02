import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig(
  [
    {
      files: ["**/*.{mjs,cjs,ts,mts,cts,jsx,tsx}"],
      plugins: { js },
      extends: ["js/recommended"],
      languageOptions: { globals: globals.browser },
      rules: {
        "no-duplicate-imports": "error",
        "no-self-compare": "error",
        "no-use-before-define": "error",
        "no-useless-assignment": "error",
        "no-unused-vars": "error",
      },
    },
    tseslint.configs.strict,
    tseslint.configs.stylistic,
    // pluginReact.configs.flat.recommended,
  ],
  eslintConfigPrettier,
);
