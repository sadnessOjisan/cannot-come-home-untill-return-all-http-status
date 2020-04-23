export const ERROR_CODE = {
  // 認証系
  INVALID_PASSWORD: {
    statusCode: 400,
    message: "パスワード間違ってる",
  },
  UNAUTH: {
    statusCode: 401,
    message: "ログインが必要",
  },
  // リソース系
  AUTH_RESOURCE_NOTFOUND: {
    statusCode: 404,
    message: "認証テーブルからデータ見つからない",
  },
  USER_RESOURCE_NOTFOUND: {
    statusCode: 404,
    message: "Userテーブルからデータ見つからない",
  },
  // 入力チェック系
  MISSING_AUTH_PARAMS: {
    statusCode: 400,
    message: "認証に必要なパラメータ足りてない",
  },
  INVALID_AUTH_PARAMS: {
    statusCode: 400,
    message: "フォーマットと違う値を認証に入れてる",
  },
  MISSING_CONTENT: {
    statusCode: 400,
    message: "投稿文が空です",
  },
  INVALID_CONTENT: {
    statusCode: 400,
    message: "投稿文が不正フォーマットです",
  },
  // リクエストヘッダ系
  UNSUPPORTED_HTTP_VERSION: {
    statusCode: 505,
    message: "HTTP のバージョンを対応していいません",
  },
  UNSUPPORTED_HTTP_METHOD: {
    statusCode: 501,
    message: "HTTP のmethodを対応していいません",
  },
  // 不可解系
  WAKARAN: {
    statusCode: 500,
    message: "わからん！",
  },
};
