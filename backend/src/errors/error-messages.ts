export enum GENERAL_ERRORS {
  NO_JWT_SECRET = 'No JWT Secret could be found',
  UNAUTHORIZED_ACCESS = 'Not authenticated',
}

export enum USER_ERRORS {
  USER_ALREADY_EXISTS = 'Email already in use',
  USER_DOES_NOT_EXIST = 'Invalid credentials',
  USER_INCORRECT_FIELDS = 'Incorrect fields provided for user',
  USER_UPDATE_INCORRECT_FIELDS = 'Incorrect fields provided to update user',
}

export enum AUTH_ERRORS {
  AUTH_INCORRECT_FIELDS = 'Incorrect fields provided',
}