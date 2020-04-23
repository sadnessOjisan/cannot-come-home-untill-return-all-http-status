# cannot-come-home-untill-return-all-http-status

全 HTTP ステータス返すまで家に帰れまテン

## 進捗

FYI: https://developer.mozilla.org/ja/docs/Web/HTTP/Status

| Status Code | Status Name                   | どういう時に使う                                                                                                                                               | 済  |
| ----------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| 100         | Continue                      | TBD                                                                                                                                                            |     |
| 101         | Switching Protocols           | TBD                                                                                                                                                            |     |
| 102         | TBD                           | TBD                                                                                                                                                            |     |
| 103         | TBD                           | TBD                                                                                                                                                            |     |
| 200         | OK                            | リクエストが成功したことを示します                                                                                                                             | ✅  |
| 201         | Created                       | リソースが作成されたことを示します                                                                                                                             | ✅  |
| 202         | Accepted                      | リクエストは受理されたが、まだ実行されていないことを示します。                                                                                                 |     |
| 203         | Non-Authoritative Information | このレスポンスコードは、返されるメタ情報のセットが生成元のサーバーから得られるセットと同一ではなく、ローカルまたは第三者の持つ複製から収集したことを表します。 |     |
| 204         | No Content                    | リクエストに対して送信するコンテンツはありませんが、ヘッダーは有用であることを示します。                                                                       |     |
| 205         | Reset Content                 | TBD                                                                                                                                                            |     |
| 206         | Partial Content               | TBD                                                                                                                                                            |     |
| 207         | TBD                           | TBD                                                                                                                                                            |     |
| 208         | TBD                           | TBD                                                                                                                                                            |     |
| 226         | TBD                           | TBD                                                                                                                                                            |     |
| 300         | Multiple Choices              | TBD                                                                                                                                                            |     |
| 301         | TBD                           | TBD                                                                                                                                                            |     |
| 302         | TBD                           | TBD                                                                                                                                                            |     |
| 303         | TBD                           | TBD                                                                                                                                                            |     |
| 304         | TBD                           | TBD                                                                                                                                                            |     |
| 305         | TBD                           | TBD                                                                                                                                                            |     |
| 306         | TBD                           | TBD                                                                                                                                                            |     |
| 307         | TBD                           | TBD                                                                                                                                                            |     |
| 308         | TBD                           | TBD                                                                                                                                                            |     |
| 400         | TBD                           | TBD                                                                                                                                                            | ✅  |
| 401         | TBD                           | TBD                                                                                                                                                            | ✅  |
| 402         | TBD                           | TBD                                                                                                                                                            |     |
| 403         | TBD                           | TBD                                                                                                                                                            |     |
| 404         | TBD                           | TBD                                                                                                                                                            | ✅  |
| 405         | TBD                           | TBD                                                                                                                                                            |     |
| 406         | TBD                           | TBD                                                                                                                                                            |     |
| 407         | TBD                           | TBD                                                                                                                                                            |     |
| 408         | TBD                           | TBD                                                                                                                                                            |     |
| 409         | TBD                           | TBD                                                                                                                                                            |     |
| 410         | TBD                           | TBD                                                                                                                                                            |     |
| 411         | TBD                           | TBD                                                                                                                                                            |     |
| 412         | TBD                           | TBD                                                                                                                                                            |     |
| 413         | TBD                           | TBD                                                                                                                                                            |     |
| 414         | TBD                           | TBD                                                                                                                                                            |     |
| 415         | TBD                           | TBD                                                                                                                                                            |     |
| 416         | TBD                           | TBD                                                                                                                                                            |     |
| 417         | TBD                           | TBD                                                                                                                                                            |     |
| 418         | TBD                           | TBD                                                                                                                                                            |     |
| 421         | TBD                           | TBD                                                                                                                                                            |     |
| 422         | TBD                           | TBD                                                                                                                                                            |     |
| 423         | TBD                           | TBD                                                                                                                                                            |     |
| 424         | TBD                           | TBD                                                                                                                                                            |     |
| 425         | TBD                           | TBD                                                                                                                                                            |     |
| 426         | TBD                           | TBD                                                                                                                                                            |     |
| 428         | TBD                           | TBD                                                                                                                                                            |     |
| 429         | TBD                           | TBD                                                                                                                                                            |     |
| 431         | TBD                           | TBD                                                                                                                                                            |     |
| 500         | TBD                           | TBD                                                                                                                                                            | ✅  |
| 501         | TBD                           | TBD                                                                                                                                                            | ✅  |
| 502         | TBD                           | TBD                                                                                                                                                            |     |
| 503         | TBD                           | TBD                                                                                                                                                            |     |
| 504         | TBD                           | TBD                                                                                                                                                            |     |
| 505         | TBD                           | TBD                                                                                                                                                            | ✅  |
| 506         | TBD                           | TBD                                                                                                                                                            |     |
| 507         | TBD                           | TBD                                                                                                                                                            |     |
| 508         | TBD                           | TBD                                                                                                                                                            |     |
| 510         | TBD                           | TBD                                                                                                                                                            |     |
| 511         | TBD                           | TBD                                                                                                                                                            |     |

## 前提

Micro Post

## DEV

how to develop

```zsh
yarn install

yarn build

node dist/index.js

yarn dev
```

cURL

```zsh
# get user
curl  http://localhost:3000/users

# signin
curl  --include -X POST http://localhost:3000/login -H "Accept: application/json" -H "Content-type: application/json" -d '{ "name" : "taro", "password": "pass" }'

# sign up
curl -X POST http://localhost:3000/signup -H "Accept: application/json" -H "Content-type: application/json" -d '{ "name" : "hanako", "password": "hanapass" }'

# me
curl --include -b 'httpstatuszenbukaesuzo=initialToken;' http://localhost:3000/me
```
