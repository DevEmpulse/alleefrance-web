import fs from 'fs';

const pages = [
  "C:/Users/agusf/Dev/AlleeFrance/app/[locale]/blog/page.tsx",
  "C:/Users/agusf/Dev/AlleeFrance/app/[locale]/blog/aprender-frances-recursos/page.tsx",
  "C:/Users/agusf/Dev/AlleeFrance/app/[locale]/blog/bancos-fisicos-vs-virtuales-francia/page.tsx",
  "C:/Users/agusf/Dev/AlleeFrance/app/[locale]/blog/esim-guia-latinoamericanos-francia/page.tsx",
  "C:/Users/agusf/Dev/AlleeFrance/app/[locale]/blog/visa-estudiante-francia/page.tsx",
  "C:/Users/agusf/Dev/AlleeFrance/app/[locale]/blog/visa-saisonier-salarie/page.tsx",
  "C:/Users/agusf/Dev/AlleeFrance/app/[locale]/blog/working-holiday-francia/page.tsx",
  "C:/Users/agusf/Dev/AlleeFrance/app/[locale]/politica-de-privacidad/page.tsx",
  "C:/Users/agusf/Dev/AlleeFrance/app/[locale]/servicios/page.tsx",
  "C:/Users/agusf/Dev/AlleeFrance/app/[locale]/servicios/titre-de-sejour/page.tsx",
  "C:/Users/agusf/Dev/AlleeFrance/app/[locale]/servicios/visa-etudiant/page.tsx",
  "C:/Users/agusf/Dev/AlleeFrance/app/[locale]/servicios/visas-trabajo/page.tsx",
  "C:/Users/agusf/Dev/AlleeFrance/app/[locale]/terminos-y-condiciones/page.tsx",
  "C:/Users/agusf/Dev/AlleeFrance/app/[locale]/working-holiday/page.tsx",
  "C:/Users/agusf/Dev/AlleeFrance/app/[locale]/working-holiday/[country]/page.tsx"
];

for (const p of pages) {
  let content = fs.readFileSync(p, 'utf8');
  if (content.includes('setRequestLocale')) continue;

  let newContent = `import { setRequestLocale } from "next-intl/server";\n` + content;
  
  // If the page already has params (like working-holiday/[country]/page.tsx)
  if (newContent.includes('params: Promise<')) {
    // We just find where the function body starts and inject
    newContent = newContent.replace(
      /export default async function (\w+)\(\s*\{\s*params(?:[^)]*)\}\s*\)\s*\{/,
      `export default async function $1({ params }: any) {\n  const p = await params;\n  setRequestLocale(p.locale);\n`
    );
  } else {
    // Page with no params
    newContent = newContent.replace(
      /export default (?:async )?function (\w+)\(\)\s*\{/,
      `export default async function $1({ params }: { params: Promise<{ locale: string }> }) {\n  const p = await params;\n  setRequestLocale(p.locale);\n`
    );
  }
  
  fs.writeFileSync(p, newContent);
  console.log('Fixed', p);
}
