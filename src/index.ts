import express from "express";
import { OkUsecase } from "./usecase/OkUsecase";
import { AuthUsecase } from "./usecase/AuthUsecase";
import { IdService } from "./service/IdService";
import { PostService } from "./service/PostService";
import { PostRepositry } from "./repository/PostRepositry";
import { UserService } from "./service/UserService";
import { UserRepository } from "./repository/UserRepository";
import { injectInitData } from "./helper/initData";
import { AuthService } from "./service/AuthService";
import { AuthRepository } from "./repository/AuthRepository";

const app = express();

const okUsecase = OkUsecase.of(
  IdService.of(),
  PostService.of(PostRepositry.of()),
  UserService.of(UserRepository.of())
);

app.get("/ok", function (req, res) {
  const users = okUsecase.getOkStatusCode();
  res.status(200).json(users);
});

app.post("/posts", function (req, res) {
  const users = okUsecase.getOkStatusCode();
  res.status(201).json();
});

app.get("/login", function (req, res) {
  const authUsecase = AuthUsecase.of(AuthService.of(AuthRepository.of()));
  const { id, password } = req.body;
  const users = authUsecase.signIn(id, password);
  res.status(200).json(users);
});

injectInitData();

app.listen(3000, () => console.log("Example app listening on port 3000!"));
