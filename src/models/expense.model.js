export class Expense {
  constructor({ title, amount, category, date }) {
    this.id = Date.now().toString();
    this.title = title;
    this.amount = amount;
    this.category = category;
    this.date = date || new Date().toISOString();
  }
}
