// Chapter 2: Lakehouse I - Lakehouse Concepts
const QUESTIONS = [
  {
    "num": 1,
    "question": "Which storage format is used by default for tables in a Microsoft Fabric lakehouse?",
    "options": ["A. Parquet", "B. Delta Lake", "C. CSV", "D. JSON"],
    "answer": "B",
    "explanation": "Delta Lake (based on Parquet) is the default storage format for Fabric lakehouse tables. Delta Lake provides ACID transactions, time travel, and schema evolution on top of Parquet files."
  },
  {
    "num": 2,
    "question": "What is the primary difference between a lakehouse and a data warehouse in Microsoft Fabric?",
    "options": ["A. Lakehouse uses SQL only", "B. Warehouse stores unstructured data", "C. Lakehouse supports both SQL and Spark", "D. Warehouse is faster for all workloads"],
    "answer": "C",
    "explanation": "Lakehouse combines the capabilities of a data lake (supporting unstructured/semi-structured data and Spark processing) with the structured query capabilities of a data warehouse. Warehouses are optimized for SQL workloads using T-SQL."
  },
  {
    "num": 3,
    "question": "You need to store JSON files from an API in a lakehouse for later processing. Which folder structure is recommended?",
    "options": ["A. Store in Tables folder", "B. Store in Files folder with subfolders by date", "C. Store directly in lakehouse root", "D. Create a separate lakehouse for files"],
    "answer": "B",
    "explanation": "For raw files like JSON, store them in the Files folder with organized subfolders (e.g., by date or source). The Tables folder is specifically for managed Delta tables. This keeps raw and processed data separate."
  },
  {
    "num": 4,
    "question": "Which command in PySpark creates a managed Delta table in a Fabric lakehouse?",
    "options": ["A. spark.sql(\"CREATE TABLE\")", "B. df.write.format(\"delta\").saveAsTable()", "C. df.write.parquet()", "D. CREATE EXTERNAL TABLE"],
    "answer": "B",
    "explanation": "df.write.format(\"delta\").saveAsTable() creates a managed Delta table in a lakehouse. The table is managed by Fabric, meaning the metadata and data are handled automatically. CREATE TABLE also works but requires SQL syntax."
  },
  {
    "num": 5,
    "question": "You need to query CSV files stored in the Files section of a lakehouse using Spark. Which method is most efficient?",
    "options": ["A. Read each file individually", "B. Use wildcard path with spark.read", "C. Copy to Tables folder first", "D. Use Lakehouse explorer only"],
    "answer": "B",
    "explanation": "Using spark.read with wildcard paths (e.g., \"Files/*.csv\") is efficient for reading multiple CSV files. Spark optimizes parallel reading of the files. You can also specify schema for better performance."
  }
];
