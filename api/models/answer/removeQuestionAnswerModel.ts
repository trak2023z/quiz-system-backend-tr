import { User } from "@prisma/client";
import { Request, Response } from "express";

type DeleteQuestionAnswerRequestBody = {
  questionAnswerId: number;
};

type DeleteQuestionAnswerLocals = {
  user: User;
};

export type DeleteQuestionAnswerRequestModel = Request<
  any,
  any,
  DeleteQuestionAnswerRequestBody
>;

export type DeleteQuestionAnswerResponseModel = Response<
  any,
  DeleteQuestionAnswerLocals
>;
