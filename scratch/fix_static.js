import fs from 'fs';
import path from 'path';

function traverseAndFix(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseAndFix(fullPath);
    } else if (file === 'page.tsx') {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // If it already has setRequestLocale, skip
      if (content.includes('setRequestLocale')) continue;

      // Make sure the component receives props and we can extract locale
      // This is a naive regex matching export default function Page(...)
      const componentRegex = /export\s+default\s+(?:async\s+)?function\s+(\w+)\s*\(([^)]*)\)\s*\{/;
      const match = content.match(componentRegex);
      if (match) {
        let signature = match[2];
        let newContent = content;

        // Add import
        newContent = `import { setRequestLocale } from "next-intl/server";\n` + newContent;

        // Ensure params is in signature
        if (!signature.includes('params')) {
          if (signature.trim() === '') {
            newContent = newContent.replace(
              componentRegex, 
              `export default async function $1({ params }: { params: Promise<{ locale: string }> }) {`
            );
          } else {
            // Already has some props, we just append or destructure params (this is fragile, but most pages either have no props or { params })
            // If it has { params }, we are fine. But if it doesn't have params, we might break it. 
            // Most of our pages have no props.
          }
        }

        // Add setRequestLocale
        const bodyStart = newContent.indexOf('{', newContent.indexOf(match[0])) + 1;
        
        let injectStr = `\n  const p = await params;\n  setRequestLocale(p.locale);\n`;
        // if it already destructured params, we might need a different approach.
        // Let's just do a simple replace for pages with no props
        if (signature.trim() === '') {
             newContent = newContent.replace(
              componentRegex, 
              `export default async function $1({ params }: { params: Promise<{ locale: string }> }) {\n  const p = await params;\n  setRequestLocale(p.locale);\n`
            );
        } else if (signature.includes('params')) {
             newContent = newContent.replace(
              componentRegex, 
              `export default async function $1(props: any) {\n  const params = await props.params;\n  setRequestLocale(params.locale);\n`
            );
        }

        fs.writeFileSync(fullPath, newContent);
      }
    }
  }
}

traverseAndFix('c:/Users/agusf/Dev/AlleeFrance/app/[locale]');
console.log('Fixed pages for static export!');
