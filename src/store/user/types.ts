export interface UserStructure {
  name: string;
  lastname: string;
  username: string;
  password: string;
}

export interface UserData extends UserStructure {
  id: string;
}

export interface UserTokenDataStructure {
  id: string;
  name: string;
}

export interface UserTokenStructure extends UserTokenDataStructure {
  token: string;
}

export interface UserTokenData extends UserTokenStructure {
  isLogged: boolean;
}
