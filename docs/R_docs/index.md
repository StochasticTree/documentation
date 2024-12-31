# StochTree R API Reference

Overview of the `stochtree` R library's key classes and functions, built as a [self-contained doc site](pkgdown/reference/index.html) using the [pkgdown](https://pkgdown.r-lib.org) format. The `stochtree` interface is divided into two "levels":

1. "High level": end-to-end implementations of stochastic tree ensembles for supervised learning (BART / XBART) and causal inference (BCF / XBCF). 
    1. The BART (supervised learning) interface is documented [here](pkgdown/reference/index.html#supervised-learning).
    2. The BCF (causal inference) interface is documented [here](pkgdown/reference/index.html#causal-inference).
2. "Low level": we provide access to most of the C++ sampling objects and functionality via R, which allow for custom sampling algorithms and integration of other model terms. This interface consists broadly of the following components:
    1. [Data API](pkgdown/reference/index.html#data): loading and storing in-memory data needed to train `stochtree` models.
    2. [Forest API](pkgdown/reference/index.html#forest): creating, storing, modifying, and sampling ensembles of decision trees that underlie all `stochtree` models.
    3. [Serialization API](pkgdown/reference/index.html#serialization): serializing models to JSON (files or in-memory strings).
    4. [Random Effects API](pkgdown/reference/index.html#random-effects): sampling from additive random effects models.
