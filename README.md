# StochTree Documentation Source Code and Build Workflows

## Building the Docs Locally

### MacOS

#### Cloning the repo 

First, you will need the stochtree repo on your local machine. 
Navigate to the `documentation` repo in your terminal (*replace `~/path/to/documentation` with the path to the documentation repo on your local system*).

```{bash}
cd ~/path/to/documentation
```

Now, recursively clone the main `stochtree` repo into a `stochtree_repo` subfolder of the `documentation` repo

```{bash}
git clone --recursive git@github.com:StochasticTree/stochtree.git stochtree_repo
```

#### Setting up build dependencies

The docs are largely built using [`mkdocs`](https://www.mkdocs.org), [`pkgdown`](https://pkgdown.r-lib.org) and [`doxygen`](https://www.doxygen.nl/index.html), 
with everything tied together using the ["Material for MkDocs"](https://squidfunk.github.io/mkdocs-material/) theme. 

We first create a virtual environment and install the dependencies for `stochtree` as well as the doc site (several python packages: `mkdocs-material`, `mkdocstrings-python`, and `mkdocs-jupyter`).

```{bash}
python -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
```

##### stochtree

Now, we build the `stochtree` python library locally in the virtual environment activated above

```{bash}
cd stochtree_repo
pip install .
cd ..
```

##### pkgdown

To use `pkgdown`, you need to install [R](https://cran.r-project.org). 
One R is installed, make sure the dependendencies of the pkgdown build are installed

```{bash}
Rscript -e 'install.packages(c("remotes", "devtools", "roxygen2", "ggplot2", "latex2exp", "decor", "pkgdown", "cpp11", "BH", "doParallel", "foreach", "knitr", "Matrix", "MASS", "mvtnorm", "rmarkdown", "testthat", "tgp"), repos="https://cloud.r-project.org/")'
```

### Building the R docs

To build the R docs, first run a script that lays out the package as needed

```{bash}
cd stochtree_repo
Rscript cran-bootstrap.R 
cp _pkgdown.yml stochtree_cran/_pkgdown.yml
cp R_README.md stochtree_cran/README.md
cd ..
```

Then run the `pkgdown` build workflow to put the R docs in the correct folder

```{bash}
mkdir -p docs/R_docs/pkgdown
Rscript -e 'pkgdown::build_site_github_pages("stochtree_repo/stochtree_cran", dest_dir = "../../docs/R_docs/pkgdown", install = TRUE)'
rm -rf stochtree_repo/stochtree_cran
```

### Building the doxygen site for the C++ API

First, ensure that you have [doxygen](https://www.doxygen.nl/index.html) installed. 
On MacOS, this can be [done via homebrew](https://formulae.brew.sh/formula/doxygen) (i.e. `brew install doxygen`). 

Then, modify the `Doxyfile` to build the C++ documentation as desired and build the doxygen site

```{bash}
sed -i '' 's|^OUTPUT_DIRECTORY *=.*|OUTPUT_DIRECTORY = ../docs/cpp_docs/|' stochtree_repo/Doxyfile
sed -i '' 's|^GENERATE_XML *=.*|GENERATE_XML = NO|' stochtree_repo/Doxyfile
sed -i '' 's|^GENERATE_HTML *=.*|GENERATE_HTML = YES|' stochtree_repo/Doxyfile
mkdir -p docs/cpp_docs/
cd stochtree_repo
doxygen Doxyfile
cd ..
```

### Copying Jupyter notebook demos to the docs directory

```{bash}
cp stochtree_repo/demo/notebooks/supervised_learning.ipynb docs/python_docs/demo/supervised_learning.ipynb
cp stochtree_repo/demo/notebooks/causal_inference.ipynb docs/python_docs/demo/causal_inference.ipynb
```

### Building the overall website

To build and preview the site locally, run 

```{bash}
mkdocs serve
```

To build the files underlying the static site, run

```{bash}
mkdocs build
```
