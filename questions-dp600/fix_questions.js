const fs = require('fs');
let content = fs.readFileSync('questions_4.js', 'utf8');

// Fix " explanation" -> "explanation"
content = content.replace(/", " explanation": "/g, '", "explanation": "');

// Fix missing opening brace on line that starts with "num": 25
content = content.replace(/\n  "num": 25, /g, '\n  {"num": 25, ');

// Fix options format - match patterns like "B", HASH or "C", "VALIDATE
content = content.replace(/"options": \[([^\]]+)\]/g, (match, options) => {
  // Fix each option
  let fixed = options
    .replace(/", "([A-D])", ([\w])/g, '", "$1. $2')
    .replace(/", "([a-d])", ([\w])/g, '", "$1. $2')
    .replace(/", "([A-D])", /g, '", "$1. ')
    .replace(/", "([a-d]), /g, '", "$1. ')
    .replace(/"([a-d]), /g, '"$1. ')
    .replace(/"A", /g, '"A. ');
  return '"options": [' + fixed + ']';
});

// Fix lowercase "b", "c", "d" -> "B", "C", "D" at start of options
content = content.replace(/"options": \["(a)", /g, '"options": ["A", ');
content = content.replace(/"options": \["(b)", /g, '"options": ["B", ');
content = content.replace(/"options": \["(c)", /g, '"options": ["C", ');
content = content.replace(/"options": \["(d)", /g, '"options": ["D", ');

fs.writeFileSync('questions_4.js', content);
console.log('Fixed questions_4.js');
