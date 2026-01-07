import { CATEGORIES } from "../config/constants.js";

export const validateExpense = (req, res, next) => {
  const { title, amount, category } = req.body;

  if (!title || typeof title !== "string") {
    return res.status(400).json({ message: "Invalid title" });
  }

  if (!amount || typeof amount !== "number") {
    return res.status(400).json({ message: "Invalid amount" });
  }

  if (!CATEGORIES.includes(category)) {
    return res.status(400).json({ message: "Invalid category" });
  }

  next();
};
