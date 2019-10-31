# chat-admin

react + typescript + react-admin -> express-API + sequelize + mysql

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

### Sequelize のインテリセンスがきかない

- すでに Issue 上がってた。
  - https://github.com/sequelize/sequelize/issues/11103

### Sequelize 定数に TIMESTAMP がない

- DATE で代用するか、直接書けばいいらしい
  - https://stackoverflow.com/questions/29652538/sequelize-js-timestamp-not-datetime

### localhost の API で The X-Total-Count header is missing in the HTTP Response.

- `ra-data-json-server` から `ra-data-simple-rest` に変更したら `Content-Range` に文言が変わった。
- それぞれヘッダーに該当のヘッダーを追加しても何も変わらず
  - 全文: `The Content-Range header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare Content-Range in the Access-Control-Expose-Headers header?`
- 以下のようにすればよかった

```js
const cors = require("cors");
app.use(cors());
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Expose-Headers", [
    "X-Total-Count", // ra-data-json-server 用
    "Content-Range" // ra-data-simple-rest 用
  ]);
  next();
});
app.get("/posts", function(req, res) {
  const data = [{ x: 1 }, { x: 2 }];
  // ra-data-json-server 用
  res.setHeader("X-Total-Count", data.length);
  // ra-data-simple-rest 用
  res.setHeader(
    "Content-Range",
    `posts ${req.query.range[0] || req.query._start}-${req.query.range[1] ||
      req.query._end}/${data.length}`
  );
  res.send(data);
});
```

- 参考:
  - https://stackoverflow.com/questions/56856548/create-nodejs-express-api-to-connect-to-react-admin-frontend-framework
  - https://github.com/michalak111/react-admin-panel/blob/master/server/server.js

### location が使えない

- `window.location` でいけた
  - https://gist.github.com/jaytaylor/b14716671ae6a8cd057bd6d849670238

## API メモ

### MySQL

- `cinst -y mysql mysql.workbench`

```js
// ./db-config.hide.json
{
  "api": {
    "port": 3001
  },
  "db": {
    "name": "DB名",
    "user": "ユーザー名",
    "pass": "パスワード"
  }
}
```
