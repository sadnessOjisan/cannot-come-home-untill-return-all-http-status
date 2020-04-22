import express from "express";
import { OkUsecase } from "./usecase/OkUsecase";
import { IdService } from "./service/IdService";
import { PostService } from "./service/PostService";
import { PostRepositry } from "./repository/PostRepositry";
import { UserService } from "./service/UserService";
import { UserRepository } from "./repository/UserRepository";
import { injectInitData } from "./helper/initData";
const app = express();

const okUsecase = OkUsecase.of(
  IdService.of(),
  PostService.of(PostRepositry.of()),
  UserService.of(UserRepository.of())
);

// respond with "hello world" when a GET request is made to the homepage
app.get("/ok", function (req, res) {
  const users = okUsecase.getOkStatusCode();
  res.status(200).json(users);
});

injectInitData();

app.listen(3000, () => console.log("Example app listening on port 3000!"));
