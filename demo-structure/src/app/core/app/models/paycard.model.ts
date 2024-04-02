import { ApiPaycard } from '../../api/model/paycard.model';

export class Paycard extends ApiPaycard {
  constructor(data?: Paycard) {
    super();
    Object.assign(this, data);
  }

  static map(data: Paycard) {
    return new Paycard(data);
  }
}
