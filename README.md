# Summary of the Documentation Generation Workflow

The GitHub Actions workflow for our `documentation` repository automates the process of generating and updating the Python, R, and C++ documentation. Here's how it works:

1. **Clones the Repositories**:
   - **Documentation Repo**: It starts by checking out the current `documentation` repository (where this workflow runs).
   - **Stochtree Repo**: It then clones the `stochtree` repository into a subfolder (`stochtree-repo`). This allows the workflow to access the source code needed to build the documentation.

2. **Sets Up the Python Environment**:
   - **Python Version**: The workflow sets up Python 3.10 using the `actions/setup-python@v5` action.
   - **Dependencies**: It installs all necessary Python packages and dependencies required to build the Python documentation.

3. **Builds the Python Documentation**:
   - **Sphinx**: Using Sphinx, a tool for creating documentation, the workflow generates the HTML files from the Python source code in the `stochtree` repository. This converts the docstrings and comments in the code into readable documentation.
   - **Copies Documentation**: The newly generated Python documentation files are copied into the `docs/python-documentation` directory of the `documentation` repository. Any old files in this directory are removed beforehand to ensure only the latest documentation is present.

4. **Sets Up the R Environment**:
   - **Pandoc**: The workflow sets up Pandoc using the `r-lib/actions/setup-pandoc@v2` action, which is required for building R documentation.
   - **R Version**: It sets up R using the `r-lib/actions/setup-r@v2` action with `use-public-rspm: true` to utilize the public R package repository.
   - **Dependencies**: The workflow installs all necessary R packages, including `remotes`, `pkgdown`, `ggplot2`, `latex2exp`, and `decor`, to build the R documentation.

5. **Prepares the R Documentation Build Environment**:
   - **Directory Setup**: It creates a `stochtree_cran/src` directory and copies the `Makevars` file from `stochtree-repo/src/Makevars` to `stochtree_cran/src/Makevars`.
   - **Copies Essential Files**: Copies `DESCRIPTION`, `_pkgdown.yml`, and `R_README.md` into the `stochtree_cran/` directory.

6. **Builds the R Documentation**:
   - **Run Bootstrap Script**: Executes `cran-bootstrap.R` to prepare the R package for documentation.
   - **Install Dependencies**: Installs all R package dependencies listed in the `DESCRIPTION` file.
   - **Generate Documentation**: Uses `pkgdown` to build the R documentation site, outputting it to `docs/r-documentation`.

7. **Copies R Documentation to Docs Directory**:
   - The built R documentation is copied from `stochtree-repo/docs/r-documentation/` to `docs/r-documentation/` in the root of the `documentation` repository. This ensures that both Python and R documentation are located within the `docs/` directory.

8. **Sets Up the C++ Environment**:
   - **Install Doxygen and Graphviz**: The workflow installs Doxygen and Graphviz, which are required for generating C++ documentation from the source code.
   - **Install Sphinx and Breathe**: It installs Sphinx and the Breathe extension to convert Doxygen XML output into HTML documentation.

9. **Builds the C++ Documentation**:
   - **Generate Doxyfile**: Generates a default Doxygen configuration file (`Doxyfile`).
   - **Configure Doxyfile**: Adjusts the `Doxyfile` settings to:
     - **Input Directory**: Set `INPUT = src` to specify the C++ source code directory.
     - **Enable XML Output**: Set `GENERATE_XML = YES` to enable XML output needed by Breathe.
     - **Recursive Scanning**: Set `RECURSIVE = YES` to include all subdirectories within `src`.
     - **Output Directory**: Set `OUTPUT_DIRECTORY = doxygen_output` to specify where Doxygen outputs files.
     - **Project Name**: Set `PROJECT_NAME = "stochtree"` for identification in the documentation.
   - **Run Doxygen**: Executes Doxygen to generate XML files from the C++ source code.
   - **Set Up Sphinx Project for C++ Documentation**:
     - **Initialize Sphinx**: Runs `sphinx-quickstart` to create a new Sphinx project tailored for C++ documentation.
     - **Configure Breathe**: Modifies `conf.py` to include the Breathe extension and point it to the Doxygen XML output.
   - **Create Sphinx Index File**: Adds a reference to the Doxygen-generated XML in the Sphinx `index.rst` file.
   - **Build HTML Documentation**: Uses Sphinx to build the HTML documentation from the Doxygen XML output.

10. **Copies C++ Documentation to Docs Directory**:
    - The generated C++ documentation is copied from `stochtree-repo/docs/cpp/build/html/` to `docs/c-documentation/` in the root of the `documentation` repository. This ensures that the C++ documentation is located within the `docs/` directory alongside the Python and R documentation.

11. **Commits and Pushes the Updated Documentation**:
    - **Branch Creation**: The workflow checks if there are any changes to the documentation. If there are, it creates a new temporary branch (e.g., `docs-temp-11060215628`).
    - **Commit Changes**: It commits the updated Python, R, and C++ documentation to this temporary branch.
    - **Push Branch**: The temporary branch is pushed to the repository.
    - **Merge Changes**: The workflow then merges the temporary branch back into the `main` branch, effectively updating the documentation in the repository.
    - **Clean Up**: After merging, the temporary branch is deleted to keep the repository clean.

12. **Automates Documentation Updates**:
    - By running this workflow whenever changes are pushed to the `main` branch, it ensures that the Python, R, and C++ documentation are always up-to-date with the latest code changes without any manual effort.
