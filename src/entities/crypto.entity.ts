import { ICrypto } from '../models';
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
@Entity()
export class CrytoEntity implements ICrypto {
  @PrimaryKey()
  id: string;
  @Property()
  name: string;
}
