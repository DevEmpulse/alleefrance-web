import fs from 'fs';
import path from 'path';

const paramStr = `export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}`;

function traverseAndFix(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseAndFix(fullPath);
    } else if (file === 'page.tsx' || file === 'layout.tsx') {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (!content.includes('generateStaticParams')) {
        // Find last import
        const lines = content.split('\n');
        let lastImportIndex = -1;
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].startsWith('import ')) {
            lastImportIndex = i;
          }
        }
        
        // Ensure "routing" is not already imported
        let importRoutingStr = '';
        if (content.includes('routing.locales')) {
           // We might need to import it, but the paramStr above is hardcoded to avoid needing the import!
        }
        
        lines.splice(lastImportIndex + 1, 0, '\n' + paramStr + '\n');
        fs.writeFileSync(fullPath, lines.join('\n'));
        console.log('Added to', fullPath);
      }
    }
  }
}

traverseAndFix('c:/Users/agusf/Dev/AlleeFrance/app/[locale]');
console.log('Done!');
