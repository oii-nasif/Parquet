// Chapter 9: Data Ingestion - Pipelines & Connectors
const QUESTIONS = [
  {"num": 1, "question": "Which data pipeline activity should you use to copy data from Azure SQL Database to a Fabric lakehouse?", "options": ["A. Data flow", "B. Copy activity", "C. Script activity", "D. Lookup activity"], "answer": "B", "explanation": "Copy activity is designed for mass data movement between sources and sinks. It supports Azure SQL Database as source and Fabric lakehouse as destination."},
  {"num": 2, "question": "You need to ingest data from an API that returns JSON with nested arrays. Which pipeline feature handles this?", "options": ["A. Copy activity with flatten", "B. Data flow with complex types", "C. Both", "D. Neither"], "answer": "C", "explanation": "Both Copy activity (with flatten option) and Data flow Gen2 (with schema drift and complex type support) can handle nested JSON. Data flow provides more transformation flexibility."}
];
