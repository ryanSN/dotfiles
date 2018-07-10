{
  "window.zoomLevel": -1,
  "editor.fontFamily": "Operator Mono, Menlo, Monaco, 'Courier New', monospace",
  "editor.letterSpacing": 0.5,
  "workbench.editor.tabSizing": "shrink",
  "html.format.enable": true,
  "html.format.preserveNewLines": true,
  "files.trimTrailingWhitespace": true,
  // Controls the rendering size of tabs in characters. Accepted values: "auto", 2, 4, 6, etc. If set to "auto", the value will be guessed when a file is opened.
  "editor.tabSize": 2,
  "editor.cursorStyle": "line",
  "editor.cursorWidth": 3,
  "editor.wordWrap": "on",
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.fontWeight": "400",
  "editor.cursorBlinking": "solid",
  "workbench.activityBar.visible": true,
  "workbench.sideBar.location": "left",
  "editor.minimap.showSlider": "always",
  "files.insertFinalNewline": true,
  "workbench.startupEditor": "newUntitledFile",
  "extensions.ignoreRecommendations": false,
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/.next": true
  },
  "gitlens.advanced.messages": {
    "suppressShowKeyBindingsNotice": true
  },
  "workbench.colorTheme": "Night Owl",
  // show snippets before any other auto completion
  "editor.snippetSuggestions": "top",
  // These are all my auto-save configs
  "editor.formatOnSave": true,
  // turn it off for JS
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "terminal.integrated.rendererType": "dom",
  "flow.pathToFlow": "${workspaceRoot}/node_modules/.bin/flow",
  "workbench.iconTheme": "vscode-great-icons",
}
