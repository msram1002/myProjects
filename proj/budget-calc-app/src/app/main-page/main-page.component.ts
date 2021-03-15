import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { UpdatedItem } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    (newItem.type === "Income") ? this.totalBudget += parseInt(newItem.amount) : this.totalBudget -= parseInt(newItem.amount);
  }

  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    (item.type === "Income") ? this.totalBudget -= parseInt(item.amount) : this.totalBudget += parseInt(item.amount);
  }

  updateItem(updatedItem: UpdatedItem) {
    this.budgetItems[this.budgetItems.indexOf(updatedItem.old)] = updatedItem.new;
    // Update the total budget value as well
    (updatedItem.old.type === "Income") ? this.totalBudget -= parseInt(updatedItem.old.amount) : this.totalBudget += parseInt(updatedItem.old.amount);
    (updatedItem.new.type === "Income") ? this.totalBudget += parseInt(updatedItem.new.amount) : this.totalBudget -= parseInt(updatedItem.new.amount);
  }
}
