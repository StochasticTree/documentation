# StochTree Documentation Source Code and Build Workflows

## Building the Docs Locally

### MacOS

#### Software dependencies

You'll need to have the following software installed

- Python: can be installed via [homebrew](https://formulae.brew.sh/formula/python@3.14), [conda](https://www.anaconda.com/download), and [directly from the python site](https://www.python.org/downloads/)
- R: can be installed via [CRAN](https://cran.r-project.org/) or [homebrew](https://formulae.brew.sh/formula/r)
- Quarto: can be installed [directly from the Quarto site](https://quarto.org/docs/get-started/) or [homebrew](https://formulae.brew.sh/cask/quarto)
- Doxygen: can be installed [directly from the Doxygen site](https://www.doxygen.nl/) or [homebrew](https://formulae.brew.sh/formula/doxygen)

#### Setting up R and Python build dependencies

Building multi-lingual (R and Python) vignettes requires installing the vignettes' package dependencies. In Python, this is done via a virtual environment (local `.venv`)

```{bash}
python -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
pip install git+https://github.com/StochasticTree/stochtree.git
```

And in R, this is typically done as a global system install, though you might also consider [`renv`](https://rstudio.github.io/renv/) for managing project-specific R dependencies

```{bash}
Rscript -e 'install.packages(c("remotes", "devtools", "roxygen2", "ggplot2", "latex2exp", "decor", "pkgdown", "cpp11", "BH", "doParallel", "foreach", "knitr", "Matrix", "MASS", "mvtnorm", "rmarkdown", "testthat", "tgp", "here", "reticulate"), repos="https://cloud.r-project.org/")'
Rscript -e 'remotes::install_github("StochasticTree/stochtree", ref = "r-dev")'
```

#### Building the vignettes with quarto

The vignettes live in the `vignettes/` directory and are configured as a standalone Quarto website via `vignettes/_quarto.yml`. Each `.qmd` file uses `{.panel-tabset group="language"}` tabsets to present R and Python code side-by-side. Python cells are executed via `reticulate`; set the `RETICULATE_PYTHON` environment variable to point at your `.venv` interpreter if it isn't picked up automatically.

To render all vignettes at once:

```bash
cd vignettes
quarto render
```

To render a single vignette:

```bash
cd vignettes
quarto render bart.qmd
```

To preview the vignette site locally with live reload:

```bash
cd vignettes
quarto preview
```

The rendered site is written to `vignettes/_site/`. Individual vignettes use `freeze: auto` in their frontmatter, so re-renders only re-execute cells whose source has changed. To force a full re-execution, delete `vignettes/_freeze/` before rendering.

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

### Building the overall website

The overall site is built and deployed via the GitHub Actions workflow in `.github/workflows/docs.yml`, which renders the Quarto vignettes, builds Doxygen (C++ API) and pkgdown (R API) docs, and publishes the result to the `gh-pages` branch.

To build and preview the vignette site locally, use `quarto preview` as described above. Full-site local builds (including embedded Doxygen / pkgdown output) are best done through the CI workflow.
