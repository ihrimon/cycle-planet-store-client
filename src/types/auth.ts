export type RegisterFormInputs = {
  name: string;
  email: string;
  password: string;
  role: string;
};

export type LoginFormInputs = {
  email: string;
  password: string;
  role: string;
};

export type TUser = {
  userId: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};

export type TAuthState = {
  user: null | TUser;
  token: null | string;
  loading: boolean;
};
