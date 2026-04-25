import re

files_to_fix = ['questions_1.js', 'questions_4.js', 'questions_8.js',
               'questions_9.js', 'questions_10.js', 'questions_11.js',
               'questions_12.js', 'questions_13.js']

for filename in files_to_fix:
    with open(filename, 'r') as f:
        content = f.read()

    # Fix " explanation" -> "explanation"
    content = content.replace('", " explanation": "', '", "explanation": "')

    # Fix missing closing braces - find lines ending with period before newline
    # Pattern: explanation ends with "." but no "},
    lines = content.split('\n')
    for i in range(len(lines)):
        line = lines[i]
        # Check if this is an explanation line ending with just a period
        if re.search(r'"explanation": "[^"]+\."\s*$', line):
            # Check if next line starts with {"num" - meaning we're missing },
            if i + 1 < len(lines) and lines[i + 1].strip().startswith('{"num"'):
                lines[i] = line.rstrip() + '},'
        # Also check for lines ending with "," instead of "},
        elif re.search(r'",\s*$', line) and 'explanation' in line:
            if i + 1 < len(lines) and lines[i + 1].strip().startswith('{"num"'):
                lines[i] = line.rstrip().rstrip(',') + '},'

    content = '\n'.join(lines)

    with open(filename, 'w') as f:
        f.write(content)

    print(f'Fixed {filename}')
