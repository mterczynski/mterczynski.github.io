const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const { readdirSync } = require("fs");

// const getDirectories = (source) =>
//   readdirSync(source, { withFileTypes: true })
//     .filter((dirent) => dirent.isDirectory())
//     .map((dirent) => dirent.name);

// const excludedDirectories = [".git", "assets", "node_modules"];
// const directories = getDirectories(__dirname).filter(
//   (dir) => !excludedDirectories.includes(dir)
// );

// Base URL and URL paths
const baseURL = "https://www.mter.pl";
const urls = [
  `${baseURL}/blog`,
  `${baseURL}/chess/build/client`,
  `${baseURL}/joi-schema-generator`,
  `${baseURL}/kulki`,
  `${baseURL}/level-editor`,
  `${baseURL}/mine-sweeper`,
  `${baseURL}/paint`,
  `${baseURL}/pattern-generators`,
  `${baseURL}/sensors`,
  `${baseURL}/snake`,
  `${baseURL}/space-golf-3d`,
  `${baseURL}/sudoku-solver`,
  `${baseURL}/tetris`,
  `${baseURL}/tic-tac-toe`,
  `${baseURL}/typescript-webpack-threejs-template`,
];

scrapeUrls(urls)
  .then((results) => {
    console.warn("Warnings:", results.warnings);
    console.error("Errors:", results.errors);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

/**
 * Scrapes URLs for errors and warnings, including console warnings and errors.
 * Throws an error if any critical errors are found in the URLs.
 * @param {Array<string>} urls - List of URLs to scrape.
 * @returns {Promise<Object>} - Returns a summary of warnings and errors per URL.
 */
async function scrapeUrls(urls) {
  const results = {
    warnings: {},
    errors: {},
  };

  const browser = await puppeteer.launch();

  for (const url of urls) {
    const urlWarnings = [];
    const urlErrors = [];

    try {
      // Fetch HTML and check for specific HTML tag-based warnings and errors
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);

      // Warning: Missing <meta> description tag
      if ($('meta[name="description"]').length === 0) {
        urlWarnings.push("Missing <meta> description tag");
      }

      // Warning: Missing <meta> keywords tag
      if ($('meta[name="keywords"]').length === 0) {
        urlWarnings.push("Missing <meta> keywords tag");
      }

      // Error: Missing <title> tag
      if ($("title").length === 0) {
        urlErrors.push("Missing <title> tag");
      }

      // Launch Puppeteer to check for console warnings and errors
      const page = await browser.newPage();

      // Listen for console events
      page.on("console", (msg) => {
        const messageText = msg.text();
        if (msg.type() === "warning") {
          urlWarnings.push(`Console warning: ${messageText}`);
        } else if (msg.type() === "error") {
          urlErrors.push(`Console error: ${messageText}`);
        }
      });

      await page.goto(url, { waitUntil: "load" });
      await page.close();

      // Store results in the results object
      if (urlWarnings.length > 0) {
        results.warnings[url] = urlWarnings;
      }

      if (urlErrors.length > 0) {
        results.errors[url] = urlErrors;
      }
    } catch (error) {
      // Catch network or other axios-related errors
      urlErrors.push(`Failed to load URL: ${error.message}`);
      results.errors[url] = urlErrors;
    }
  }

  await browser.close();

  return results;
}
