const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'messages', 'fr.json');
let content = fs.readFileSync(filePath, 'utf8');

// Remove BOM if present
if (content.charCodeAt(0) === 0xFEFF) {
  content = content.slice(1);
}

// The issue: the PowerShell TrimEnd of "}\ " ate the closing braces of the nested structure.
// The content now looks like:
//   ...        "quotaFallback": "Quota officiel"
// ,
//   "WorkingHolidayCountries": { ...
// 
// We need to insert the 3 closing braces before the comma+new namespace

// Find the exact broken junction and fix it
const brokenPattern = '"        \\"quotaFallback\\": \\"Quota officiel\\""\n","';
const fixedPattern = '"        \\"quotaFallback\\": \\"Quota officiel\\""\n"      }"\n"    }"\n"  }"\n","';

// Actually let's try a different approach: find by actual chars
// Lines 2584-2586 look like:
//   "        \"quotaFallback\": \"Quota officiel\""    <- line 2584 (missing closing })
// ","                                                  <- line 2585  
//   "WorkingHolidayCountries": {                       <- line 2586

// Let's just replace the specific text
const lines = content.split('\n');
console.log('Total lines:', lines.length);

const idx = lines.findIndex(l => l.includes('"WorkingHolidayCountries": {'));
if (idx > -1) {
  console.log('Found WorkingHolidayCountries at line:', idx + 1);
  if (lines[idx - 1].trim() === ',') {
    console.log('Found comma right before it.');
    if (lines[idx - 2].includes('quotaFallback')) {
      console.log('Found quotaFallback right before the comma. We need to insert closing braces.');
      lines.splice(idx - 1, 0, '      }', '    }', '  }');
      console.log('Inserted braces.');
    } else {
      console.log('Unexpected line before comma:', lines[idx - 2]);
    }
  } else {
    console.log('Unexpected line before WorkingHolidayCountries:', lines[idx - 1]);
  }
} else {
  console.log('WorkingHolidayCountries not found');
}

const fixed = lines.join('\n');
try {
  JSON.parse(fixed);
  console.log('JSON is VALID after fix!');
  fs.writeFileSync(filePath, fixed, 'utf8');
  console.log('File written successfully');
} catch(e) {
  console.log('Still invalid:', e.message);
}
