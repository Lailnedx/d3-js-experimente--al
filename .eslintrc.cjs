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
  Passe die Einstellungen für VS Code an:
  
  Erstelle den Ordner .vscode und darin die Datei settings.json (am einfachsten mit code .vscode/settings.json):
  
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
  DOM, Selektoren und Manipulation
  Struktur des DOM
  Canvas
  