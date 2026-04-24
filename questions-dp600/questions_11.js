// Chapter 11: PySpark II - Transformations
const QUESTIONS = [
  {"num": 1, "question": "Which PySpark function is best for window-based aggregations like moving averages?", "options": ["A. groupBy", "B. Window specification", "C. rollup", "D. cube"], "answer": "B", "explanation": "Window specification with Window.partitionBy() and Window.rowsBetween() enables window functions like moving averages, running totals, and rank operations without reducing row count."},
  {"num": 2, "question": "You need to unpivot a DataFrame from wide to long format. Which operation should you use?", "options": ["A. pivot", "B. melt/stack", "C. explode", "D. flatten"], "answer": "B", "explanation": "PySpark doesn't have a built-in melt function like pandas. Use select with expressions, stack() function, or a combination of selectExpr and explode for unpivoting operations."}
];
