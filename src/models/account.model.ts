import { ProfileModel } from './profile.model';
export interface IAccount {
  id: string;
  userName: string;
  email: string;
  password: string;
}
export class Account implements IAccount {
  id: string;
  userName: string;
  email: string;
  password: string;
}

export class AccountModel extends Account {
  profile?: ProfileModel;
}
