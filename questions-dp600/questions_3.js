// Chapter 3: Lakehouse II - Delta & Tables
const QUESTIONS = [
  {
    "num": 1,
    "question": "You need to update a Delta table schema by adding a new column. Which Delta Lake feature enables this without rewriting the entire table?",
    "options": ["A. Data skipping", "B. Schema evolution", "C. Z-ordering", "D. VACUUM"],
    "answer": "B",
    "explanation": "Schema evolution in Delta Lake allows you to add or change columns without rewriting the entire table. New columns are automatically added to the schema, and queries that don't reference them continue to work."
  },
  {
    "num": 2,
    "question": "Which command removes old file versions from a Delta table to free up storage space?",
    "options": ["A. DELETE FROM", "B. DROP TABLE", "C. VACUUM", "D. OPTIMIZE"],
    "answer": "C",
    "explanation": "VACUUM removes old file versions that are no longer needed for time travel or recent operations. By default, it retains files for 7 days. Use VACUUM with caution as deleted files cannot be recovered."
  },
  {
    "num": 3,
    "question": "You need to improve query performance on a large Delta table by organizing data based on frequently filtered columns. Which Delta feature should you use?",
    "options": ["A. Partitioning", "B. Z-ordering", "C. Both", "D. Neither"],
    "answer": "C",
    "explanation": "Both partitioning and Z-ordering improve performance. Partitioning organizes data into folders based on column values, while Z-ordering colocates related information in the same files. Use both for optimal performance on large tables."
  }
];
