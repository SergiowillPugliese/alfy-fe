import { v4 as uuidv4 } from 'uuid';

export class Utility {
  static generateUniqueId() {
    return uuidv4();
  }
}
