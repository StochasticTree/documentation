# Remove the stochtree_repo subfolder
rm -rf stochtree_repo

# Remove venv
rm -rf venv

# Remove jupyter notebooks from the docs/ directory
rm -f docs/python_docs/demo/*.ipynb

# Remove Python / R vignettes
rm -f docs/vignettes/Python/*.html
rm -f docs/vignettes/Python/*.png
rm -f docs/vignettes/R/*.html
