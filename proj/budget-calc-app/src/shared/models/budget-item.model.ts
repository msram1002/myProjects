export class BudgetItem {
  description: string;
  amount: number;

  constructor(description: string, amount: number) {
    this.description = description;
    this.amount = amount;
  }

  // or we can also write it as
  // constructor(public description: string, public amount: number) {}
}