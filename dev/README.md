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

Build the sphinx documentation as markdown output

```{bash}
python -m venv cpp_venv
source cpp_venv/bin/activate
pip install --upgrade pip
pip install -r stochtree-repo/cpp_docs/requirements.txt
pip install sphinx-markdown-builder
doxygen stochtree-repo/cpp_docs/Doxyfile
sphinx-build -b markdown stochtree-repo/cpp_docs/ stochtree-repo/cpp_docs/_build/markdown/
```

Copy results into the `docs/` folder

```{bash}
mkdir -p docs/cpp-documentation-markdown
rm -rf docs/cpp-documentation-markdown/*
cp -r stochtree-repo/cpp_docs/_build/markdown/* docs/cpp-documentation-markdown/
```

### Building the Python docs

Install dependencies in a local virtual environment

```{bash}
python -m venv python_venv
source python_venv/bin/activate
cd stochtree-repo
pip install --upgrade pip
pip install -r python_docs/requirements.txt
pip install .
```

<!-- Build the sphinx documentation as markdown output

```{bash}
sphinx-build -b markdown stochtree-repo/python_docs/source/ stochtree-repo/python_docs/_build/markdown/
``` -->

<!-- Copy results into the `docs/` folder

```{bash}
mkdir -p docs/python-documentation-markdown
rm -rf docs/python-documentation-markdown/*
cp -r stochtree-repo/python_docs/_build/markdown/* docs/python-documentation-markdown/
``` -->

Build the sphinx documentation

```{bash}
sphinx-build -M html python_docs/source/ ../static/python_docs/
cd ..
```

### Building the R docs

```{bash}
cd stochtree-repo
Rscript cran-bootstrap.R 
cp _pkgdown.yml stochtree_cran/_pkgdown.yml
cp R_README.md stochtree_cran/README.md
Rscript -e 'pkgdown::build_site_github_pages("stochtree_cran", dest_dir = "../../static/R_docs", install = TRUE)'
cd ..
```

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
