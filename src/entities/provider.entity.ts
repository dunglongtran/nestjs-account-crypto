import { IProvider } from '../models';
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
@Entity()
export class ProviderEntity implements IProvider {
  @PrimaryKey()
  id: string;
  @Property()
  name: string;
  @Property()
  url: string;
}
