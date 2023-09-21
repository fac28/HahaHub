/* eslint-disable strict */
module.exports = {
    "env": {
        "node": true,
        "es2021": true
    },
    "extends": ["eslint:recommended", "kentcdodds"],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    }
}
