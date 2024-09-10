import { MyText } from "../../entity/text";
import { TextRepositoryInterface } from "../../repository/text";

const texts: MyText[] = [
  { id: "1", text: "Hello" },
  { id: "2", text: "World" },
] as const;

export class TextRepository implements TextRepositoryInterface {
  async getAll(): Promise<MyText[]> {
    return texts;
  }
}
