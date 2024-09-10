import { MyText } from "../entity/text";

export interface TextRepositoryInterface {
  getAll(): Promise<MyText[]>;
}
