export class ShoppingItem {
  constructor(
    public _id: string,
    public name: string,
    public bought: boolean = false,
    public createdAt: Date,
    public updatedAt: Date,
    public list: string[] = []
  ) {}
}
