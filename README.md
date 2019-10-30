# chat-admin

react + typescript + react-admin -> express-API + mongo-DB

## つまった点

### ビルド先を指定できない

- 内部的に変えるには eject しないと無理っぽい
- めんどくさいので`rm -rf ./docs && yarn build && mv ./build ./docs`した

### GitHubPages で内部データの fetch に 404 を起こす

- URL が元のホストアドレスを読もうとしてエラってる
- `package.json`の`homepage`にルート URL を設定したらうまくいった
  - https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson
