// Chapter 4: Warehouse I - T-SQL & Modeling
const QUESTIONS = [
  {
    "num": 1,
    "question": "Which relationship cardinality in Fabric warehouse modeling enforces referential integrity by preventing orphaned records?",
    "options": ["A. One-to-one", "B. One-to-many", "C. Many-to-many", "D. All enforce referential integrity"],
    "answer": "B",
    "explanation": "One-to-many relationships can enforce referential integrity by ensuring that foreign key values in the many side reference valid primary keys in the one side. Many-to-many requires a junction table and doesn't directly enforce integrity."
  },
  {
    "num": 2,
    "question": "You need to create a slowly changing dimension (SCD) Type 2 to track historical changes to customer addresses. Which T-SQL feature is most appropriate?",
    "options": ["A. MERGE statement", "B. UPDATE with JOIN", "C. INSERT with triggers", "D. Temporal tables"],
    "answer": "A",
    "explanation": "MERGE statement is ideal for SCD Type 2 implementation as it can handle inserts for new records, updates for existing ones with effective date tracking, and expire old records in a single operation."
  },
  {
    "num": 3,
    "question": "Which index type in a Fabric warehouse is most appropriate for columns frequently used in JOIN predicates?",
    "options": ["A. Columnstore index", "B. Nonclustered index", "C. Clustered index", "D. Full-text index"],
    "answer": "C",
    "explanation": "Clustered indexes are best for columns frequently used in JOINs and WHERE clauses because they physically order the data. In Fabric warehouses, tables typically have clustered indexes on primary keys for optimal join performance."
  }
];
