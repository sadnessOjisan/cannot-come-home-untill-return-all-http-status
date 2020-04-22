import { Request } from "express";
import { ShouldHandleError } from "./ShouldHandleError";
import { ERROR_CODE } from "../const/Error";

const SUPPORT_HTTP_VERSIONS = ["1.0", "1.1"];

const SUPPORT_HTTP_METHODS = [
  "GET",
  "POST",
  "PUT",
  "PATCH",
  "DELETE",
  "OPTIONS",
];

export const isSupportedHTTPVersion = (request: Request) => {
  return SUPPORT_HTTP_VERSIONS.includes(request.httpVersion);
};

export const isSupportedHTTPMehod = (request: Request) => {
  return SUPPORT_HTTP_METHODS.includes(request.method);
};

export const commponValidation = (request: Request) => {
  if (!isSupportedHTTPVersion(request)) {
    throw new ShouldHandleError(ERROR_CODE.UNSUPPORTED_HTTP_VERSION);
  }
  if (!isSupportedHTTPMehod(request)) {
    throw new ShouldHandleError(ERROR_CODE.UNSUPPORTED_HTTP_METHOD);
  }
};
