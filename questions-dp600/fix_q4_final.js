const fs = require('fs');
let content = fs.readFileSync('questions_4.js', 'utf8');

// Fix " explanation" -> "explanation"
content = content.replace(/", " explanation": "/g, '", "explanation": "');

// Add missing { before "num": 25
content = content.replace(/\n  "num": 25, /g, '\n  {"num": 25, ');

// Fix all malformed options in options array
content = content.replace(/"options": \[([^\]]+)\]/g, (match, opts) => {
  // Fix "B", word patterns -> "B. word
  opts = opts.replace(/", "([A-D])", ([a-zA-Z])/g, '", "$1. $2');
  opts = opts.replace(/", "([a-d])", ([a-zA-Z])/g, '", "$1. $2');
  // Fix "A", at end -> "A.
  opts = opts.replace(/", "([A-D])", /g, '", "$1. ');
  opts = opts.replace(/", "([a-d])", /g, '", "$1. ');
  // Fix extra quote after period: "B. "TEXT -> "B. TEXT
  opts = opts.replace(/\. "([A-Z])/g, '. $1');
  opts = opts.replace(/\. "([a-z])/g, '. $1');
  // Fix "options": ["a", -> "options": ["A.
  opts = opts.replace('"options": ["a",', '"options": ["A.,');
  opts = opts.replace('"options": ["b",', '"options": ["B.,');
  opts = opts.replace('"options": ["c",', '"options": ["C.,');
  opts = opts.replace('"options": ["d",', '"options": ["D.,');
  return '"options": [' + opts + ']';
});

// Add missing closing }, after explanation before next line
content = content.replace(/("explanation": "[^"]+\.")\n  \{"num":/g, '$1,\n  {"num":');

fs.writeFileSync('questions_4.js', content);
console.log('Fixed questions_4.js');
