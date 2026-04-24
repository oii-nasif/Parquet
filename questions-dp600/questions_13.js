// Chapter 13: Mock Exam - Mixed 50 Questions
const QUESTIONS = [
  {"num": 1, "question": "Which Fabric item should you use for ad-hoc SQL queries with visualization capabilities?", "options": ["A. Warehouse", "B. Lakehouse", "C. KQL Queryset", "D. Notebook"], "answer": "D", "explanation": "Notebooks support SQL with result visualization. KQL Querysets is for Kusto queries. Warehouse requires a separate query interface."},
  {"num": 2, "question": "In DAX, what does the CALCULATE function do with its filter arguments?", "options": ["A. Replaces existing filters", "B. Adds to existing filters", "C. Both", "D. Neither"], "answer": "A", "explanation": "CALCULATE replaces the filter context for the specified columns. Use KEEPFILTERS or ALL inside to modify rather than replace filters."}
];
