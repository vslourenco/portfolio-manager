import { v4 as uuidV4 } from "uuid";

class Product {
  id?: string;
  name: string;
  value: number;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Product };
