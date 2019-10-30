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

### react-admin が typescript に非対応

- 開発者がそもそも TypeScript に苦手意識持ってるっぽい。悲観的に捉えたほうがよさげ
  - https://github.com/marmelab/react-admin/issues/250#issuecomment-274436816
- DefinitelyTyped にコントリしようと思った人もいたようだが、まだ終わってない様子
  - https://github.com/marmelab/react-admin/issues/1617#issuecomment-403183635
- Flow 使いたくない
- `dts-gen`で型定義ファイルを生成したらプロパティ名が数字で始まるものが見つかりエラってたので正規表現でコメントアウト
  - `dts-gen -m react-admin`
  - `(const \d.*?;$)` -> `// $1`
- `dts-gen`の型定義に JSX エレメントの記述がないのでエラる
  - `JSX element type 'Admin' is not a constructor function for JSX elements.`
- だめだこりゃ

### typescript を `create-react-app this-app --typescript` したプロジェクトから抜きたい

- どうやら`react-scripts`側で `ts` か `tsx` がプロジェクト内にあると勝手に ts 化される仕様になっている模様

### チュートリアル通りにやってるのに `react-admin` がデータを拾ってくれない

- Network を見るとちゃんとデータは受信してる
- `ra-data-simple-rest` じゃなくて `ra-data-json-server` にしたらうまくいった
