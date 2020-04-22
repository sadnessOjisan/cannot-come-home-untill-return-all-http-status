import express, { Request } from "express";
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
import { ERROR_CODE } from "./const/Error";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/user", function (req, res) {
  const usecase = UserGetUsecase.of(
    IdService.of(),
    PostService.of(PostRepositry.of()),
    UserService.of(UserRepository.of())
  );
  const users = usecase.getUser();
  res.status(200).json(users);
});

app.post("/login", function (req: Request, res) {
  const authUsecase = AuthUsecase.of(AuthService.of(AuthRepository.of()));
  try {
    const users = authUsecase.signIn(req);
    res.status(200).json(users);
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
