module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: 'standard',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
  },
  ignorePatterns: [
    '**/*.html'
  ]
}
{
  "git.autofetch": true,
    "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[vue]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "editor.codeActionsOnSave": {
    "source.formatDocument": "explicit",
      "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": [
    "vue",
    "html",
    "javascript"
  ],
    "eslint.format.enable": true
}

