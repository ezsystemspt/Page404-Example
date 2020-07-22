import iUser from './interfaceUser';
import {} from './interfaceUser';

export default class User implements iUser {
  Name: string;
  Password: ArrayBuffer;
  expirationDate: Date;

  constructor(params: iUser) {
    this.Name = params?.Name || '';
    this.Password = params?.Password;
    this.expirationDate = params?.expirationDate || new Date();
  }

  Save() {}

  Load() {}
}
