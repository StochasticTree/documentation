const fs = require('fs');
const path = require('path');

const inputFile = 'docs/cpp-documentation-markdown/combined.md';
const outputDir = 'docs/cpp-documentation-markdown';

if (!fs.existsSync(inputFile)) {
console.error(`Input file ${inputFile} does not exist.`);
process.exit(1);
}

const data = fs.readFileSync(inputFile, 'utf8');

// Split the file on level 1 headers (e.g., "# ClassName")
const sections = data.split(/^# /gm).filter(section => section.trim() !== '');

sections.forEach(section => {
// Get the title of the section
const lines = section.split('\n');
const title = lines[0].trim();
const content = lines.slice(1).join('\n');

// Sanitize the title to create a filename
const filename = title.replace(/[<>:"\/\\|?*]/g, '').replace(/\s+/g, '_') + '.md';
const filepath = path.join(outputDir, filename);

// Write the section to a file with front matter
const frontMatter = `---\n` +
                    `title: ${title}\n` +
                    `---\n\n`;
fs.writeFileSync(filepath, frontMatter + `# ${title}\n${content}`, 'utf8');
});
