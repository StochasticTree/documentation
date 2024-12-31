# StochTree Python API Reference

Overview of the `stochtree` python library's key classes and functions.

The `stochtree` interface is divided into two "levels":

1. "High level": end-to-end implementations of stochastic tree ensembles for supervised learning (BART / XBART) and causal inference (BCF / XBCF). Both interfaces are designed to mirror the [scikit-learn estimator style](https://scikit-learn.org/dev/developers/develop.html), with the `.fit()` method replaced by a `.sample()` method.
    1. The BART (supervised learning) interface is documented [here](bart.md).
    2. The BCF (causal inference) interface is documented [here](bcf.md).
2. "Low level": we provide access to most of the C++ sampling objects and functionality via Python, which allow for custom sampling algorithms and integration of other model terms. This interface is documented [here](low-level/index.md) and consists broadly of the following components:
    1. [Data API](low-level/dataset.md): loading and storing in-memory data needed to train `stochtree` models.
    2. [Forest API](low-level/forest.md): creating, storing, and modifying ensembles of decision trees that underlie all `stochtree` models.
    3. [Sampler API](low-level/sampler.md): sampling from stochastic tree ensemble models as well as several supported parametric models.
    4. [Utilities API](low-level/utilities.md): seeding a C++ random number generator, preprocessing data, and serializing models to JSON (files or in-memory strings).
