// Chapter 5: Warehouse II - Performance Tuning
const QUESTIONS = [
  {"num": 1, "question": "Which statistic update option samples a percentage of table data?", "options": ["A. FULLSCAN", "B. SAMPLE", "C. RESAMPLE", "D. AUTO"], "answer": "B", "explanation": "SAMPLE percent allows statistics update on a subset of data. Use for large tables where FULLSCAN is too expensive."},
  {"num": 2, "question": "What is the primary benefit of columnstore indexes for analytical queries?", "options": ["A. Faster point lookups", "B. Better compression", "C. Faster inserts", "D. Lower memory"], "answer": "B", "explanation": "Columnstore indexes provide excellent compression for analytical workloads by storing data column-wise, enabling better I/O and query performance for aggregations."}
];
