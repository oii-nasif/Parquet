const fs = require('fs');
let content = fs.readFileSync('questions_4.js', 'utf8');

// Fix " explanation" -> "explanation"
content = content.replace(/", " explanation": "/g, '", "explanation": "');

// Add missing { before "num": 25
content = content.replace(/\n  "num": 25, /g, '\n  {"num": 25, ');

// Fix options patterns - run multiple times to catch all variations
for (let i = 0; i < 3; i++) {
  content = content.replace(/"options": \[([^\]]+)\]/g, (match, opts) => {
    opts = opts.replace(/", "([A-D])", /g, '", "$1. ');
    opts = opts.replace(/", "([a-d])", /g, '", "$1. ');
    return '"options": [' + opts + ']';
  });
}

// Add missing closing }, after explanation before next {
content = content.replace(/("explanation": "[^"]+\.")\n  \{"num":/g, '$1,\n  {"num":');

fs.writeFileSync('questions_4.js', content);
console.log('Fixed questions_4.js');
