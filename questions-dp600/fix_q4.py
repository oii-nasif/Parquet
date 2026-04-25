with open('questions_4.js', 'r') as f:
    lines = f.readlines()

# Fix each line
fixed_lines = []
for line in lines:
    # Fix " explanation" -> "explanation"
    line = line.replace('", " explanation": "', '", "explanation": "')
    # Fix missing opening brace
    line = line.replace('\n  "num": 25, ', '\n  {"num": 25, ')
    # Fix options patterns like "B", HASH -> "B. HASH
    line = line.replace('", "B", ', '", "B. ')
    line = line.replace('", "C", ', '", "C. ')
    line = line.replace('", "D", ', '", "D. ')
    line = line.replace('", "b", ', '", "B. ')
    line = line.replace('", "c", ', '", "C. ')
    line = line.replace('", "d", ', '", "D. ')
    # Fix patterns like "A", at start of options
    line = line.replace('"options": ["a",', '"options": ["A.",')
    line = line.replace('"options": ["b",', '"options": ["B.",')
    line = line.replace('"options": ["c",', '"options": ["C.",')
    line = line.replace('"options": ["d",', '"options": ["D.",')
    # Fix patterns like "B", "HASH or "C", "VALIDATE
    line = line.replace('", "B", "', '", "B. "')
    line = line.replace('", "C", "', '", "C. "')
    line = line.replace('", "D", "', '", "D. "')
    fixed_lines.append(line)

with open('questions_4.js', 'w') as f:
    f.writelines(fixed_lines)

print('Fixed questions_4.js')
