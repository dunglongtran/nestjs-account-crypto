import { IFaucetSite } from '../models';
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
@Entity()
export class FaucetSiteEntity implements IFaucetSite {
  @PrimaryKey()
  id: string;
  @Property()
  name: string;
  @Property()
  url: string;
}
