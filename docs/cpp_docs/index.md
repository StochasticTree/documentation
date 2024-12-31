# StochTree C++ API

This page documents the data structures and interfaces that constitute the `stochtree` C++ core. 
It may be useful to researchers building novel tree algorithms or users seeking a deeper understanding of the algorithms implemented in `stochtree`. This resource is split into:

1. Technical documentation of the design / computational aspects of the C++ core
    1. [Tree API](tree.md): decision tree class which underpins the ensembles that `stochtree` samples
    2. [Tracker API](tracking.md): temporary data structures that synchronize a training dataset and the current state of a decision tree ensemble for faster sampling 
2. [Doxygen site](doxygen/index.html) with auto-generated documentation of C++ classes and functions
