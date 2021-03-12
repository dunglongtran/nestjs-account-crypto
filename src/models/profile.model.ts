import { IAccount } from './account.model';
export interface IProfile extends IAccount {
  [key: string]: any;
}
export class Profile implements IProfile {
  id: string;
  userName: string;
  email: string;
  password: string;
}
export class ProfileModel extends Profile {}
