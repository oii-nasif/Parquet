// Chapter 10: PySpark I - Spark Fundamentals
const QUESTIONS = [
  {"num": 1, "question": "Which PySpark DataFrame action triggers job execution?", "options": ["A. select()", "B. filter()", "C. count()", "D. withColumn()"], "answer": "C", "explanation": "Actions like count(), collect(), and show() trigger job execution. Transformations like select(), filter(), and withColumn() are lazy and build the query plan."},
  {"num": 2, "question": "What is the purpose of broadcast() in PySpark joins?", "options": ["A. Replicate small table to all nodes", "B. Compress data", "C. Cache result", "D. Optimize shuffle"], "answer": "A", "explanation": "Broadcast() sends a small DataFrame to all executor nodes, avoiding expensive shuffle operations. Use for dimension tables when joining with large fact tables."}
];
