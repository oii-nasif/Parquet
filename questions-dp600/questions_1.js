// Chapter 1: Fabric Fundamentals - Workspaces & Items
const QUESTIONS = [
  {
    "num": 1,
    "question": "What is the maximum number of items that can be created in a single Microsoft Fabric workspace?",
    "options": ["A. 100", "B. 500", "C. 1,000", "D. Unlimited"],
    "answer": "D",
    "explanation": "Microsoft Fabric workspaces support unlimited items within capacity limits. However, there are practical limits based on your Fabric capacity (F2 to F64) and performance considerations."
  },
  {
    "num": 2,
    "question": "You need to organize items in a workspace for a data analytics project. Which Fabric item type should you use to store SQL code for data transformation?",
    "options": ["A. Notebook", "B. Warehouse", "C. Data Pipeline", "D. KQL Queryset"],
    "answer": "C",
    "explanation": "Data Pipelines in Fabric can store and execute SQL code as part of data transformation activities. Notebooks are for interactive code development, Warehouses are for database storage, and KQL Querysets are for Kusto Query Language queries."
  },
  {
    "num": 3,
    "question": "Which Fabric capacity tier is most suitable for a development team of 10 users working on small projects?",
    "options": ["A. F2", "B. F8", "C. F32", "D. F64"],
    "answer": "A",
    "explanation": "F2 is the entry-level Fabric capacity suitable for small teams and development work. It provides limited resources but is cost-effective for development and testing."
  },
  {
    "num": 4,
    "question": "You want to prevent accidental deletion of critical items in your workspace. Which feature should you use?",
    "options": ["A. OneLake integration", "B. Item protection", "C. Workspace locking", "D. Recovery services"],
    "answer": "B",
    "explanation": "Item protection in Fabric allows you to lock important items to prevent accidental deletion or modification. This is particularly useful for production artifacts and shared models."
  },
  {
    "num": 5,
    "question": "How do you move an item from one workspace to another in Microsoft Fabric?",
    "options": ["A. Copy and paste", "B. Use the Move option in item settings", "C. Export and import", "D. You cannot move items between workspaces"],
    "answer": "D",
    "explanation": "Currently, you cannot directly move items between workspaces in Fabric. You need to export the item (if supported) and import it to the new workspace, or recreate it. This is a known limitation of the current Fabric architecture."
  }
];
