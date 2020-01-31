# spotify-challenge

## Prompt
If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.

For example: [‘H’, ‘i’, ‘!’, ‘ ’]

## Installation and build
```bash
$ yarn
$ yarn build
```

## Run app
```bash
$ PARAGRAPH='If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.' MIN=50 CASE_SENSITIVE=true node build/index.js
```

## Run tests
```bash
$ yarn test
```
