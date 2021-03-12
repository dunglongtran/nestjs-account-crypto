import { IProfile } from '../models';
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
@Entity()
export class ProfileEntity implements IProfile {
  @PrimaryKey()
  id: string;
  @Property()
  userName: string;
  @Property()
  email: string;
  @Property()
  password: string;
}
