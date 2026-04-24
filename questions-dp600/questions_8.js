// Chapter 8: Semantic Models
const QUESTIONS = [
  {"num": 1, "question": "Which relationship type in Power BI/Fabric allows a single row in one table to relate to multiple rows in another?", "options": ["A. One-to-one", "B. One-to-many", "C. Many-to-many", "D. Bi-directional"], "answer": "B", "explanation": "One-to-many is the most common relationship type where a single parent row relates to multiple child rows. This is the standard for dimension-fact relationships."},
  {"num": 2, "question": "What is the purpose of the 'Make this relationship active' setting in semantic model relationships?", "options": ["A. Enable relationship for all queries", "B. Use when multiple relationships exist", "C. Improve performance", "D. Required for all relationships"], "answer": "B", "explanation": "When multiple relationships exist between tables (e.g., multiple date fields), only one can be active. Use USERELATIONSHIP to activate others in specific measures."}
];
