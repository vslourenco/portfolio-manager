import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("user")
class User {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  email: string;

  // password: string;

  @Column()
  photo: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { User };
