const fs = require('fs');
const path = require('path');

const names = {
  es: {
    global: "Latinoamérica",
    ar: "Argentina",
    cl: "Chile",
    uy: "Uruguay",
    mx: "México",
    ec: "Ecuador",
    co: "Colombia",
    pe: "Perú"
  },
  en: {
    global: "Latin America",
    ar: "Argentina",
    cl: "Chile",
    uy: "Uruguay",
    mx: "Mexico",
    ec: "Ecuador",
    co: "Colombia",
    pe: "Peru"
  },
  fr: {
    global: "Amérique Latine",
    ar: "Argentine",
    cl: "Chili",
    uy: "Uruguay",
    mx: "Mexique",
    ec: "Équateur",
    co: "Colombie",
    pe: "Pérou"
  }
};

const langs = ['es', 'en', 'fr'];

langs.forEach(lang => {
  const filePath = path.join(__dirname, '..', 'messages', `${lang}.json`);
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  
  const data = JSON.parse(content);
  
  if (data.WorkingHolidayCountries) {
    for (const [code, name] of Object.entries(names[lang])) {
      if (data.WorkingHolidayCountries[code]) {
        data.WorkingHolidayCountries[code].name = name;
      } else {
        data.WorkingHolidayCountries[code] = { name };
      }
    }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated ${lang}.json`);
});
