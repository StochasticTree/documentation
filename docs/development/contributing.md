# Contributing

`stochtree` is hosted on [Github](https://github.com/StochasticTree/stochtree/). 
Any feedback, requests, or bug reports can be submitted as [issues](https://github.com/StochasticTree/stochtree/issues). 
Moreover, if you have ideas for how to improve stochtree, we welcome [pull requests](https://github.com/StochasticTree/stochtree/pulls).

## Building StochTree

Any local stochtree development will require cloning the repository from Github. 
If you don't have git installed, you can do so following [these instructions](https://learn.microsoft.com/en-us/devops/develop/git/install-and-set-up-git). 

Once git is available at the command line, navigate to the folder that will store this project (in bash / zsh, this is done by running `cd` followed by the path to the directory). 
Then, clone the `stochtree` repo as a subfolder by running
```{bash}
git clone --recursive https://github.com/StochasticTree/stochtree.git
```

*NOTE*: this project incorporates several C++ dependencies as [git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules), 
which is why the `--recursive` flag is necessary. If you have already cloned the repo without the `--recursive` flag, 
you can retrieve the submodules recursively by running `git submodule update --init --recursive` in the main repo directory.

### R 

This section will detail how to use RStudio to build and make changes to stochtree. There are other tools that are useful for R 
package development (for example, [Positron](https://github.com/posit-dev/positron), [VS Code](https://code.visualstudio.com/docs/languages/r), 
and [ESS](https://ess.r-project.org/)), but we will focus on RStudio in this walkthrough.

Once you've cloned the stochtree repository, follow these steps to build stochtree:

1. [Create an RStudio project in the stochtree directory](https://support.posit.co/hc/en-us/articles/200526207-Using-RStudio-Projects)
2. [Build the package in RStudio](https://docs.posit.co/ide/user/ide/guide/pkg-devel/writing-packages.html#building-a-package)

Note that due to the complicated folder structure of the stochtree repo, step 2 might not work out of the box on all platforms. 
If stochtree fails to build, you can use the script that we use to create a CRAN-friendly stochtree R package directory, which 
creates a `stochtree_cran` subdirectory of the stochtree folder and copies the relevant R package files into this subfolder.
You can run this script by entering `Rscript cran-bootstrap.R 1 1 1` in the terminal in RStudio. 
Once you have a `stochtree_cran` subfolder, you can build stochtree using

```{r}
devtools::install_local("stochtree_cran")
```

Since this is a temporary folder, you can clean it up by running `Rscript cran-cleanup.R` in the terminal in RStudio.

### Python

Building and making changes to the python library is best done in an isolated virtual environment. There are many different ways of 
managing virtual environments in Python, but here we focus on `conda` and `venv`.

#### Conda

Conda provides a straightforward experience in managing python dependencies, avoiding version conflicts / ABI issues / etc.

To build stochtree using a `conda` based workflow, first create and activate a conda environment with the requisite dependencies

```{bash}
conda create -n stochtree-dev -c conda-forge python=3.10 numpy scipy pytest pandas pybind11 scikit-learn matplotlib seaborn
conda activate stochtree-dev
pip install jupyterlab
```

Then install the package by navigating to the stochtree directory and running

```{bash}
pip install .
```

Note that if you are making changes and finding that they aren't reflected after a reinstall of stochtree, you can 
clear all of the python package build artifacts with 

```{bash}
rm -rf stochtree.egg-info; rm -rf .pytest_cache; rm -rf build
```

and then rerun `pip install .`

#### Venv

You could also use venv for environment management. First, navigate to the folder in which you usually store virtual environments 
(i.e. `cd /path/to/envs`) and create and activate a virtual environment:

```{bash}
python -m venv venv
source venv/bin/activate
```

Install all of the package (and demo notebook) dependencies

```{bash}
pip install numpy scipy pytest pandas scikit-learn pybind11 matplotlib seaborn jupyterlab
```

Then install the package by navigating to the stochtree directory and running

```{bash}
pip install .
```

Note that if you are making changes and finding that they aren't reflected after a reinstall of stochtree, you can 
clear all of the python package development artifacts with 

```{bash}
rm -rf stochtree.egg-info; rm -rf .pytest_cache; rm -rf build
```

and then rerun `pip install .`

### C++

#### CMake

The C++ project can be built independently from the R / Python packages using `cmake`. 
See [here](https://cmake.org/install/) for details on installing cmake (alternatively, 
on MacOS, `cmake` can be installed using [homebrew](https://formulae.brew.sh/formula/cmake)).
Once `cmake` is installed, you can build the CLI by navigating to the main 
project directory at your command line (i.e. `cd /path/to/stochtree`) and 
running the following code 

```{bash}
rm -rf build
mkdir build
cmake -S . -B build
cmake --build build
```

The CMake build has two primary targets, which are detailed below

##### Debug Program

`debug/api_debug.cpp` defines a standalone target that can be straightforwardly run with a debugger (i.e. `lldb`, `gdb`) 
while making non-trivial changes to the C++ code.
This debugging program is compiled as part of the CMake build if the `BUILD_DEBUG_TARGETS` option in `CMakeLists.txt` is set to `ON`.

Once the program has been built, it can be run from the command line via `./build/debugstochtree` or attached to a debugger 
via `lldb ./build/debugstochtree` (clang) or `gdb ./build/debugstochtree` (gcc).

##### Unit Tests

We test `stochtree` using the [GoogleTest](https://google.github.io/googletest/) framework.
Unit tests are compiled into a single target as part of the CMake build if the `BUILD_TEST` option is set to `ON` 
and the test suite can be run after compilation via `./build/teststochtree`

## Debugging

Debugging stochtree invariably leads to the "core" C++ codebase, which requires care to debug correctly.
Below we detail how to debug stochtree's C++ core through each of the three interfaces (C++, R and Python).

### C++ Program

The `debugstochtree` cmake target exists precisely to quickly debug the C++ core of stochtree.

First, you must build the program using debug symbols, which you can do by enabling the `USE_DEBUG` optoon 
and ensuring that `BUILD_DEBUG_TARGETS` is also switched on, as below

```{bash}
rm -rf build
mkdir build
cmake -S . -B build -DBUILD_DEBUG_TARGETS=ON -DUSE_DEBUG=ON
cmake --build build
```

From here, you can debug at the command line using [lldb](https://lldb.llvm.org/) on MacOS on [gdb](https://sourceware.org/gdb/) on linux by running
either `lldb ./build/debugstochtree` or `gdb ./build/debugstochtree` and using the appropriate lldb / gdb shortcuts to debug your program.

#### xcode

While using `gdb` or `lldb` on `debugstochtree` at the command line is very helpful, users may prefer debugging in a full-fledged IDE like xcode (if working in MacOS). 
This project's C++ core can be converted to an xcode project from `CMakeLists.txt`, but first you must turn off sanitizers 
(xcode seems to have its own way of setting this at build time for different configurations, and having injected 
`-fsanitize=address` statically into compiler arguments will cause xcode errors). To do this, modify the `USE_SANITIZER` line in `CMakeLists.txt`:

```
option(USE_SANITIZER "Use santizer flags" OFF)
```

To generate an XCode project based on the build targets and specifications defined in a `CMakeLists.txt`, navigate to the main project folder (i.e. `cd /path/to/project`) and run the following commands:

```{bash}
rm -rf xcode/
mkdir xcode
cd xcode
cmake -G Xcode .. -DCMAKE_C_COMPILER=cc -DCMAKE_CXX_COMPILER=c++ -DUSE_SANITIZER=OFF -DUSE_DEBUG=OFF
cd ..
```

Now, if you navigate to the xcode subfolder (in Finder), you should be able to click on a `.xcodeproj` file and the project will open in XCode.

### R Package

Debugging stochtree R code requires building the R package with debug symbols.
The simplest way to do this is to open your R installation's `Makevars` file 
by running `usethis::edit_r_makevars()` in RStudio which will open `Makevars` 
in a code editor.

If your `Makevars` file already has a line that begins with `CXX17FLAGS = ...`, 
look for a `-g -O2` compiler flag and change this to `-g -O0`. If this flag isn't 
set in the `CXX17FLAGS = ` line, then simply add `-g -O0` to this line after the ` = `.
If your `Makevars` file already does not have a line that begins with `CXX17FLAGS = ...`, 
add `CXX17FLAGS = -g -O0`.

Now, rebuild the R package as above. Save the R code you'd like to debug to an R script. 
Suppose for the sake of illustration that the code you want to debug is saved in 
`path/to/debug_script.R`.

At the command line (either the terminal in RStudio or your local terminal program), 
run `R -d lldb` if you are using MacOS (or `R -d gdb` if you are using Linux).

Now, you'll see an lldb prompt which should look like below with a blinking cursor after it

```
(lldb) 
```

From there, you can set breakpoints, either to specific lines of specific files like `b src/tree.cpp:2117` or to break whenever there is an error using `breakpoint set -E c++`.
(**Note**: in gdb, the breakpoint and control flow commands are slightly different, see [here](https://www.maths.ed.ac.uk/~swood34/RCdebug/RCdebug.html) for more detail on debugging R through `gdb`.)
Now, you can run R through the debugger by typing

```
r
```

This should load an R console, from which you can execute a script you've set up to run your code using 

```{r}
source("path/to/debug_script.R")
```

The code will either stop when it hits your first line-based breakpoint or when it runs into an error if you set the error-based breakpoint.
From there, you can navigate using `lldb` (or `gdb`) commands.

**Note**: once you've loaded the R console, you can also simply interactively run commands that call stochtree's C++ code (i.e. running the `bart()` or `bcf()` functions). If you're debugging at this level, you probably have a specific problem in mind, and using a repeatable script will be worth your while, but it is not strictly necessary.

### Python Package

First, you need to build stochtree's C++ extension with debug symbols. 
As always, start by navigating to the stochtree directory (i.e. `cd /path/to/stochtree/`) 
and activating your development virtual environment (i.e. `conda activate [env_name]` or `source venv/bin/activate`).

Since stochtree builds its C++ extension via cmake [following this example](https://github.com/pybind/cmake_example), 
you'll need to ensure that the `self.debug` field in the `CMakeBuild` class is set to `True`. 
You can do this by setting an environment variable of `DEBUG` equal to 1.
In bash, you can do this with `export DEBUG=1` at the command line. 

Once this is done, build the python library using 

```{bash}
pip install .
```

Suppose you'd like to debug stochtree through a script called `/path/to/script.py`.

First, target a python process with `lldb` (or, alternatively, replace with `gdb` below if you use `gcc` as your compiler) via

```
lldb python
```

Now, you'll see an lldb (or gdb) prompt which should look like below with a blinking cursor after it

```
(lldb) 
```

From there, you can set breakpoints, either to specific lines of specific files like `b src/tree.cpp:2117` or to break whenever there is an error using `breakpoint set -E c++`.
(If you're using `gdb`, see [here](https://lldb.llvm.org/use/map.html) for a comparison between lldb commands and gdb commands for setting breakpoints and navigating your program.)
Now you can run your python script through the debugger by typing

```
r /path/to/script.py
```

The program will run until the first breakpoint is hit, and at this point you can navigate using lldb (or gdb) commands.

**Note**: rather than running a script like `/path/to/script.py` above, you can also simply load the python console by typing `r` at the `(lldb)` terminal and then interactively run commands that call stochtree's C++ code (i.e. sampling `BARTModel` or `BCFModel` objects). If you're debugging at this level, you probably have a specific problem in mind, and using a repeatable script will be worth your while, but it is not strictly necessary.
