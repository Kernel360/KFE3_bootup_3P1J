// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals", 
    "next/typescript",
    "plugin:import/recommended",
    "plugin:import/typescript"
  ),
  {
    plugins: {
      storybook,
      "unused-imports": unusedImports
    },
    rules: {
      // 💡 불필요한 import 자동 감지
      "unused-imports/no-unused-imports": "warn",

      // 💡 JSX 안 특수문자 허용
      "react/no-unescaped-entities": "off",

      // 💡 import 순서 정리
      "import/order": [
        "warn",
        {
          "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
          "alphabetize": { order: "asc", caseInsensitive: true }
        }
      ]
    }
  },
  {
    // Prettier와 충돌 방지
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      prettier: require("eslint-plugin-prettier")
    },
    rules: {
      "prettier/prettier": "warn"
    }
  },
  ...storybook.configs["flat/recommended"],
];

export default eslintConfig;
