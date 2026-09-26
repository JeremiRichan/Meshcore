// export-pdf.js
// Génère un PDF fidèle au design exact du site (couleurs, fond, graphiques inclus)
// à partir du site lancé en local (npm run dev).
//
// Usage :
//   1. npm install puppeteer   (dans le dossier apps/web, une seule fois)
//   2. Laisser "npm run dev" tourner dans un autre terminal (http://localhost:3000)
//   3. node export-pdf.js

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost:3000';

// Ajoute ici toutes les routes de ton site que tu veux exporter
const PAGES = [
  { path: '/', name: 'home' },
  { path: '/blog', name: 'blog' },
  { path: '/docs', name: 'docs' },
  { path: '/flasher', name: 'flasher' },
  { path: '/map', name: 'map' },
  { path: '/merch', name: 'merch' },
];

const OUTPUT_DIR = path.join(__dirname, 'pdf-export');

async function run() {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  // Viewport large pour un rendu desktop fidèle
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  for (const { path: routePath, name } of PAGES) {
    const url = BASE_URL + routePath;
    console.log(`→ Chargement de ${url}`);

    try {
      // networkidle2 (au lieu de networkidle0) : plus tolérant, car le
      // serveur de dev Vite garde une connexion websocket ouverte en
      // permanence (HMR), ce qui empêche networkidle0 de se déclencher.
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 });
    } catch (err) {
      console.warn(`  ⚠ Timeout de navigation sur ${url}, on continue quand même avec le contenu déjà chargé.`);
    }

    try {
      // IMPORTANT : garde le rendu "écran" (couleurs, fonds) plutôt que
      // le mode "print" du navigateur qui enlève souvent les fonds sombres.
      await page.emulateMediaType('screen');

      // Laisse le temps aux animations d'entrée et aux graphiques (recharts)
      // de finir de se dessiner. On fait DEUX passages de scroll lent, car
      // les animations "au scroll" (framer-motion, etc.) ont besoin que
      // chaque section reste visible un moment pour se terminer.
      await autoScroll(page);
      await new Promise((r) => setTimeout(r, 2500)); // laisse finir tout ce qui est en cours en bas de page

      await page.evaluate(() => window.scrollTo(0, 0));
      await new Promise((r) => setTimeout(r, 1500));

      // Second passage, plus lent, pour rattraper toute section qui n'aurait
      // pas fini son animation lors du premier passage.
      await autoScroll(page);
      await new Promise((r) => setTimeout(r, 2500));

      await page.evaluate(() => window.scrollTo(0, 0));
      await new Promise((r) => setTimeout(r, 2000)); // pause finale avant capture

      const outFile = path.join(OUTPUT_DIR, `${name}.pdf`);

      await page.pdf({
        path: outFile,
        printBackground: true,        // conserve fonds sombres + couleurs
        preferCSSPageSize: false,
        width: '1440px',              // garde la largeur desktop du site
        height: '900px',
        pageRanges: '',                // toutes les pages nécessaires (contenu long)
        margin: { top: 0, bottom: 0, left: 0, right: 0 },
      });

      console.log(`✓ ${outFile}`);
    } catch (err) {
      console.error(`  ✗ Échec sur ${url} : ${err.message}`);
    }
  }

  await browser.close();
  console.log('\nTerminé. PDFs générés dans ./pdf-export/');
}

// Fait défiler la page entière pour déclencher les animations/graphiques
// qui ne se chargent qu'au scroll (fréquent avec framer-motion).
async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 150; // pas plus petit = déclenche mieux les animations "au scroll"
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 350); // pause plus longue entre chaque pas = laisse le temps à l'animation de finir
    });
  });
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
