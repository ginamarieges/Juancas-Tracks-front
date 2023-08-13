export interface UserStructure {
  name: string;
  lastname: string;
  username: string;
  password: string;
}

export interface UserData extends UserStructure {
  id: string;
}
