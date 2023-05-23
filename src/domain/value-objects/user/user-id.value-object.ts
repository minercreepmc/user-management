import { ID } from 'common-base-classes';
import { v4 as uuidv4 } from 'uuid';

export class UserIdValueObject extends ID {
  constructor(value?: string) {
    const id: string = value ? value : uuidv4();
    super(id);
  }
}
