const swaggerAutogen = require("swagger-autogen")();

// const swaggerAutogen = require("swagger-autogen")();
const doc = {
  info: {
    title: "Quiz System Api",
    description: "Project made for Internet Application classes.",
  },
  host: "localhost:8000",
  schemes: ["http"],
  securityDefinitions: {
    apiKeyAuth: {
      type: "apiKey",
      in: "header",
      name: "Authorization",
      description: "Bearer token verification",
    },
  },
  definitions: {
    LoginRequest: {
      email: "kamilporeba@hotmail.com",
      password: "Kamil123!",
    },
    LoginResponse: {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJpYXQiOjE2NjYxMDQzMTIsImV4cCI6MTc1MjEwNDMxMn0.H7E3TQPh8Nc0O5JWqPyMfRNHYoTPy57kc8z-2IJd0cc",
      refreshToken: "5f3c44c9-eac1-4ffd-a112-ae5a1fe38fed",
      email: "kamilporeba@hotmail.com",
    },
    LoginGoogleRequest: {
      tokenId: "token",
    },
    LoginGoogleResponse: {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJpYXQiOjE2NjYxMDQzMTIsImV4cCI6MTc1MjEwNDMxMn0.H7E3TQPh8Nc0O5JWqPyMfRNHYoTPy57kc8z-2IJd0cc",
      refreshToken: "5f3c44c9-eac1-4ffd-a112-ae5a1fe38fed",
    },
    RegisterGoogleResponse: {
      email: "kamilporeba@hotmail.com",
      googleSub: "googleSub",
      id: 1,
      password: "password",
      passwordResetDate: "2017-07-21",
      passwordResetToken: "resetToken",
      refreshToken: "refreshToken",
    },
    RegisterGoogleRequest: {
      tokenId: "token",
    },
    RegisterRequest: {
      email: "kamilporeba@hotmail.com",
      password: "Kamil123!",
      passwordRepeated: "Kamil123!",
    },
    RegisterResponse: {
      email: "kamilporeba@hotmail.com",
      googleSub: "googleSub",
      id: 1,
      password: "password",
      passwordResetDate: "2017-07-21",
      passwordResetToken: "resetToken",
      refreshToken: "refreshToken",
    },
    ProfileResponse: {
      email: "kamilporeba@hotmail.com",
      id: 1,
    },
    RefreshTokenResponse: {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJpYXQiOjE2NjYxMDQzMTIsImV4cCI6MTc1MjEwNDMxMn0.H7E3TQPh8Nc0O5JWqPyMfRNHYoTPy57kc8z-2IJd0cc",
    },
    ResetStartRequest: {
      email: "kamilporeba@hotmail.com",
    },
    ResetRequest: {
      email: "kamilporeba@hotmail.com",
      resetGUID: "e31ace7a-99fd-45e1-91c7-855e02d54983",
      password: "Kamil123!",
      passwordRepeated: "Kamil123!",
    },
    AddTrainingRequest: {
      name: "Training name",
      visibility: true,
    },
    EditTrainingRequest: {
      trainingId: 1,
      name: "Training name",
      visibility: true,
    },

    GetAllTrainingsResponse: [
      {
        id: 1,
        name: "Training name",
        visibility: true,
        userId: 4,
      },
    ],
    GetOneTrainingRequest: {
      trainingId: 1,
    },
    GetOneTrainingResponse: {
      id: 1,
      name: "Training name",
      visibility: true,
      userId: 4,
    },
    GetOneTrainingsResponse: [
      {
        id: 1,
        name: "Training name",
        visibility: true,
        userId: 4,
      },
    ],
    AddQuestionRequest: {
      question: "Sample question",
      trainingId: 1,
    },
    AddQuestionAnswerRequest: {
      questionId: 1,
      answer: "Sample answer",
      isCorrect: true,
    },
    GetQuestionsResponse: [
      {
        id: 1,
        question: "Test question",
        trainingId: 1,
        QuestionAnswer: [
          {
            id: 1,
            questionId: 1,
            answer: "sample answer",
            isCorrect: true,
          },
        ],
      },
    ],
    GetQuestionResponse: {
      id: 1,
      question: "Test question",
      trainingId: 1,
      QuestionAnswer: [
        {
          id: 1,
          questionId: 1,
          answer: "sample answer",
          isCorrect: true,
        },
      ],
    },
    EditQuestionRequest: {
      questionId: 1,
      question: "Sample question",
    },
    EditQuestionAnswerRequest: {
      answer: "Sample answer",
      isCorrect: true,
      questionAnswerId: 1,
    },
    AddQuestionWithAnswersRequest: {
      question: "Sample question",
      trainingId: 1,
      answers: [
        {
          answer: "Sample answer",
          isCorrect: true,
        },
        {
          answer: "Sample answer 2",
          isCorrect: false,
        },
      ],
    },
    StartTrainingSessionRequest: {
      trainingId: 1,
    },
    EndTrainingSessionRequest: {
      trainingId: 1,
    },
    AddUserAnswerRequest: {
      trainingSessionId: 1,
      questionId: 1,
      questionAnswerId: [1, 2, 3],
    },
  },
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./api/routes/router"];
swaggerAutogen(outputFile, endpointsFiles, doc);
