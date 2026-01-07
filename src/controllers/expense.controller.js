import * as expenseService from "../services/expense.service.js";
import { successResponse } from "../utils/response.util.js";

export const addExpense = (req, res) => {
  const expense = expenseService.createExpense(req.body);
  successResponse(res, expense, "Expense added");
};

export const listExpenses = (req, res) => {
  const { page, limit, category } = req.query;
  const data = expenseService.getExpenses({ page, limit, category });
  successResponse(res, data);
};

export const editExpense = (req, res) => {
  const updated = expenseService.updateExpense(req.params.id, req.body);
  if (!updated) {
    return res.status(404).json({ message: "Expense not found" });
  }
  successResponse(res, updated, "Expense updated");
};

export const removeExpense = (req, res) => {
  const deleted = expenseService.deleteExpense(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: "Expense not found" });
  }
  successResponse(res, deleted, "Expense deleted");
};

export const getMonthlySummary = (req, res) => {
  const { month, year } = req.query;
  const summary = expenseService.monthlySummary(month, year);
  successResponse(res, summary);
};

export const getCategoryAnalytics = (req, res) => {
  const analytics = expenseService.categoryAnalytics();
  successResponse(res, analytics);
};
