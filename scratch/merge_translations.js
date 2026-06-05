const fs = require('fs');
const path = require('path');

const [,, locale, key, jsonFilePath] = process.argv;
if (!locale || !key || !jsonFilePath) {
  console.error("Usage: node merge_translations.js <locale> <key> <path_to_json_to_merge>");
  process.exit(1);
}

const targetPath = path.join(__dirname, `../messages/${locale}.json`);
const targetData = JSON.parse(fs.readFileSync(targetPath, 'utf8'));

const mergeData = JSON.parse(fs.readFileSync(path.resolve(jsonFilePath), 'utf8'));

targetData[key] = mergeData;

fs.writeFileSync(targetPath, JSON.stringify(targetData, null, 2), 'utf8');
console.log(`Successfully merged ${key} into ${locale}.json!`);
