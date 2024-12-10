#!/bin/bash
sed -i '' 's|^INPUT *=.*|INPUT = stochtree-repo/include/stochtree|' stochtree-repo/cpp_docs/Doxyfile
sed -i '' 's|^RECURSIVE *= NO|RECURSIVE = YES|' stochtree-repo/cpp_docs/Doxyfile
sed -i '' 's|^GENERATE_XML *= NO|GENERATE_XML = YES|' stochtree-repo/cpp_docs/Doxyfile
sed -i '' 's|^XML_OUTPUT *= xml|XML_OUTPUT = doxygen_xml|' stochtree-repo/cpp_docs/Doxyfile
sed -i '' 's|^OUTPUT_DIRECTORY *=.*|OUTPUT_DIRECTORY = doxygen_output|' stochtree-repo/cpp_docs/Doxyfile
sed -i '' 's|^PROJECT_NAME *=.*|PROJECT_NAME = "stochtree"|' stochtree-repo/cpp_docs/Doxyfile
sed -i '' 's|^GENERATE_HTML *= YES|GENERATE_HTML = NO|' stochtree-repo/cpp_docs/Doxyfile

doxygen stochtree-repo/cpp_docs/Doxyfile
mkdir -p docs/c-documentation-markdown
moxygen doxygen_output/doxygen_xml -o docs/c-documentation-markdown/combined.md

cat > splitMarkdown.js << 'END_SCRIPT'
const fs = require('fs');
const path = require('path');

const inputFile = 'docs/c-documentation-markdown/combined.md';
const outputDir = 'docs/c-documentation-markdown';

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
END_SCRIPT

node splitMarkdown.js

rm docs/c-documentation-markdown/combined.md

yarn build
