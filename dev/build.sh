#!/bin/bash

# Clone stochtree repo
git clone --recursive git@github.com:StochasticTree/stochtree.git stochtree_repo

# Set up python virtual environment and dependencies
python -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt

# Install python package
cd stochtree_repo
pip install .
cd ..

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
Rscript cran-bootstrap.R 1 1 1
cd ..
mkdir -p docs/R_docs/pkgdown
Rscript -e 'pkgdown::build_site_github_pages("stochtree_repo/stochtree_cran", dest_dir = "../../docs/R_docs/pkgdown", install = TRUE)'
rm -rf stochtree_repo/stochtree_cran

# Copy Jupyter notebook demos over to docs directory
cp stochtree_repo/demo/notebooks/supervised_learning.ipynb docs/python_docs/demo/supervised_learning.ipynb
cp stochtree_repo/demo/notebooks/causal_inference.ipynb docs/python_docs/demo/causal_inference.ipynb
cp stochtree_repo/demo/notebooks/heteroskedastic_supervised_learning.ipynb docs/python_docs/demo/heteroskedastic_supervised_learning.ipynb
cp stochtree_repo/demo/notebooks/multivariate_treatment_causal_inference.ipynb docs/python_docs/demo/multivariate_treatment_causal_inference.ipynb
cp stochtree_repo/demo/notebooks/serialization.ipynb docs/python_docs/demo/serialization.ipynb
cp stochtree_repo/demo/notebooks/tree_inspection.ipynb docs/python_docs/demo/tree_inspection.ipynb

# Build the doc site
mkdocs build
