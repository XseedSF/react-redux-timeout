module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
      ],
    "rules": {
        "no-use-before-define": 0,
        "react/prop-types": 0,
        "no-alert": 0,
        "no-console": 0,
        "react/jsx-filename-extension": 0,
        "function-paren-newline": 0,
        "no-param-reassign": 0,
        "arrow-body-style": ["error", "as-needed"]
    }
};