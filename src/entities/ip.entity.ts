import { IIpProxy } from '../models';
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
@Entity()
export class IIpProxyEntity implements IIpProxy {
  @PrimaryKey()
  id: string;
  @Property()
  addressV4: string;
  @Property()
  provider: string;
}
