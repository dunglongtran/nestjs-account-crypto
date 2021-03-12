import { IAccount } from '../models';
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
@Entity({ tableName: 'accounts' })
export class AccountEntity implements IAccount {
  @PrimaryKey()
  id: string;
  @Property()
  userName: string;
  @Property()
  email: string;
  @Property()
  password: string;
}
