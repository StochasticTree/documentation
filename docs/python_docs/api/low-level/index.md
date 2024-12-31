# Low-Level API

In addition to high-level samplers for [BART](../bart.md) and [BCF](../bcf.md), 
the `stochtree` Python library provides direct access to many of the computational structures that 
underlie stochastic tree algorithms: tree ensembles, sampling algorithms, and "tracking" data structures 
that enable the algorithms to work effectively. This interface consists of:

1. [Data API](dataset.md): loading and storing in-memory data needed to train `stochtree` models.
2. [Forest API](forest.md): creating, storing, and modifying ensembles of decision trees that underlie all `stochtree` models.
3. [Sampler API](sampler.md): sampling from stochastic tree ensemble models as well as several supported parametric models.
4. [Utilities API](utilities.md): seeding a C++ random number generator, preprocessing data, and serializing models to JSON (files or in-memory strings).
