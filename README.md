# chat-admin

react + typescript + react-admin -> express-API + mongo-DB

## つまった点

### GitHubPages で内部データの fetch に 404 を起こす

- URL が元のホストアドレスを読もうとしてエラってる
- `package.json`の`homepage`にルート URL を設定したらうまくいった
  - https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson
