export const ERROR_CODE = {
  // 認証系
  INVALID_PASSWORD: {
    statusCode: 400,
    message: "パスワード間違ってる",
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
  // 不可解系
  WAKARAN: {
    statusCode: 500,
    message: "わからん！",
  },
};
