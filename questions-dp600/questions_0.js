// Chapter 0: Online Dumps - Mixed Practice Questions for DP-600
const QUESTIONS = [
  {
    "num": 1,
    "question": "You are designing a lakehouse in Microsoft Fabric. You need to implement a medallion architecture with bronze, silver, and gold layers. Which statement correctly describes the purpose of the silver layer?",
    "options": ["A. Raw data ingestion with minimal transformation", "B. Cleaned and validated data with business rules applied", "C. Aggregated data optimized for reporting and analytics", "D. Historical archive data for compliance purposes"],
    "answer": "B",
    "explanation": "The silver layer in medallion architecture contains cleaned and validated data. Business rules are applied, duplicates are removed, and data is structured for downstream consumption. The bronze layer holds raw data, while the gold layer contains aggregated, business-ready data."
  },
  {
    "num": 2,
    "question": "You are using Delta Lake format in Microsoft Fabric. Which feature of Delta Lake allows you to query previous versions of a table?",
    "options": ["A. Schema evolution", "B. Time Travel", "C. ACID transactions", "D. Data skipping"],
    "answer": "B",
    "explanation": "Time Travel is a Delta Lake feature that allows you to query previous versions of a table using a timestamp or version number. This is useful for auditing, data recovery, and reproducing machine learning experiments."
  },
  {
    "num": 3,
    "question": "You have a Fabric warehouse with a large fact table containing billions of rows. Which distribution strategy should you use to optimize join performance with dimension tables?",
    "options": ["A. ROUND_ROBIN", "B. HASH distribution on the join key", "C. REPLICATE distribution for dimension tables", "D. HEAP distribution"],
    "answer": "C",
    "explanation": "For dimension tables (small tables), REPLICATE distribution is optimal as it caches the entire table on each compute node. For large fact tables, use HASH distribution on the join key to ensure matching rows are on the same node during joins."
  },
  {
    "num": 4,
    "question": "You need to create a DAX measure that calculates year-to-date sales, restarting at the beginning of each fiscal year starting July 1st. Which DAX function should you use?",
    "options": ["A. TOTALYTD", "B. DATESYTD", "C. CALCULATE with FILTER", "D. SAMPERIODLASTYEAR"],
    "answer": "A",
    "explanation": "TOTALYTD allows you to specify a custom year-end date, making it suitable for fiscal years that don't align with calendar years. Use TOTALYTD([Sales], 'Date'[Date], \"6-30\") for a fiscal year ending June 30."
  },
  {
    "num": 5,
    "question": "You are implementing row-level security (RLS) in a Fabric warehouse. You need to ensure that sales representatives can only see sales from their own region. Which security predicate should you implement?",
    "options": ["A. FILTER predicate", "B. BLOCK predicate", "C. MASKING predicate", "D. CHECK constraint"],
    "answer": "A",
    "explanation": "FILTER predicates are used in row-level security to limit which rows users can access based on their identity or role. A FILTER predicate returns a boolean value determining whether each row is visible to the user."
  },
  {
    "num": 6,
    "question": "You need to create a semantic model with two fact tables: Sales and Targets. You want to create a measure that compares actual sales to targets. Which relationship type is most appropriate between the Date dimension and both fact tables?",
    "options": ["A. One-to-one", "B. One-to-many, active", "C. One-to-many, inactive", "D. Many-to-many"],
    "answer": "B",
    "explanation": "Both fact tables should have active one-to-many relationships with the Date dimension. This enables proper time intelligence calculations across both tables. You can use USERELATIONSHIP to activate an inactive relationship when needed."
  },
  {
    "num": 7,
    "question": "In Microsoft Fabric, which workspace role allows you to read and write items but not share them with others?",
    "options": ["A. Viewer", "B. Contributor", "C. Member", "D. Admin"],
    "answer": "C",
    "explanation": "Member role provides read and write access to workspace items but does not include the ability to share the workspace or its items. Contributors can read, write, and share. Viewers have read-only access."
  },
  {
    "num": 8,
    "question": "You need to optimize a PySpark notebook that processes large files. Which action will NOT improve performance?",
    "options": ["A. Using Delta Lake format", "B. Increasing executor memory", "C. Reading all files into a single DataFrame", "D. Partitioning data on frequently filtered columns"],
    "answer": "C",
    "explanation": "Reading all files into a single DataFrame can cause memory issues and performance degradation. Instead, process files incrementally, use partitioning, leverage Delta Lake optimizations, and configure appropriate executor resources."
  },
  {
    "num": 9,
    "question": "You are using a dataflow Gen2 to transform data from multiple sources. Which transformation should you use to combine rows from two tables based on matching values?",
    "options": ["A. Append", "B. Merge", "C. Join", "D. Aggregate"],
    "answer": "C",
    "explanation": "Join transformation combines rows from two tables based on matching values in specified columns. Append adds rows from one table to another. Merge combines changes from a source table into a target table."
  },
  {
    "num": 10,
    "question": "You need to schedule a daily refresh of a Power BI semantic model in Fabric. Which scheduling option allows the refresh to occur at different times in different time zones?",
    "options": ["A. Scheduled refresh", "B. API-based refresh", "C. Refresh using XMLA endpoint", "D. Manual refresh"],
    "answer": "B",
    "explanation": "API-based refresh gives you programmatic control over when refreshes occur, allowing you to implement custom logic for different time zones. Scheduled refresh uses a fixed time based on the workspace time zone."
  }
];
