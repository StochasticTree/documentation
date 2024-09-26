# Summary of the Documentation Generation Workflow

The GitHub Actions workflow for our documentation repo automates the process of generating and updating the Python documentation. Here's how it works:

1. **Clones the Repositories**: It starts by checking out the current `documentation` repository (where this workflow runs) and then clones the `stochtree` repository into a subfolder. This allows the workflow to access the source code needed to build the documentation.

2. **Sets Up the Python Environment**: The workflow sets up Python 3.10 and installs all the necessary packages and dependencies required to build the documentation. This ensures that the environment is correctly configured for the build process.

3. **Builds the Documentation**: Using Sphinx, a tool for creating documentation, the workflow generates the HTML files from the source code in the `stochtree` repository. This converts the docstrings and comments in the code into readable documentation.

4. **Updates the Documentation Directory**: The newly generated documentation files are copied into the `docs/python-documentation` directory of the `documentation` repository. Any old files in this directory are removed beforehand to ensure only the latest documentation is present.

5. **Commits the Changes**: The workflow checks if there are any changes to the documentation. If there are, it creates a new temporary branch, commits the updated documentation to this branch, and pushes it to the repository.

6. **Merges the Updates into the Main Branch**: It then switches to the `main` branch and merges the temporary branch containing the updated documentation. This updates the `main` branch with the latest documentation.

7. **Cleans Up**: After merging, the workflow deletes the temporary branch to keep the repository clean.

8. **Automates Documentation Updates**: By running this workflow whenever changes are pushed to the `main` branch, it ensures that our documentation is always up-to-date with the latest code changes without any manual effort.