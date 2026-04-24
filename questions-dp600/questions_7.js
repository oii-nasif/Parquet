// Chapter 7: Advanced DAX
const QUESTIONS = [
  {"num": 1, "question": "Which DAX function returns the value of an expression evaluated at a specific earlier date?", "options": ["A. SAMEPERIODLASTYEAR", "B. DATEADD", "C. PARALLELPERIOD", "D. CLOSINGBALANCE"], "answer": "B", "explanation": "DATEADD shifts dates by a specified interval, enabling evaluation at past or future periods. SAMEPERIODLASTYEAR is specifically for year-over-year."},
  {"num": 2, "question": "What happens when you use ALL() in a CALCULATE filter?", "options": ["A. Removes all filters", "B. Adds new filters", "C. Ignores the filter", "D. Error occurs"], "answer": "A", "explanation": "ALL() removes all filters from the specified table or columns, creating a clear filter context. This is useful for percentage-of-total calculations."}
];
