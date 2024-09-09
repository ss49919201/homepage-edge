import { TextRepositoryInterface } from "../../repository/text";

const texts: Text[] = [] as const;

export class TextRepository implements TextRepositoryInterface {
  async getAll(): Promise<Text[]> {
    return texts;
  }
}
