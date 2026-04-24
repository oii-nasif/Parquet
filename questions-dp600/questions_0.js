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
  },
  {
    "num": 11,
    "question": "You are implementing a lakehouse in Microsoft Fabric. Which statement is true about the SQL endpoint of a lakehouse?",
    "options": ["A. It supports full DML operations (INSERT, UPDATE, DELETE)", "B. It is read-only for querying Delta tables", "C. It only works with Parquet files", "D. It requires a separate warehouse"],
    "answer": "B",
    "explanation": "The SQL endpoint of a lakehouse is read-only, allowing you to query Delta tables using T-SQL. For DML operations, you must use the lakehouse itself with Spark or warehouse capabilities. This is a key distinction between lakehouse and warehouse."
  },
  {
    "num": 12,
    "question": "You need to create a measure that calculates sales per customer, then ranks customers by their total sales. Which DAX functions should you use?",
    "options": ["A. SUM and RANKX", "B. CALCULATE and ROW", "C. SUMX and TOPN", "D. DISTINCTCOUNT and ORDERBY"],
    "answer": "A",
    "explanation": "RANKX is the DAX function for ranking values. Combine it with SUM (or another aggregation) to calculate sales per customer, then rank the results. The pattern is: RANKX(ALL(Customer), [Total Sales],,DESC)."
  },
  {
    "num": 13,
    "question": "You are designing a data pipeline in Fabric that needs to handle incremental loads from a source database. Which pipeline activity should you use to track which rows have already been processed?",
    "options": ["A. Copy activity with timestamp parameter", "B. Lookup activity with watermark", "C. Script activity with change tracking", "D. Stored procedure activity"],
    "answer": "A",
    "explanation": "Copy activity with a timestamp parameter allows you to filter source data based on a high-watermark value stored in control tables or variables. This enables incremental loads by only copying new or changed records since the last run."
  },
  {
    "num": 14,
    "question": "In PySpark, you need to read a Delta table that was created earlier and apply additional filters. Which command is most efficient?",
    "options": ["A. spark.read.format('delta').load().filter()", "B. spark.read.format('parquet').load().filter()", "C. spark.sql('SELECT * FROM table WHERE condition')", "D. All are equally efficient"],
    "answer": "C",
    "explanation": "Using spark.sql with a WHERE clause pushes predicates down to the Delta Lake engine, enabling data skipping for better performance. While format('delta').load().filter() works, the SQL approach often benefits from additional optimization."
  },
  {
    "num": 15,
    "question": "You need to create a semantic model in DirectLake mode. Which data source requirement must be met?",
    "options": ["A. Data must be in a warehouse", "B. Data must be Delta Lake format", "C. Data must be imported first", "D. Data must be under 1GB"],
    "answer": "B",
    "explanation": "DirectLake requires Delta Lake format as the data source. It reads Parquet files directly from OneLake without loading data into the model, providing near-import performance with automatic refresh. Warehouses and lakehouses both use Delta Lake format."
  },
  {
    "num": 16,
    "question": "You are working with a large fact table in a Fabric warehouse. Which index type provides the best compression for analytical queries?",
    "options": ["A. Clustered index", "B. Nonclustered index", "C. Clustered columnstore index", "D. Hash index"],
    "answer": "C",
    "explanation": "Clustered columnstore indexes provide excellent compression for analytical workloads by storing data column-wise. They are the default for large tables in Fabric warehouses and optimize performance for scans and aggregations."
  },
  {
    "num": 17,
    "question": "You need to implement a slowly changing dimension (SCD) Type 1 in a Fabric warehouse. Which T-SQL statement is most appropriate?",
    "options": ["A. MERGE statement", "B. UPDATE with JOIN", "C. DELETE and INSERT", "D. INSERT with ON DUPLICATE KEY"],
    "answer": "B",
    "explanation": "For SCD Type 1 (overwrite), a simple UPDATE with JOIN is sufficient and most straightforward. MERGE is typically used for SCD Type 2 where you need to track history. SCD Type 1 simply overwrites old values with new ones."
  },
  {
    "num": 18,
    "question": "You are creating a DAX measure for a semantic model. You need to filter a calculation to only include sales from the current month. Which function should you use?",
    "options": ["A. SAMEPERIODLASTYEAR", "B. DATESINPERIOD", "C. DATESMTD", "D. DATEADD"],
    "answer": "B",
    "explanation": "DATESINPERIOD returns a table of dates from a specified period, making it ideal for filtering to the current month. Combine with CALCULATE: CALCULATE([Sales], DATESINPERIOD('Date'[Date], MAX('Date'[Date]), -1, MONTH))."
  },
  {
    "num": 19,
    "question": "In Microsoft Fabric, what is the primary purpose of OneLake?",
    "options": ["A. Backup and disaster recovery", "B. Unified storage for all Fabric data", "C. Compute isolation", "D. Data cataloging"],
    "answer": "B",
    "explanation": "OneLake is a single, unified logical data lake for all Fabric data. It provides a consistent storage experience where all workspaces, items, and data are stored, with shortcuts enabling virtual access without data duplication."
  },
  {
    "num": 20,
    "question": "You need to implement dynamic data masking in a Fabric warehouse to hide sensitive customer emails. Which masking function should you use?",
    "options": ["A. MASK()", "B. EMAIL_MASK()", "C. partial()", "D. email()"],
    "answer": "D",
    "explanation": "The email() masking function in Dynamic Data Masking exposes the first character of an email address and masks the rest with 'XXX@XXXX.com'. For example, 'jane@contoso.com' becomes 'jXXX@XXXX.com'."
  },
  {
    "num": 21,
    "question": "You are using PySpark in a Fabric notebook. Which method should you use to register a DataFrame as a temporary view for SQL queries?",
    "options": ["A. createTempView()", "B. createOrReplaceTempView()", "C. registerTempTable()", "D. saveAsTable()"],
    "answer": "B",
    "explanation": "createOrReplaceTempView() registers a DataFrame as a temporary view that can be queried with Spark SQL. If a view with the same name exists, it's replaced. createTempView() throws an error if the view exists."
  },
  {
    "num": 22,
    "question": "You need to create a relationship between two tables in a semantic model where multiple relationships are possible. How do you specify which relationship to use in a measure?",
    "options": ["A. Set relationship cardinality", "B. Use USERELATIONSHIP", "C. Mark both as active", "D. Use CROSSFILTER"],
    "answer": "B",
    "explanation": "USERELATIONSHIP allows you to specify which relationship to use in a specific measure, even if it's marked as inactive. Only one relationship between two tables can be active at a time."
  },
  {
    "num": 23,
    "question": "You are designing a Fabric workspace for a multi-region team. Which feature allows you to organize items by domain without moving data?",
    "options": ["A. Workspaces", "B. Domains", "C. Shortcuts", "D. Folders"],
    "answer": "C",
    "explanation": "Shortcuts in OneLake allow you to organize data by domain without copying or moving the actual data. Multiple shortcuts can point to the same data, enabling domain-centric data governance."
  },
  {
    "num": 24,
    "question": "In a dataflow Gen2, you need to transform a date column from string format (MM/DD/YYYY) to a proper date type. Which transformation should you use?",
    "options": ["A. Change Type", "B. Split Column by Delimiter", "C. Derived Column", "D. Parse"],
    "answer": "A",
    "explanation": "Change Type transformation can convert a string column to date type if the format is recognizable. For complex formats, use Derived Column with Date.DateTime function or use Parse with format specifiers."
  },
  {
    "num": 25,
    "question": "You need to monitor pipeline performance in Fabric. Which metric indicates how long a pipeline activity took to complete?",
    "options": ["A. Throughput", "B. Latency", "C. Duration", "D. Execution time"],
    "answer": "C",
    "explanation": "Duration measures the time an activity takes from start to completion. This is the primary metric for monitoring pipeline performance. Latency refers to data freshness (time from source to destination)."
  },
  {
    "num": 26,
    "question": "Which DAX function should you use to calculate a running total of sales across all dates in the current context?",
    "options": ["A. TOTALYTD", "B. CALCULATE with FILTER", "C. RUNNINGTOTAL", "D. No built-in function, use cumulative pattern"],
    "answer": "D",
    "explanation": "DAX doesn't have a built-in RUNNINGTOTAL function. Use the cumulative total pattern: CALCULATE([Sales], FILTER(ALLSELECTED('Date'[Date]), 'Date'[Date] <= MAX('Date'[Date])))."
  },
  {
    "num": 27,
    "question": "You are implementing security in a Fabric workspace. Which feature allows you to grant read access to specific rows based on user attributes?",
    "options": ["A. Column-level security", "B. Row-level security", "C. Dynamic data masking", "D. Sensitivity labels"],
    "answer": "B",
    "explanation": "Row-level security (RLS) filters which rows users can see based on their user attributes or roles. It's implemented using security predicates in warehouses or roles in semantic models."
  },
  {
    "num": 28,
    "question": "In PySpark, which operation is used to combine two DataFrames with the same schema?",
    "options": ["A. join()", "B. union()", "C. concat()", "D. merge()"],
    "answer": "B",
    "explanation": "union() combines two DataFrames with the same schema, appending rows from the second DataFrame to the first. join() combines columns based on keys. concat() is a SQL function, not a DataFrame method."
  },
  {
    "num": 29,
    "question": "You need to create a semantic model that automatically updates when source data changes. Which storage mode should you choose?",
    "options": ["A. Import", "B. DirectQuery", "C. DirectLake", "D. Composite"],
    "answer": "B",
    "explanation": "DirectQuery queries the data source in real-time, so changes are immediately visible. However, it's slower than Import or DirectLake. DirectLake also reflects changes but doesn't require scheduled refresh—only metadata refresh."
  },
  {
    "num": 30,
    "question": "Which Fabric item should you use for ad-hoc data exploration with SQL queries on data in a lakehouse?",
    "options": ["A. Warehouse", "B. SQL analytics endpoint", "C. Notebook", "D. KQL Queryset"],
    "answer": "B",
    "explanation": "The SQL analytics endpoint provides a read-only SQL interface to data in a lakehouse, enabling ad-hoc queries without needing to create a separate warehouse or use Spark notebooks."
  },
  {
    "num": 31,
    "question": "You need to create a measure that calculates the percentage of total sales. Which DAX pattern should you use?",
    "options": ["A. DIVIDE([Sales], SUM(ALL(Sales)))", "B. DIVIDE([Sales], CALCULATE([Sales], ALLSELECTED()))", "C. DIVIDE([Sales], [Total Sales])", "D. Both A and B work"],
    "answer": "B",
    "explanation": "To calculate percentage of total, use: DIVIDE([Sales], CALCULATE([Sales], ALLSELECTED(table))). ALLSELECTED removes filters on the table but respects external filters, giving you the context-aware total."
  },
  {
    "num": 32,
    "question": "In a Fabric data pipeline, you need to copy data from API responses that are paginated. Which pipeline configuration should you use?",
    "options": ["A. Pagination with absolute URL", "B. Pagination with next link", "C. Multiple copy activities", "D. Data flow with loop"],
    "answer": "B",
    "explanation": "For REST APIs with pagination, configure the Copy activity to use pagination with next link (the API returns a pointer to the next page). This automatically handles pagination without manual configuration."
  },
  {
    "num": 33,
    "question": "You are using PySpark to process JSON data with nested structures. Which function should you use to extract a nested field?",
    "options": ["A. get_json_object()", "B. col().getField()", "C. explode()", "D. from_json()"],
    "answer": "D",
    "explanation": "from_json() parses a JSON string and converts it to a structured type. For accessing nested fields from the parsed structure, use col().getField() or the dot notation (col('field.nestedfield'))."
  },
  {
    "num": 34,
    "question": "Which relationship property in a semantic model determines if filters flow from the many side to the one side?",
    "options": ["A. Cardinality", "B. Cross filter direction", "C. Security", "D. Active status"],
    "answer": "B",
    "explanation": "Cross filter direction (single vs. both) determines whether filters propagate across the relationship. Both directions allows filters from the many side to affect the one side, which is useful for some scenarios but can impact performance."
  },
  {
    "num": 35,
    "question": "You need to implement incremental refresh for a large semantic model. Which prerequisite must be met?",
    "options": ["A. Data must be in DirectQuery mode", "B. Parameter tables must be created", "C. All tables must have a date column", "D. Model must be less than 1GB"],
    "answer": "B",
    "explanation": "Incremental refresh requires creating parameter tables (RangeStart and RangeEnd) to define the refresh window. These parameters are used in the power query (M) queries and the refresh policy configuration."
  },
  {
    "num": 36,
    "question": "In Fabric, which feature allows you to create a virtual copy of data in another workspace without duplicating storage?",
    "options": ["A. Copy/Paste", "B. Shortcuts", "C. Mirroring", "D. Replication"],
    "answer": "B",
    "explanation": "Shortcuts create a virtual pointer to data in OneLake, allowing multiple workspaces to access the same data without copying. This enables domain-centered organization while maintaining a single source of truth."
  },
  {
    "num": 37,
    "question": "You need to optimize a PySpark query that filters on a high-cardinality column. Which Delta Lake feature should you use?",
    "options": ["A. Z-ordering", "B. Partitioning", "C. Data skipping", "D. Vacuum"],
    "answer": "A",
    "explanation": "Z-ordering collocates related information in the same set of files by sorting data on specified columns. This improves data skipping for queries that filter on those columns. Partitioning high-cardinality columns creates many small files and hurts performance."
  },
  {
    "num": 38,
    "question": "Which DAX function removes all filters from the specified table or column?",
    "options": ["A. REMOVEFILTERS", "B. ALL", "C. ALLEXCEPT", "D. ALLNOBLANKROW"],
    "answer": "A",
    "explanation": "REMOVEFILTERS (introduced in 2022) is the modern, explicit function for removing filters. ALL also removes filters but has broader semantics and was commonly used before REMOVEFILTERS was available."
  },
  {
    "num": 39,
    "question": "You need to create a real-time dashboard in Fabric using data from Eventhouse. Which item should you use?",
    "options": ["A. KQL Queryset", "B. Real-time dashboard", "C. Eventstream", "D. Power BI report"],
    "answer": "A",
    "explanation": "KQL Queryset allows you to define Kusto queries that can be visualized in Power BI. For real-time scenarios, use Eventstream to ingest data into Eventhouse (Kusto database), then query with KQL Queryset."
  },
  {
    "num": 40,
    "question": "In a Fabric warehouse, which statement is true about clustered columnstore indexes?",
    "options": ["A. They must be created manually", "B. They are the default for new tables", "C. They are not supported in Fabric", "D. They only work on numeric columns"],
    "answer": "B",
    "explanation": "Clustered columnstore indexes are the default for new tables in Fabric warehouses. They provide excellent compression and query performance for analytical workloads. You don't need to create them explicitly unless you want different options."
  },
  {
    "num": 41,
    "question": "You need to calculate the difference between sales this year and sales last year in DAX. Which calculation should you use?",
    "options": ["A. [This Year] - [Last Year]", "B. CALCULATE([Sales], DATEADD(Date, -1, YEAR))", "C. [Sales] - CALCULATE([Sales], SAMEPERIODLASTYEAR(Date))", "D. PARALLELPERIOD approach"],
    "answer": "C",
    "explanation": "Use: [Sales] - CALCULATE([Sales], SAMEPERIODLASTYEAR('Date'[Date])) to calculate year-over-year difference. SAMEPERIODLASTYEAR shifts the date context back one year, and CALCULATE computes sales for that period."
  },
  {
    "num": 42,
    "question": "Which Fabric capacity tier is designed for production workloads with multiple concurrent users?",
    "options": ["A. F2", "B. F8", "C. F32", "D. F64"],
    "answer": "D",
    "explanation": "F64 is the highest capacity tier, designed for large production workloads with many concurrent users. F2 is for development/testing, F8 for small teams, and F32 for medium-sized production deployments."
  },
  {
    "num": 43,
    "question": "You need to process streaming data in real-time using Fabric. Which item should you use?",
    "options": ["A. Data pipeline", "B. Eventstream", "C. Dataflow", "D. Notebook"],
    "answer": "B",
    "explanation": "Eventstream is Fabric's real-time data processing solution. It can ingest, process, and route streaming data with low latency. Data pipelines are for batch processing, while dataflows and notebooks are for transformation scenarios."
  },
  {
    "num": 44,
    "question": "In a semantic model, you need to create a measure that calculates the average of a column across all rows, not just the current context. Which function should you use?",
    "options": ["A. AVERAGE", "B. AVERAGEX", "C. CALCULATE with ALL", "D. DIVIDE(SUM, COUNT) with ALL"],
    "answer": "B",
    "explanation": "AVERAGEX iterates over a table and evaluates an expression for each row, then averages the results. To average across all rows regardless of context: AVERAGEX(ALL(Table), Table[Column])."
  },
  {
    "num": 45,
    "question": "You need to implement change data capture (CDC) for a Delta table in Fabric. Which feature tracks changes automatically?",
    "options": ["A. Delta Lake transaction log", "B. Change tracking", "C. CDC tables", "D. Trigger-based logging"],
    "answer": "A",
    "explanation": "Delta Lake's transaction log automatically tracks all changes (INSERT, UPDATE, DELETE) made to the table. You can query previous versions using Time Travel, or read the transaction log directly for change data capture scenarios."
  },
  {
    "num": 46,
    "question": "Which PySpark function should you use to read only specific columns from a Delta table?",
    "options": ["A. select()", "B. withColumn()", "C. drop()", "D. read() with schema"],
    "answer": "A",
    "explanation": "Use select() to specify only the columns you need: df.select('col1', 'col2'). This improves performance by not reading unnecessary columns from storage. You can also specify columns in the read() schema parameter."
  },
  {
    "num": 47,
    "question": "You need to create a composite semantic model with some tables in Import mode and others in DirectQuery. What is this called?",
    "options": ["A. Mixed mode", "B. Hybrid model", "C. Composite model", "D. Dual mode"],
    "answer": "C",
    "explanation": "A composite model combines tables from different storage modes (Import, DirectQuery, or DirectLake). This allows you to optimize based on data characteristics and refresh requirements."
  },
  {
    "num": 48,
    "question": "In Fabric, what is the primary benefit of using Git integration for a semantic model?",
    "options": ["A. Automatic deployment", "B. Version control and collaboration", "C. Backup", "D. Performance optimization"],
    "answer": "B",
    "explanation": "Git integration provides version control, enabling collaboration, change tracking, and the ability to revert to previous versions. While it can be part of a deployment pipeline, the primary benefit is version control."
  },
  {
    "num": 49,
    "question": "You need to create a measure that returns a different value based on a user's selection in a slicer. Which DAX pattern should you use?",
    "options": ["A. SWITCH", "B. IF with multiple conditions", "C. SELECTEDVALUE", "D. Both A and C"],
    "answer": "D",
    "explanation": "Both SWITCH and SELECTEDVALUE patterns work. SWITCH(TRUE(), conditions) handles multiple conditions cleanly. SELECTEDVALUE returns a single value if one item is selected, which you can then use in IF statements or SWITCH."
  },
  {
    "num": 50,
    "question": "Which Fabric feature provides automatic sensitivity labeling for data containing personally identifiable information (PII)?",
    "options": ["A. Data classification", "B. Sensitivity labels", "C. Microsoft Purview", "D. Copilot for Data"],
    "answer": "C",
    "explanation": "Microsoft Purview integration provides automatic data classification and sensitivity labeling based on content scanning. It can detect PII and apply appropriate labels automatically for data governance."
  }
];
