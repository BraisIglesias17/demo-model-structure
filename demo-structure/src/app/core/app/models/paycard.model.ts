import { IApiPaycard } from '../../api/model/paycard.model';

export class Paycard {
  constructor(data?: IApiPaycard) {
    Object.assign(this, data);
  }

  static map(data: IApiPaycard) {
    return new Paycard(data);
  }
}
