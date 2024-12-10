# Building the Doc Site Locally

## MacOS

### Dependency installation

Install nodejs and doxygen at the command line via [homebrew](https://brew.sh).

```{bash}
brew install doxygen
brew install node@22
```

Check that the installation worked correctly with

```{bash}
node -v
npm -v
```

which should display "`v22.11.0`" and "`10.9.0`" at the command line.

Now, install [`moxygen`](https://github.com/sourcey/moxygen) via `npm`:

```{bash}
npm install moxygen -g
```

### Building the C++ docs

Navigate to the `documentation` repo in your terminal (*replace `~/path/to/documentation` with the path to the documentation repo on your local system*).

```{bash}
cd ~/path/to/documentation
```

Now, recursively clone the main `stochtree` repo into a `stochtree-repo` subfolder of the `documentation` repo

```{bash}
git clone --recursive git@github.com:StochasticTree/stochtree.git stochtree-repo
```

**To redo this step, remove the repo and then re-run the recursive clone above**

```{bash}
rm -rf stochtree-repo
```

Update the Doxygen file in the `cpp_docs` subfolder (*note that the default `sed` utility available on MacOS requires an argument to the `-i` flag, unlike on many linux systems. See [here](https://stackoverflow.com/questions/28592043/what-is-wrong-with-my-string-substitution-using-sed-on-mac-os-x) for more detail*)

```{bash}
sed -i '' 's|^INPUT *=.*|INPUT = stochtree-repo/include/stochtree|' stochtree-repo/cpp_docs/Doxyfile
sed -i '' 's|^RECURSIVE *= NO|RECURSIVE = YES|' stochtree-repo/cpp_docs/Doxyfile
sed -i '' 's|^GENERATE_XML *= NO|GENERATE_XML = YES|' stochtree-repo/cpp_docs/Doxyfile
sed -i '' 's|^XML_OUTPUT *= xml|XML_OUTPUT = doxygen_xml|' stochtree-repo/cpp_docs/Doxyfile
sed -i '' 's|^OUTPUT_DIRECTORY *=.*|OUTPUT_DIRECTORY = doxygen_output|' stochtree-repo/cpp_docs/Doxyfile
sed -i '' 's|^PROJECT_NAME *=.*|PROJECT_NAME = "stochtree"|' stochtree-repo/cpp_docs/Doxyfile
sed -i '' 's|^GENERATE_HTML *= YES|GENERATE_HTML = NO|' stochtree-repo/cpp_docs/Doxyfile
```

Now, build the C++ docs, into the `doxygen_output/doxygen_xml` subfolder of the `documentation` repo

```{bash}
doxygen stochtree-repo/cpp_docs/Doxyfile
```

Convert the XML doxygen output to markdown using `moxygen`

```{bash}
mkdir -p docs/c-documentation-markdown
moxygen doxygen_output/doxygen_xml -o docs/c-documentation-markdown/combined.md
```

This generates a single "combined" markdown file, which can then be split into separate pages via javascript

```{bash}
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
```

Execute this script using [node](https://nodejs.org/)

```{bash}
node splitMarkdown.js
```

Remove `combined.md`

```{bash}
rm docs/c-documentation-markdown/combined.md
```

### Building the Python docs

Install dependencies in a local virtual environment

```{bash}
python -m venv venv
source venv/bin/activate
cd stochtree-repo
pip install --upgrade pip
pip install -r python_docs/requirements.txt
pip install sphinx-markdown-builder
pip install .
cd ..
```

Build the sphinx documentation as markdown output

```{bash}
sphinx-build -b markdown stochtree-repo/python_docs/source/ stochtree-repo/python_docs/_build/markdown/
```

Copy results into the `docs/` folder

```{bash}
mkdir -p docs/python-documentation-markdown
rm -rf docs/python-documentation-markdown/*
cp -r stochtree-repo/python_docs/_build/markdown/* docs/python-documentation-markdown/
```

### Building the R docs



### Building the doc site

Make sure `yarn` is enabled globally which you can do via the homebrew installation of node with

```{bash}
corepack enable
```

Now, install the website dependencies (`docusaurus` and other packages)

```{bash}
yarn install
```

Build the site using

```{bash}
yarn build
```

Render it locally with 

```{bash}
npm run serve
```
