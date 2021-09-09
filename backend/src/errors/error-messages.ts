export enum GENERAL_ERRORS {
  NO_JWT_SECRET = 'No JWT Secret could be found',
  UNAUTHORIZED_ACCESS = 'Unauthorized',
  INVALID_PARAMETERES = 'Invalid parameters',
  VALIDATION_ERROR = 'Invalid $property value',
}

export enum USER_ERRORS {
  USER_ALREADY_EXISTS = 'Email already in use',
  USER_DOES_NOT_EXIST = 'Invalid credentials',
  USER_CURRENT_USER_CONTEXT = 'Could not find details for logged in user',
  USER_DELETED = 'This user has been deleted',
}

export enum AUTH_ERRORS {
  AUTH_INCORRECT_FIELDS = 'Incorrect fields provided',
}
