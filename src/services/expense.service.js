import { Expense } from "../models/expense.model.js";

let expenses = [];

export const createExpense = (data) => {
  const expense = new Expense(data);
  expenses.push(expense);
  return expense;
};

export const getExpenses = ({ page = 1, limit = 5, category }) => {
  let filtered = category
    ? expenses.filter((e) => e.category === category)
    : expenses;

  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    total: filtered.length,
    expenses: filtered.slice(start, end),
  };
};

export const updateExpense = (id, data) => {
  const index = expenses.findIndex((e) => e.id === id);
  if (index === -1) return null;

  expenses[index] = { ...expenses[index], ...data };
  return expenses[index];
};

export const deleteExpense = (id) => {
  const index = expenses.findIndex((e) => e.id === id);
  if (index === -1) return null;

  return expenses.splice(index, 1);
};

export const monthlySummary = (month, year) => {
  return expenses.filter((e) => {
    const d = new Date(e.date);
    return d.getMonth() + 1 == month && d.getFullYear() == year;
  });
};

export const categoryAnalytics = () => {
  return expenses.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});
};
