const fs = require('fs');
const path = require('path');

// 1. Parse data/faqs.ts
const faqsCode = fs.readFileSync(path.join(__dirname, '../data/faqs.ts'), 'utf8');
const cleanFaqsCode = faqsCode
  .replace(/import type \{.*\} from .*/g, '')
  .replace(/: FAQItem\[\]/g, '')
  .replace(/: string\[\]/g, '')
  .replace(/export const ALL_FAQS =/, 'const ALL_FAQS =')
  .replace(/export const getFaqsByCategories =.*/gs, '')
  + '\nmodule.exports = { ALL_FAQS };';

const tempFaqsPath = path.join(__dirname, 'temp_faqs.js');
fs.writeFileSync(tempFaqsPath, cleanFaqsCode, 'utf8');
const { ALL_FAQS } = require(tempFaqsPath);
fs.unlinkSync(tempFaqsPath);

// 2. Parse app/[locale]/servicios/titre-de-sejour/page.tsx FAQs
const tdsCode = fs.readFileSync(path.join(__dirname, '../app/[locale]/servicios/titre-de-sejour/page.tsx'), 'utf8');
// Extract the titreDeSejourFaqs array
const tdsMatch = tdsCode.match(/const titreDeSejourFaqs: FAQItem\[\] = \[\s*([\s\S]*?)\n\];/);
if (!tdsMatch) {
  console.error("Could not find titreDeSejourFaqs in page.tsx");
  process.exit(1);
}
const tdsArrayCode = `const titreDeSejourFaqs = [\n${tdsMatch[1]}\n];\nmodule.exports = { titreDeSejourFaqs };`;
const tempTdsPath = path.join(__dirname, 'temp_tds.js');
fs.writeFileSync(tempTdsPath, tdsArrayCode, 'utf8');
const { titreDeSejourFaqs } = require(tempTdsPath);
fs.unlinkSync(tempTdsPath);

// 3. Load and update messages/es.json
const esPath = path.join(__dirname, '../messages/es.json');
const esData = JSON.parse(fs.readFileSync(esPath, 'utf8'));

esData.FAQData = {
  items: ALL_FAQS,
  titreDeSejour: titreDeSejourFaqs
};

fs.writeFileSync(esPath, JSON.stringify(esData, null, 2), 'utf8');
console.log('Successfully extracted FAQs to messages/es.json under FAQData!');
