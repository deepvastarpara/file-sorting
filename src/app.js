import express from "express";
import expenseRoutes from "./routes/expense.routes.js";

const app = express();

app.use(express.json());

app.use("/api/expenses", expenseRoutes);

/* 404 Handler */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

/* Global Error Handler */
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

export default app;
