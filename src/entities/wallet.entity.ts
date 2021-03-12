import { IWallet, ICrypto } from '../models';
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
@Entity()
export class WalletEntity implements IWallet {
  @PrimaryKey()
  id: string;
  @Property()
  name: string;
  @Property()
  sendAddress?: string;
  @Property()
  receiveAddress: string;
  @Property()
  provider: string;
  crypto: ICrypto;
}
