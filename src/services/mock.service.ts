import { Injectable } from '@nestjs/common';
import { IAccount } from '../models';
import { parseTemplate } from '../helpers/template.helper';

@Injectable()
export class MockService {
  async byLocale(locale: string): Promise<IAccount> {
    const profile = await parseTemplate('../templates/profile.template');
    console.log('profile', profile);
    return { userName: 'sss', email: '', password: '', id: '' };
  }
}
