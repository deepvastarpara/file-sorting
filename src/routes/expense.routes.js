import express from "express";
import {
  addExpense,
  listExpenses,
  editExpense,
  removeExpense,
  getMonthlySummary,
  getCategoryAnalytics,
} from "../controllers/expense.controller.js";

import { validateExpense } from "../middlewares/validate.middleware.js";

const router = express.Router();

router.post("/", validateExpense, addExpense);
router.get("/", listExpenses);
router.put("/:id", validateExpense, editExpense);
router.delete("/:id", removeExpense);

router.get("/summary/monthly", getMonthlySummary);
router.get("/analytics/category", getCategoryAnalytics);

export default router;
