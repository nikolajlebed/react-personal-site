module.exports = {
  extends: ["airbnb", 'nextjs'],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "rules": {
    'consistent-return': 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/no-static-element-interactions": 0,
    "no-console": ["error", {
      "allow": ["warn", "error", "info"]
    }],
    "no-underscore-dangle": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }],
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-wrap-multilines": [1, {
      "declaration": true,
      "assignment": true,
      "return": true
    }]
  },
  "plugins": [
    "react"
  ]
}