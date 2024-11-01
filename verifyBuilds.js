const axios = require('axios');
const cheerio = require('cheerio');
const {readdirSync} = require('fs');

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)


const excludedDirectories = ['.git', 'assets', 'node_modules'];
const directories = getDirectories(__dirname).filter(dir => !excludedDirectories.includes(dir));

// console.log(directories)

// todo - uncomment after moving /chess/build/client to /chess?
// const urls  = directories.map(dir => `https://www.mter.pl/${dir}`) [
//     'https://example.com',
//     'https://nonexistentwebsite.xyz'
// ];

const baseURL = 'https://www.mter.pl';

const urls = [
    // `${baseURL}/assets`,
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
]

console.log('Verifying:', urls)

scrapeUrls(urls)
    .then(results => {
        console.log('Warnings:', results.warnings);
        console.log('Errors:', results.errors);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

/**
 * Scrapes URLs for errors and warnings.
 * Throws an error if any critical errors are found in the URLs.
 * @param {Array<string>} urls - List of URLs to scrape.
 * @returns {Promise<Object>} - Returns a summary of warnings and errors per URL.
 */
async function scrapeUrls(urls) {
    const results = {
        warnings: {},
        errors: {}
    };

    for (const url of urls) {
        try {
            const response = await axios.get(url);
            const $ = cheerio.load(response.data);

            // Check for warnings and errors
            const urlWarnings = [];
            const urlErrors = [];

            // Warning: <script> tags in the <head> section
            // if ($('head script').length > 0) {
            //     urlWarnings.push('Contains <script> tags in the <head> section');
            // }

            // Warning: Page loads without any <meta> description tag
            if ($('meta[name="description"]').length === 0) {
                urlWarnings.push('Missing <meta> description tag');
            }

            // Warning: Page loads without any <meta> description tag
            if ($('meta[name="keywords"]').length === 0) {
                urlWarnings.push('Missing <meta> keywords tag');
            }

            // Error: Missing <title> tag
            if ($('title').length === 0) {
                urlErrors.push('Missing <title> tag');
            }

            // Error: Missing <h1> tag
            // if ($('h1').length === 0) {
            //     urlErrors.push('Missing <h1> tag');
            // }

            // Store results in results object
            if (urlWarnings.length > 0) {
                results.warnings[url] = urlWarnings;
            }
            if (urlErrors.length > 0) {
                results.errors[url] = urlErrors;
            }

        } catch (error) {
            // Catch network or other axios-related errors
            results.errors[url] = [`Failed to load URL: ${error.message}`];
        }
    }

    // If there are any errors, throw an exception
    if (Object.keys(results.errors).length > 0) {
        throw new Error(`Errors detected in URLs: ${JSON.stringify(results.errors, null, 2)}`);
    }

    return results;
}

