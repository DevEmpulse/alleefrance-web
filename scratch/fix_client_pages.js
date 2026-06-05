import fs from 'fs';

const pages = [
  "C:/Users/agusf/Dev/AlleeFrance/app/[locale]/blog/bancos-fisicos-vs-virtuales-francia/page.tsx",
  "C:/Users/agusf/Dev/AlleeFrance/app/[locale]/blog/esim-guia-latinoamericanos-francia/page.tsx",
  "C:/Users/agusf/Dev/AlleeFrance/app/[locale]/blog/working-holiday-francia/page.tsx",
  "C:/Users/agusf/Dev/AlleeFrance/app/[locale]/servicios/visa-etudiant/page.tsx",
  "C:/Users/agusf/Dev/AlleeFrance/app/[locale]/servicios/visas-trabajo/page.tsx",
];

for (const p of pages) {
  let content = fs.readFileSync(p, 'utf8');
  
  // Remove import
  content = content.replace(/import\s+\{\s*setRequestLocale\s*\}\s+from\s+"next-intl\/server";\r?\n/, '');
  
  // Remove setRequestLocale call
  content = content.replace(/const\s+p\s*=\s*await\s+params;\r?\n\s*setRequestLocale\(p\.locale\);\r?\n/, '');
  
  fs.writeFileSync(p, content);
  console.log('Cleaned', p);
}
