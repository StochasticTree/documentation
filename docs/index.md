# StochTree

`stochtree` (short for "stochastic tree") is a software suite for flexible decision tree modeling. 
It has two primary interfaces:

1. "High-level": robust implementations of many popular stochastic tree algorithms (BART, XBART, BCF, XBCF), with support for serialization and parallelism.
2. "Low-level": access to the "inner loop" of a stochastic forest sampler, allowing custom tree algorithm development in <50 lines of code.

The "core" of the software is written in C++, but it provides R and Python APIs. 
The R package is [available on CRAN](https://cran.r-project.org/web/packages/stochtree/index.html) and the python package will soon be on PyPI.

## Table of Contents

* [Getting Started](getting-started.md): Details on how to install and use `stochtree`
* [About](about.md): Overview of the models supported by stochtree and pointers to further reading
* [R Package](R_docs/index.md): Complete documentation of the R package
* [Python Package](python_docs/index.md): Complete documentation of the python package
* [C++ Core API and Architecture](cpp_docs/index.md): Overview and documentation of the C++ codebase that supports stochtree
* [Development](development/index.md): Roadmap and how to contribute
