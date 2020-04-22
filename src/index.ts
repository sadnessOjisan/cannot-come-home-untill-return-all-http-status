import express, { Request } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { UserGetUsecase } from "./usecase/UserGetUsecase";
import { AuthUsecase } from "./usecase/AuthUsecase";
import { IdService } from "./service/IdService";
import { PostService } from "./service/PostService";
import { PostRepositry } from "./repository/PostRepositry";
import { UserService } from "./service/UserService";
import { UserRepository } from "./repository/UserRepository";
import { injectInitData } from "./helper/initData";
import { AuthService } from "./service/AuthService";
import { AuthRepository } from "./repository/AuthRepository";
import { ShouldHandleError } from "./helper/ShouldHandleError";
import { commponValidation } from "./helper/statusCheck";
import { ERROR_CODE } from "./const/Error";

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/users", function (req, res) {
  commponValidation(req);
  const usecase = UserGetUsecase.of(
    IdService.of(),
    PostService.of(PostRepositry.of()),
    UserService.of(UserRepository.of())
  );
  const users = usecase.getUsers();
  res.status(200).json(users);
});

app.get("/me", function (req, res) {
  const usecase = UserGetUsecase.of(
    IdService.of(),
    PostService.of(PostRepositry.of()),
    UserService.of(UserRepository.of(), AuthRepository.of())
  );

  try {
    commponValidation(req);
    const me = usecase.getMe(req);
    res.status(200).json(me);
  } catch (e) {
    if (e instanceof ShouldHandleError) {
      console.log(e.toJSON().errorInfo.message);
      res
        .status(e.toJSON().errorInfo.statusCode)
        .json(e.toJSON().errorInfo.message);
    }
    res.status(ERROR_CODE.WAKARAN.statusCode).json(ERROR_CODE.WAKARAN.message);
  }
});

app.post("/login", function (req: Request, res) {
  const authUsecase = AuthUsecase.of(
    AuthService.of(
      AuthRepository.of(),
      UserRepository.of(),
      UserService.of(UserRepository.of(), AuthRepository.of())
    )
  );
  try {
    commponValidation(req);
    const token = authUsecase.signIn(req);
    // login成功は200
    // FYI: https://stackoverflow.com/questions/7064374/proper-http-headers-for-login-success-fail-responses
    res.cookie("httpstatuszenbukaesuzo", token, {
      httpOnly: true,
    });
    res.status(200).json("success");
  } catch (e) {
    if (e instanceof ShouldHandleError) {
      res
        .status(e.toJSON().errorInfo.statusCode)
        .json(e.toJSON().errorInfo.message);
    }
    res.status(ERROR_CODE.WAKARAN.statusCode).json(ERROR_CODE.WAKARAN.message);
  }
});

app.post("/signup", function (req: Request, res) {
  commponValidation(req);
  const authUsecase = AuthUsecase.of(
    AuthService.of(
      AuthRepository.of(),
      UserRepository.of(),
      UserService.of(UserRepository.of())
    )
  );
  try {
    const token = authUsecase.signUp(req);
    res.status(201).json();
    res.cookie("httpstatuszenbukaesuzo", token, {
      httpOnly: true,
    });
    return;
  } catch (e) {
    if (e instanceof ShouldHandleError) {
      console.log(e.toJSON().errorInfo.message);
      res
        .status(e.toJSON().errorInfo.statusCode)
        .json(e.toJSON().errorInfo.message);
      return;
    }
    res.status(ERROR_CODE.WAKARAN.statusCode).json(ERROR_CODE.WAKARAN.message);
  }
});

injectInitData();

app.listen(3000, () => console.log("Example app listening on port 3000!"));
