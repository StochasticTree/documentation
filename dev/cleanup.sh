# Remove output from the R pkgdown build
rm -rf docs/R_docs/*

# Remove output from the (C++) doxygen build
rm -rf docs/cpp_docs/doxygen/*

# Remove the stochtree_repo subfolder
rm -rf stochtree_repo

# Remove venv
rm -rf venv

# Remove jupyter notebooks from the docs/ directory
rm -f docs/python_docs/demo/*.ipynb
