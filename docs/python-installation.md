# StochTree Python Package

The python package is not yet on PyPI but can be installed from source using pip's [git interface](https://pip.pypa.io/en/stable/topics/vcs-support/). 
To proceed, you will need a working version of [git](https://git-scm.com) and python 3.8 or greater (available from several sources, one of the most 
straightforward being the [anaconda](https://docs.conda.io/projects/conda/en/stable/user-guide/install/index.html) suite).

## Quick start

Without worrying about virtual environments (detailed further below), `stochtree` can be installed from the command line

```
pip install numpy scipy pytest pandas scikit-learn pybind11
pip install git+https://github.com/StochasticTree/stochtree.git
```

## Virtual environment installation

Often, users prefer to manage different projects (with different package / python version requirements) in virtual environments. 

### Conda

Conda provides a straightforward experience in managing python dependencies, avoiding version conflicts / ABI issues / etc.

To build stochtree using a `conda` based workflow, first create and activate a conda environment with the requisite dependencies

```{bash}
conda create -n stochtree-dev -c conda-forge python=3.10 numpy scipy pytest pandas pybind11 scikit-learn matplotlib seaborn
conda activate stochtree-dev
```

Then install the package from github via pip

```{bash}
pip install git+https://github.com/StochasticTree/stochtree.git
```

(*Note*: if you'd also like to run `stochtree`'s notebook examples, you will also need jupyterlab, seaborn, and matplotlib)

```{bash}
conda install matplotlib seaborn
pip install jupyterlab
```

With these dependencies installed, you can [clone the repo](###cloning-the-repository) and run the `demo/` examples.

### Venv

You could also use venv for environment management. First, navigate to the folder in which you usually store virtual environments 
(i.e. `cd /path/to/envs`) and create and activate a virtual environment:

```{bash}
python -m venv venv
source venv/bin/activate
```

Install all of the package (and demo notebook) dependencies

```{bash}
pip install numpy scipy pytest pandas scikit-learn pybind11
```

Then install stochtree via

```{bash}
pip install git+https://github.com/StochasticTree/stochtree.git
```

As above, if you'd like to run the notebook examples in the `stochtree` repo, you will also need jupyterlab, seaborn, and matplotlib and you will have to [clone the repo](###cloning-the-repository)

```{bash}
pip install matplotlib seaborn jupyterlab
```
