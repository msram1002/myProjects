export class BudgetItem {
  type: string
  description: string;
  amount: string;

  constructor(type: string, description: string, amount: string) {
    this.type = type;
    this.description = description;
    this.amount = amount;
  }

  // or we can also write it as
  // constructor(public description: string, public amount: number) {}
}