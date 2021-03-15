export class BudgetItem {
  type: any;
  description: any;
  amount: any;

  constructor(type: any, description: any, amount: any) {
    this.type = type;
    this.description = description;
    this.amount = amount;
  }

  // or we can also write it as
  // constructor(public description: string, public amount: number) {}
}