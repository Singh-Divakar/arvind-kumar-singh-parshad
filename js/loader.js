/* ==========================================================
   PORTFOLIO WEBSITE — Section Loader
   loader.js
   ----------------------------------------------------------
   Responsibility:
   - Fetches each HTML file from /sections/ in parallel
   - Injects each file into its matching <div data-section="..."></div>
   - Then loads js/main.js to boot animations & interactivity

   To add a new section:
   1. Create a new file: sections/<name>.html
   2. Add a <div data-section="<name>"></div> in index.html
   3. Add "<name>" to the SECTIONS array below (in display order)
   ========================================================== */

const SECTIONS = [
  'header',
  'hero',
  'impact-strip',
  'about',
  'achievements',
  'ongoing',
  'vision',
  'queries',
  'trust',
  'message',
  'contact',
  'footer'
];

(async function loadAllSections() {
  try {
    // Fetch all sections in parallel
    const results = await Promise.all(
      SECTIONS.map(name =>
        fetch(`sections/${name}.html`)
          .then(res => {
            if (!res.ok) throw new Error(`Failed to load ${name}.html (${res.status})`);
            return res.text();
          })
      )
    );

    // Inject each section into its placeholder
    SECTIONS.forEach((name, i) => {
      const slot = document.querySelector(`[data-section="${name}"]`);
      if (slot) {
        slot.innerHTML = results[i];
      } else {
        console.warn(`No placeholder found for section "${name}"`);
      }
    });

    // All sections in place — now load main.js to initialize interactivity
    const mainScript = document.createElement('script');
    mainScript.src = 'js/main.js';
    mainScript.defer = false;
    document.body.appendChild(mainScript);

  } catch (err) {
    console.error('Section loader failed:', err);
    document.body.insertAdjacentHTML(
      'afterbegin',
      `<div style="padding:2rem;background:#fff3cd;color:#856404;text-align:center;font-family:sans-serif;">
         <strong>Unable to load page sections.</strong><br/>
         If you opened this file directly (file://), please run a local server instead:<br/>
         <code>python -m http.server 8000</code>  &nbsp;or&nbsp;  <code>npx serve</code>
       </div>`
    );
  }
})();
