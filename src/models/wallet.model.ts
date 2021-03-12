import { ICrypto } from './crypto.model';
export interface IWallet {
  id: string;
  name: string;
  crypto: ICrypto;
  sendAddress?: string;
  receiveAddress: string;
  provider: string;
}
