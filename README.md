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

The docs are largely built using [`Sphinx`](https://www.sphinx-doc.org/en/master/) and [`pkgdown`](https://pkgdown.r-lib.org). 

##### Sphinx

To use Sphinx, you need to install a working verion of python, probably the simplest of which is the [anaconda](https://docs.conda.io/projects/conda/en/stable/user-guide/install/index.html) suite.

```{bash}
python -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r sphinx_docs/requirements.txt
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
mkdir -p sphinx_docs/source/_static/R_docs
Rscript -e 'pkgdown::build_site_github_pages("stochtree_repo/stochtree_cran", dest_dir = "../../sphinx_docs/source/_static/R_docs", install = TRUE)'
```

### Building the doc site

Build the sphinx documentation

```{bash}
source venv/bin/activate
sed -i '' 's|^OUTPUT_DIRECTORY *=.*|OUTPUT_DIRECTORY = sphinx_docs/doxygen_output|' stochtree_repo/cpp_docs/Doxyfile
mkdir -p sphinx_docs/doxygen_output/
doxygen stochtree_repo/cpp_docs/Doxyfile
sphinx-build -M html sphinx_docs/source/ sphinx_docs/_build/
source deactivate
```
