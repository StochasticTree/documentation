#!/bin/bash

# Clone stochtree repo
git clone --recursive git@github.com:StochasticTree/stochtree.git stochtree_repo
cd stochtree_repo
git checkout documentation-overhaul
cd ..

# Setup python virtual environment and the stochtree python package
python -m venv venv
source venv/bin/activate
cd stochtree_repo
pip install --upgrade pip
pip install numpy scipy pytest pandas scikit-learn pybind11
pip install .
cd ..

# Install python dependencies for the doc site
pip install mkdocs-material
pip install mkdocstrings-python
pip install mkdocs-jupyter

# Build the C++ doxygen output
sed -i '' 's|^OUTPUT_DIRECTORY *=.*|OUTPUT_DIRECTORY = ../docs/cpp_docs/|' stochtree_repo/Doxyfile
sed -i '' 's|^GENERATE_XML *=.*|GENERATE_XML = NO|' stochtree_repo/Doxyfile
sed -i '' 's|^GENERATE_HTML *=.*|GENERATE_HTML = YES|' stochtree_repo/Doxyfile
mkdir -p docs/cpp_docs/
cd stochtree_repo
doxygen Doxyfile
cd ..

# Install R package dependencies
Rscript -e 'install.packages(c("remotes", "devtools", "roxygen2", "ggplot2", "latex2exp", "decor", "pkgdown", "cpp11", "BH", "doParallel", "foreach", "knitr", "Matrix", "MASS", "mvtnorm", "rmarkdown", "testthat", "tgp"), repos="https://cloud.r-project.org/")'

# Build the R package doc site
cd stochtree_repo
Rscript cran-bootstrap.R 
cp _pkgdown.yml stochtree_cran/_pkgdown.yml
cp R_README.md stochtree_cran/README.md
cd ..
mkdir -p docs/R_docs
Rscript -e 'pkgdown::build_site_github_pages("stochtree_repo/stochtree_cran", dest_dir = "../../docs/R_docs", install = TRUE)'

# Copy Jupyter notebook demos over to docs directory
cp stochtree_repo/demo/notebooks/supervised_learning.ipynb docs/python_docs/demo/supervised_learning.ipynb
cp stochtree_repo/demo/notebooks/causal_inference.ipynb docs/python_docs/demo/causal_inference.ipynb

# Build the doc site
mkdocs build
